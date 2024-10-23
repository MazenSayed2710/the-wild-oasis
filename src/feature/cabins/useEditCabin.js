import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editCabin } from "../../servicse/cabinsApi";
import toast from "react-hot-toast";

export function useEditCabin() {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: editCabin,
    onSuccess: () => {
      toast.success("Successfuly Edited");
      queryClient.invalidateQueries(["cabins"]);
    },
    onError: () => {
      toast.error("There was an error while Edit cabin ");
    },
  });
  return { editCabin: mutate, isEditing: isPending };
}
