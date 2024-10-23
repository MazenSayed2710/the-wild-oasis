import { useState } from "react";
import Button from "../../component/Button";
import useLogin from "./useLogin";
import MiniSpinner from "../../component/MiniSpinner";

function LoginForm() {
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("123456789");
  const { mutate, isPending } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    mutate(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      },
    );
  }

  return (
    <form
      className="rounded-md  bg-gray-50 p-10 dark:bg-[#18212f]"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="mb-10 flex  flex-col gap-3">
        <label htmlFor="email" className="font-bold">
          Email address
        </label>
        <input
          type="email"
          id="email"
          className="w-[400px] rounded-md border-[1px] border-[#0000003d] bg-transparent px-5 py-2 dark:border-[#ffffff3d]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isPending}
        />
      </div>
      <div className="mb-10 flex flex-col gap-3">
        <label htmlFor="password" className="font-bold">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-[400px] rounded-md border-[1px] border-[#0000003d] bg-transparent px-5 py-2 dark:border-[#ffffff3d]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isPending}
        />
      </div>
      <Button disable={isPending}>
        {isPending ? <MiniSpinner /> : "Login"}
      </Button>
    </form>
  );
}

export default LoginForm;
