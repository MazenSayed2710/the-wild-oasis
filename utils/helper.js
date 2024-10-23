import { formatDistance } from "date-fns";

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
