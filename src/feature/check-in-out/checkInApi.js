import { supabase } from "../../servicse/supabase";

export async function checkIn(id) {
  const { data, error } = await supabase
    .from("bookings")
    .update({ status: "checked-in", isPaid: true })
    .eq("id", id)
    .select();

  if (error) throw Error(error.message);

  return data;
}
