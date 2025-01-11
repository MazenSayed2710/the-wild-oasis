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

export const updateBookingStartAndEndDate = async (id, typeOfDate) => {
  const now = new Date();
  const formattedDate = format(now, "yyyy-MM-dd'T'00:00:00");
  const { error } = await supabase
    .from("bookings")
    .update({ [typeOfDate]: formattedDate })
    .eq("id", id);
  if (error) throw new Error(error.message);
};
export const updateBookingCreatedAtDate = async (id, numOfMonths) => {
  const now = new Date();
  let DateAgo;
  if (numOfMonths === 0) {
    DateAgo = new Date(
      now.getFullYear(),
      now.getMonth() - numOfMonths,
      now.getDate() - 5,
    );
  } else {
    DateAgo = new Date(
      now.getFullYear(),
      now.getMonth() - numOfMonths,
      now.getDate() + 5,
    );
  }
  const formattedDate = format(DateAgo, "yyyy-MM-dd'T'00:00:00");
  const { error } = await supabase
    .from("bookings")
    .update({ created_at: formattedDate })
    .eq("id", id);
  if (error) throw new Error(error.message);
};

export const updateBookingDate = () => {
  updateBookingStartAndEndDate(723, "startDate");
  updateBookingStartAndEndDate(724, "endDate");
  updateBookingStartAndEndDate(741, "startDate");
  updateBookingStartAndEndDate(727, "startDate");
  updateBookingCreatedAtDate(729, 3);
  updateBookingCreatedAtDate(737, 1);
  updateBookingCreatedAtDate(739, 1);
  updateBookingCreatedAtDate(740, 0);
  updateBookingCreatedAtDate(741, 1);
};
