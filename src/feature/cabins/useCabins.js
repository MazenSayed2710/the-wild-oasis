import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../servicse/cabinsApi";
import { useSearchParams } from "react-router-dom";

export function useCabins() {
  const [searchParams] = useSearchParams();

  const status = searchParams.get("status");
  const sort = searchParams.get("sort") || "name-asc";
  const details = { status, sort };
  const {
    data: cabins,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cabins", status, sort],
    queryFn: () => getCabins(details),
  });

  if (error) console.error(error.message);

  return { cabins, isLoading };
}
