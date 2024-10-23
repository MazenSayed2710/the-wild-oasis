import { supabase } from "./supabase";

export async function getBookings(details) {
  const { page, status, sort } = details;
  const from = (page - 1) * 10;
  const to = 10 * page - 1;

  const col = sort.split("-")[0];
  const asc = sort.split("-")[1] === "asc";

  let query = supabase
    .from("bookings")
    .select(
      "status,endDate,startDate,id,totalPrice,cabins(name),guests(fullName,email)",
      { count: "exact" },
    )
    .range(from, to);

  status !== "all" && (query = query.eq("status", status));

  query = query.order(col, { ascending: asc });

  let { data: bookings, error, count } = await query;

  if (error) throw new Error(error.message);

  return { bookings, count };
}

export async function deleteBooking(id) {
  const { error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) {
    console.error(error.message);
    throw Error(error.message);
  }
}

export async function getBooking(id) {
  let { data: booking, error } = await supabase
    .from("bookings")
    .select("*,cabins(name),guests(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error.message);
    throw Error(error.message);
  }

  return booking;
}

export async function checkIn(id) {
  const { data, error } = await supabase
    .from("bookings")
    .update({ status: "checked-in", isPaid: true })
    .eq("id", id)
    .select();

  if (error) {
    console.error(error.message);
    throw Error(error.message);
  }

  return data;
}

export async function checkOut(id) {
  const { data, error } = await supabase
    .from("bookings")
    .update({ status: "checked-out" })
    .eq("id", id)
    .select();

  if (error) {
    console.error(error.message);
    throw Error(error.message);
  }

  return data;
}

export async function getBookingsAfterDate(date) {
  const today = new Date();
  let { data: bookings, error } = await supabase
    .from("bookings")
    .select("*")
    .gte("created_at", date)
    .lte("created_at", today.toISOString());

  if (error) throw new Error(error.message);

  return bookings;
}

export async function getStaysAfterDate(date) {
  const today = new Date();
  let { data: bookings, error } = await supabase
    .from("bookings")
    .select("*")
    .gte("startDate", date)
    .lte("startDate", today.toISOString());

  if (error) throw new Error(error.message);

  return bookings;
}

export async function getTodayBookings() {
  let today = new Date();
  today.setUTCHours(0, 0, 0, 0);

  let { data: bookings, error } = await supabase
    .from("bookings")
    .select("status,numNights,id,guests(fullName,countryFlag)")
    .or(
      `and(startDate.eq.${today.toISOString().slice(0, 18)},status.eq.unconfirmed),and(endDate.eq.${today.toISOString().slice(0, 18)},status.eq.checked-in)`,
    );

  if (error) throw new Error(error.message);

  return bookings;
}
