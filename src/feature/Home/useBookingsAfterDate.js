import { useQuery } from "@tanstack/react-query";
import { getBookingsAfterDate } from "../../servicse/bookingsApi";
import { useSearchParams } from "react-router-dom";
import { subDays } from "date-fns";

export function useBookingsAfterDate() {
  const [searchParams] = useSearchParams();
  const lastDays = searchParams.get("last") || 7;
  const date = subDays(new Date(), lastDays);
  const { data: bookings, isLoading } = useQuery({
    queryFn: () => getBookingsAfterDate(date.toISOString()),
    queryKey: ["bookings", `last-${lastDays}`],
  });
  return { bookings, isLoading, lastDays };
}
