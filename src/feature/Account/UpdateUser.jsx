import { useState } from "react";
import { useUser } from "../Authentication/useUser";
import { useUpdateUser } from "./useUpdateUser";
import MiniSpinner from "../../component/MiniSpinner";

function UpdateUser() {
  const { data } = useUser();
  const fullName = data?.user.user_metadata.fullName;
  const avatar = data?.user.user_metadata.avatar;
  const { updateuser, isUpdating } = useUpdateUser();
  const [updatedName, setUpdatedName] = useState(fullName);
  const [updatedAvatar, setUpdatedAvatar] = useState(avatar);
  function handelSubmit(e) {
    e.preventDefault();
    if (!updatedName) return;
    updateuser({ fullName: updatedName, avatar: updatedAvatar });
  }
  return (
    <div>
      <h2 className=" mb-5 text-xl font-semibold dark:text-gray-100">
        Update user data
      </h2>
      <form
        className="flex flex-col gap-2 bg-gray-50 p-5 dark:bg-gray-800"
        onSubmit={(e) => handelSubmit(e)}
      >
        <div
          className="grid items-center border-b border-gray-200 p-3 dark:border-gray-500"
          style={{ gridTemplateColumns: "24rem 1fr 1.2fr" }}
        >
          <label
            htmlFor="email"
            className="font-semibold text-gray-700 dark:text-gray-100"
          >
            Email address
          </label>
          <input
            className="custom-input dark:border-gray-500 dark:bg-gray-800 dark:text-gray-100"
            type="email"
            id="email"
            defaultValue={data?.user.email}
            disabled
          />
          <p className=" px-5 text-xl text-red-800"></p>
        </div>

        <div
          className="grid items-center border-b border-gray-200 p-3 dark:border-gray-500"
          style={{ gridTemplateColumns: "24rem 1fr 1.2fr" }}
        >
          <label
            htmlFor="fullName"
            className=" font-semibold text-gray-700 dark:text-gray-100"
          >
            Full name
          </label>
          <input
            className="custom-input dark:border-gray-500 dark:bg-gray-800 dark:text-gray-100"
            type="text"
            id="fullName"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
          />
          <p className=" px-5 text-xl text-red-800"></p>
        </div>

        <div
          className="grid items-center border-b border-gray-200 p-3 dark:border-gray-500"
          style={{ gridTemplateColumns: "24rem 1fr 1.2fr" }}
        >
          <label
            htmlFor="avatar"
            className=" font-semibold text-gray-700 dark:text-gray-100"
          >
            Avatar image
          </label>
          <input
            type="file"
            id="avatar"
            onChange={(e) => setUpdatedAvatar(e.target.files)}
          />
          <p className=" px-5 text-xl text-red-800"></p>
        </div>

        <div className="flex justify-end gap-5 p-3">
          <button
            className="rounded-md border border-gray-300 px-5 py-3 dark:border-gray-500 dark:text-gray-100"
            onClick={(e) => {
              e.preventDefault();
              setUpdatedName(fullName);
            }}
          >
            Cancel
          </button>
          <button
            className=" w-[165px] rounded-md bg-violet-600 px-5 py-3 font-bold text-gray-200 dark:text-gray-200"
            disabled={isUpdating}
          >
            {isUpdating ? <MiniSpinner /> : "Update Account"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateUser;
