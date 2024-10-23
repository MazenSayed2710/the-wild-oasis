import { useQuery } from "@tanstack/react-query";
import { getSetings } from "../../servicse/settingsApi";

export function useSettings() {
  const { data: settings, isLoading } = useQuery({
    queryKey: ["settings"],
    queryFn: getSetings,
  });

  return { settings, isLoading };
}
