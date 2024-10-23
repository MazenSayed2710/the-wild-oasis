import { useMutation, useQueryClient } from "@tanstack/react-query";
import { checkOut } from "../../servicse/bookingsApi";
import toast from "react-hot-toast";

export function useCheckOut() {
  const queryClient = useQueryClient();
  const { mutate: checkout, isPending } = useMutation({
    mutationFn: (id) => checkOut(id),
    onSuccess: () => {
      toast.success("Successfully checked out");
      queryClient.invalidateQueries(["bookings"]);
    },
    onError: () => {
      toast.error("There is an error while checked out");
    },
  });
  return { checkout, isPending };
}
