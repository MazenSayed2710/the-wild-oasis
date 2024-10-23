import { useQuery } from "@tanstack/react-query";
import { getTodayBookings } from "../../servicse/bookingsApi";

export function useTodayBookings() {
  const { data: bookings, isLoading } = useQuery({
    queryKey: ["todayBookings", "bookings"],
    queryFn: getTodayBookings,
  });

  return { bookings, isLoading };
}
