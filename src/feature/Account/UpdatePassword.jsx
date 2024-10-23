import { useUpdateUser } from "./useUpdateUser";
import { useForm } from "react-hook-form";
import MiniSpinner from "../../component/MiniSpinner";

function UpdatePassword() {
  const { updateuser, isUpdating } = useUpdateUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  function onsubmit(data) {
    updateuser({ password: data.newPassword });
  }
  return (
    <div>
      <h2 className=" mb-5 text-xl font-semibold dark:text-gray-100">
        Update user password
      </h2>
      <form
        className="flex flex-col gap-2 bg-gray-50 p-4 dark:bg-gray-800"
        onSubmit={handleSubmit(onsubmit)}
      >
        <div
          className="grid items-center border-b border-gray-200 p-3 dark:border-gray-500"
          style={{ gridTemplateColumns: "24rem 1fr 1.2fr" }}
        >
          <label
            htmlFor="newPassword"
            className="font-semibold text-gray-700 dark:text-gray-100"
          >
            New password (min 8 chars)
          </label>
          <input
            className="custom-input dark:border-gray-500 dark:bg-gray-800 dark:text-gray-100"
            type="password"
            id="newPassword"
            {...register("newPassword", {
              required: "this field is requierd",
              minLength: {
                value: 8,
                message: "Password needs a minimum of 8 characters",
              },
            })}
          />
          <p className=" px-5  text-red-800">{errors.newPassword?.message}</p>
        </div>

        <div
          className="grid items-center border-b border-gray-200 p-3 dark:border-gray-500"
          style={{ gridTemplateColumns: "24rem 1fr 1.2fr" }}
        >
          <label
            htmlFor="confirmPassword"
            className="font-semibold text-gray-700 dark:text-gray-100"
          >
            Confirm password
          </label>
          <input
            className="custom-input dark:border-gray-500 dark:bg-gray-800 dark:text-gray-100"
            type="password"
            id="confirmPassword"
            {...register("confirmPassword", {
              required: "This field is requierd",
              minLength: {
                value: 8,
                message: "Password needs a minimum of 8 characters",
              },
              validate: (value) =>
                getValues("newPassword") === value ||
                "Password need to be match",
            })}
          />
          <p className=" px-5  text-red-800">
            {errors.confirmPassword?.message}
          </p>
        </div>

        <div className="flex justify-end gap-5 p-3">
          <button
            className="rounded-md border border-gray-300 px-5 py-3 dark:border-gray-500 dark:text-gray-100"
            type="reset"
          >
            Cancel
          </button>
          <button
            className=" w-[175px] rounded-md bg-violet-600 px-5 py-3 font-bold text-gray-200  dark:text-gray-200"
            disabled={isUpdating}
          >
            {isUpdating ? <MiniSpinner /> : "Update Password"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdatePassword;
