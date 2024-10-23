import { supabase, supabaseUrl } from "./supabase";
export async function getCabins({ status, sort }) {
  let query = supabase.from("cabins").select("*");

  const [sortBy, sortType] = sort.split("-");

  if (status === "no-discount") {
    query = query.eq("discount", 0);
  } else if (status === "with-discount") {
    query = query.neq("discount", 0);
  }

  sort && query.order(sortBy, { ascending: sortType === "asc" });

  let { data: cabins, error } = await query;

  if (error) {
    console.error(error.message);
    throw Error(error.message);
  }

  return cabins;
}
export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error.message);
    throw Error(error.message);
  }
}

export async function createCabin(obj) {
  const imageName = `${Math.random()}-${obj.image[0].name}`;
  const imageUrl = `${supabaseUrl}/storage/v1/object/public/cabins-images/${imageName}`;

  const { error: storageError } = await supabase.storage
    .from("cabins-images")
    .upload(imageName, obj.image[0]);

  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...obj, image: imageUrl }])
    .select();

  if (error) {
    console.error(error.message);
    throw Error(error.message);
  }

  if (storageError) {
    supabase.from("cabins").delete().eq("id", data.id);
  }

  return data;
}

export async function editCabin(obj) {
  const imageUrl = `${supabaseUrl}/storage/v1/object/public/cabins-images/${obj.image[0].name}`;
  console.log(obj);
  const { error: storageError } = await supabase.storage
    .from("cabins-images")
    .upload(obj.image[0].name, obj.image[0]);

  const { data, error } = await supabase
    .from("cabins")
    .update({ ...obj, image: imageUrl })
    .eq("id", obj.id)
    .select();

  if (error) {
    console.error(error.message);
    throw Error(error.message);
  }

  if (storageError) {
    supabase.from("cabins").delete().eq("id", data.id);
  }

  return data;
}
