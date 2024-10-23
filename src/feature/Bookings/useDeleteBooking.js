import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../servicse/bookingsApi";
import { toast } from "react-hot-toast";
export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteBooking,
    onSuccess: () => {
      queryClient.invalidateQueries(["bookings"]);
      toast.success("Successfully Deleted");
    },
    onError: () => {
      console.log("error");
    },
  });
  return { mutate };
}
