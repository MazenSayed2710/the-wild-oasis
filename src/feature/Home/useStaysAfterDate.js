import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getStaysAfterDate } from "../../servicse/bookingsApi";
import { useQuery } from "@tanstack/react-query";

export function useStaysAfterDate() {
  const [searchParams] = useSearchParams();
  const last = searchParams.get("last") || 7;
  const date = subDays(new Date(), last);
  const { data: stays, isLoading } = useQuery({
    queryFn: () => getStaysAfterDate(date.toISOString()),
    queryKey: ["stays", `last-${last}`],
  });
  const confirmedStays = stays?.filter(
    (booking) => booking.status !== "unconfirmed",
  );
  return { confirmedStays, isLoading };
}
