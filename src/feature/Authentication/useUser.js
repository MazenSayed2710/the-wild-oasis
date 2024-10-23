import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../servicse/Authapi";

export function useUser() {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });
  return {
    isLoading,
    isAuthenticated: data?.data.user?.role === "authenticated" ? true : false,
    data,
  };
}
