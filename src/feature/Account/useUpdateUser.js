import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateUser } from "../../servicse/Authapi";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateuser, isPending } = useMutation({
    mutationFn: UpdateUser,
    onSuccess: (user) => {
      toast.success("User successfully updated");
      queryClient.setQueryData(["user"], user);
    },
    onError: () => toast.error("There is something wrong in updating user"),
  });

  return { updateuser, isUpdating: isPending };
}
