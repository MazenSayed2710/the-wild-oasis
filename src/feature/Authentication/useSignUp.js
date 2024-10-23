import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../servicse/Authapi";
import toast from "react-hot-toast";

export function useSignUp() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signUp,
    onSuccess: () =>
      toast.success(
        "Account successfully created! Please verufy the new account from the user's email address.",
      ),
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { signup, isPending };
}
