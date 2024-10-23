import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../servicse/bookingsApi";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const status = searchParams.get("status") || "all";
  const sort = searchParams.get("sort") || "startDate-des";
  const details = { page, status, sort };
  const { data = {}, isLoading } = useQuery({
    queryKey: ["bookings", page, status, sort],
    queryFn: () => getBookings(details),
  });

  const { bookings, count } = data;

  const lastPage = Math.ceil(count / 10);

  if (page < lastPage) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", page + 1, status, sort],
      queryFn: () => getBookings({ page: page + 1, status, sort }),
    });
  }
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", page - 1, status, sort],
      queryFn: () => getBookings({ page: page - 1, status, sort }),
    });
  }
  return { bookings, isLoading, count };
}
