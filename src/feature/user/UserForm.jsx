import { useForm } from "react-hook-form";
import { useSignUp } from "../Authentication/useSignUp";

function UserForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    reset,
  } = useForm();
  const { signup, isPending } = useSignUp();
  const onSubmit = ({ fullName, email, password }) => {
    signup({ fullName, email, password });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 bg-gray-50 p-4 dark:bg-gray-800 "
    >
      <div
        className="grid items-center border-b border-gray-200 p-3 dark:border-gray-700"
        style={{ gridTemplateColumns: "24rem 1fr 1.2fr" }}
      >
        <label
          htmlFor="fullName"
          className="font-semibold text-gray-700 dark:text-gray-100"
        >
          Full Name
        </label>
        <input
          className="custom-input dark:border-gray-500  dark:bg-gray-800 dark:text-gray-100"
          type="text"
          id="fullName"
          {...register("fullName", { required: "This field is required" })}
        />
        <p className=" px-5 text-xl text-red-800">{errors.fullName?.message}</p>
      </div>

      <div
        className="grid items-center border-b border-gray-200 p-3 dark:border-gray-700"
        style={{ gridTemplateColumns: "24rem 1fr 1.2fr" }}
      >
        <label
          htmlFor="email"
          className=" font-semibold text-gray-700 dark:text-gray-100"
        >
          Email address
        </label>
        <input
          className="custom-input dark:border-gray-500  dark:bg-gray-800 dark:text-gray-100"
          type="email"
          id="email"
          {...register("email", {
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
              message: "Please enter a valid email address",
            },
            required: "This field is required",
          })}
        />
        <p className=" px-5 text-xl text-red-800">{errors.email?.message}</p>
      </div>

      <div
        className="grid items-center border-b border-gray-200 p-3 dark:border-gray-700"
        style={{ gridTemplateColumns: "24rem 1fr 1.2fr" }}
      >
        <label
          htmlFor="password"
          className=" font-semibold text-gray-700 dark:text-gray-100"
        >
          Password (min 8 characters)
        </label>
        <input
          className="custom-input dark:border-gray-500  dark:bg-gray-800 dark:text-gray-100"
          type="password"
          id="password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
        <p className=" px-5 text-xl text-red-800">{errors.password?.message}</p>
      </div>

      <div
        className="grid items-center border-b border-gray-200 p-3 dark:border-gray-700"
        style={{ gridTemplateColumns: "24rem 1fr 1.2fr" }}
      >
        <label
          htmlFor="repeat password"
          className=" font-semibold text-gray-700 dark:text-gray-100"
        >
          Repeat password
        </label>
        <input
          className="custom-input dark:border-gray-500  dark:bg-gray-800 dark:text-gray-100"
          type="password"
          id="repeatPassword"
          {...register("repeatPassword", {
            required: "This feild is requierd",
            validate: (value) =>
              getValues("password") === value || "password is not validate",
          })}
        />
        <p className=" px-5 text-xl text-red-800">
          {errors.repeatPassword?.message}
        </p>
      </div>
      <div className="flex justify-end gap-5 p-3">
        <button
          className="rounded-md border border-gray-300 px-5 py-3 dark:border-gray-500 dark:text-gray-100"
          onClick={() => reset()}
        >
          Cancel
        </button>
        <button
          disabled={isPending}
          className=" rounded-md bg-violet-600 px-5 py-3 font-bold text-gray-200 dark:text-gray-200"
        >
          Create new user
        </button>
      </div>
    </form>
  );
}

export default UserForm;
