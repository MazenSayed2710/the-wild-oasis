import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { useDarkContext } from "../feature/hooks/useDarkContext";
import { useLogout } from "../feature/Authentication/useLogout";
import { HiOutlineUser } from "react-icons/hi2";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useOutside } from "../feature/hooks/useOutside";
import { useUser } from "../feature/Authentication/useUser";
function Header() {
  const { isDark, setIsDark } = useDarkContext();
  const { mutate: logout, isLoading } = useLogout();
  const navigate = useNavigate();
  function handleLogout() {
    logout();
    setIsActive("logout");
  }
  const [isActive, setIsActive] = useState("");
  const ref = useOutside(() => setIsActive(""));
  const { data } = useUser();
  return (
    <header
      className=" col-start-2 flex items-center justify-end gap-3 px-10 dark:bg-blue-1"
      ref={ref}
    >
      <img
        src={data.user.user_metadata.avatar}
        width={30}
        height={30}
        className=" h-9 w-9 rounded-full object-cover"
        alt="avatar"
      />
      <p className="dark:text-gray-100">{data.user.user_metadata.fullName}</p>
      <button
        onClick={() => {
          navigate("/account");
          setIsActive("user");
        }}
        className={`rounded-md border-2 border-transparent p-1 hover:bg-gray-100 dark:hover:bg-gray-600 ${isActive === "user" && "border-violet-500"}`}
      >
        <HiOutlineUser className="text-xl text-violet-500" />
      </button>
      <button
        onClick={() => {
          setIsDark(!isDark);
          setIsActive("mode");
        }}
        className={`rounded-md border-transparent p-1 hover:bg-gray-100 dark:hover:bg-gray-600 ${isActive === "mode" && "border-violet-500"}`}
      >
        {isDark ? (
          <MdOutlineLightMode className="text-xl text-violet-500" />
        ) : (
          <MdDarkMode className=" text-xl text-violet-500" />
        )}
      </button>
      <button
        onClick={handleLogout}
        disabled={isLoading}
        className={`rounded-md border-transparent p-1 hover:bg-gray-100 dark:hover:bg-gray-600 ${isActive === "logout" && "border-violet-500"}`}
      >
        <HiArrowRightOnRectangle className=" text-xl text-violet-500" />
      </button>
    </header>
  );
}

export default Header;
