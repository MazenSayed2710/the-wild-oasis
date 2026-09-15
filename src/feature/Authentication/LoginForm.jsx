import { useState } from "react";
import Button from "../../component/Button";
import useLogin from "./useLogin";
import MiniSpinner from "../../component/MiniSpinner";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  function handleDemoAccount() {
    setEmail("user@example.com");
    setPassword("123456789");
  }

  return (
    <form
      className="rounded-md bg-gray-50 p-10 dark:bg-[#18212f]"
      onSubmit={handleSubmit}
    >
      <div className="mb-10 flex flex-col gap-3">
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

      <div className="flex items-center gap-4">
        <Button disable={isPending}>
          {isPending ? <MiniSpinner /> : "Login"}
        </Button>

        <button
          type="button"
          onClick={handleDemoAccount}
          disabled={isPending}
          className="rounded-md border border-gray-300 px-4 py-2 font-medium transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:hover:bg-gray-700"
        >
          Use Demo Account
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
