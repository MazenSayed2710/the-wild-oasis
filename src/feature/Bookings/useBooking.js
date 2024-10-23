import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../servicse/bookingsApi";

export function useBooking(id) {
  const { data, isLoading } = useQuery({
    queryKey: ["booking", id],
    queryFn: () => getBooking(id),
  });
  return { data, isLoading };
}
