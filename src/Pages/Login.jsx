import { useDarkContext } from "../feature/hooks/useDarkContext";
import LoginForm from "../feature/Authentication/LoginForm";

function Login() {
  const { isDark } = useDarkContext();
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-10 bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-200">
      <img
        src={`./logo-${isDark ? "dark" : "light"}.png`}
        alt=""
        width={200}
        height={200}
      />
      <h1 className="text-4xl font-bold">Log in to your account</h1>
      <LoginForm />
    </div>
  );
}

export default Login;
