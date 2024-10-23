import { useMutation, useQueryClient } from "@tanstack/react-query";
import { checkIn } from "../../servicse/bookingsApi";
import toast from "react-hot-toast";

export function useCheckIn() {
  const queryClient = useQueryClient();
  const { mutate: checkin, isPending } = useMutation({
    mutationFn: (id) => checkIn(id),
    onSuccess: () => {
      toast.success("successfully checked-in");
      queryClient.invalidateQueries(["bookings"]);
    },
    onError: () => {
      toast.error("There is an error while checked in");
    },
  });
  return { checkin, isPending };
}
