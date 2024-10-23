import { supabase } from "./supabase";

export async function getSetings() {
  let { data: settings, error } = await supabase
    .from("settings")
    .select("*")
    .single();

  if (error) throw Error(error.message);
  return settings;
}

export async function updateSettings(obj) {
  const { data, error } = await supabase
    .from("settings")
    .update(obj)
    .eq("id", 1)
    .select()
    .single();

  if (error) throw Error(error.message);
  return data;
}
