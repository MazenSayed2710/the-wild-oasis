import { useMutation } from "@tanstack/react-query";
import { updateSettings } from "../../servicse/settingsApi";
import toast from "react-hot-toast";

export function useUpdateSettings() {
  const { mutate: updatesettings, isPending: isUpdating } = useMutation({
    mutationFn: updateSettings,
    onSuccess: () => toast.success("settings successfully updated"),
  });

  return { updatesettings, isUpdating };
}
