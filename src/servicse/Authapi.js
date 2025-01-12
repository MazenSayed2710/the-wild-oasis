import { supabase, supabaseUrl } from "./supabase";

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);
  return data;
}

export async function getUser() {
  const { data } = await supabase.auth.getUser();

  return data;
}
export async function logout() {
  let { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
export async function signUp({ fullName, email, password }) {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function UpdateUser({ fullName, password, avatar }) {
  let userupdate;

  if (!password) {
    const imageName = `${Math.random()}-${avatar[0].name}`;
    const imageUrl = `${supabaseUrl}/storage/v1/object/public/cabins-images/${imageName}`;
    const { error: storageError } = await supabase.storage
      .from("cabins-images")
      .upload(imageName, avatar[0]);

    if (storageError) throw Error(storageError.message);

    userupdate = supabase.auth.updateUser({
      data: { fullName: fullName, avatar: imageUrl },
    });
  } else {
    userupdate = supabase.auth.updateUser({
      password: password,
    });
  }

  const { data, error } = await userupdate;

  if (error) throw Error(error.message);

  return data;
}
