import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../servicse/cabinsApi";
import toast from "react-hot-toast";

export function useCreateCabin() {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("Successfuly created");
      queryClient.invalidateQueries(["cabins"]);
    },
    onError: () => {
      toast.error("There was an error while creating cabin ");
    },
  });
  return { createcabin: mutate, isCreating: isPending };
}
