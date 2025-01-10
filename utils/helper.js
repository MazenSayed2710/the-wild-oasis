import { format, formatDistance } from "date-fns";
import { supabase } from "../src/servicse/supabase";

export const dateDiffrent = (dateStr) => {
  return formatDistance(new Date(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about", "");
};

export const numOfNights = (startDate, endDate) => {
  return formatDistance(new Date(endDate), new Date(startDate), {
    addSuffix: true,
  })
    .replace("in", "")
    .replace("days", "nights");
};

export const updateBookingDate = async (id, typeOfDate) => {
  const now = new Date();
  const formattedDate = format(now, "yyyy-MM-dd'T'00:00:00");
  const { error } = await supabase
    .from("bookings")
    .update({ [typeOfDate]: formattedDate })
    .eq("id", id);
  if (error) throw new Error(error.message);
};
