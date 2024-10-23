import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../servicse/cabinsApi";
import toast from "react-hot-toast";

export function useDeleteCabin() {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (id) => deleteCabin(id),
    onSuccess: () => {
      toast.success("Successfully deleated");
      queryClient.invalidateQueries(["cabins"]);
    },
    onError: () => {
      toast.error("There an error while deleting cabin");
    },
  });
  return { deleteCabin: mutate, isDeleting: isPending };
}
