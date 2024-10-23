import { FaHome } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FaCalendarMinus } from "react-icons/fa6";
import { HiHomeModern } from "react-icons/hi2";
import { useDarkContext } from "../feature/hooks/useDarkContext";
import { NavLink } from "react-router-dom";

const iconStyle = "group-hover:text-violet-500 ";
const listStyle =
  "flex items-center group gap-3 px-10 py-3 dark:hover:bg-gray-900 hover:bg-gray-100";

function Sidebar() {
  const { isDark } = useDarkContext();
  return (
    <aside
      className="row-start-1 row-end-3 border-r-[0.5px] p-7 
     text-gray-900 dark:border-r-gray-800 dark:bg-blue-1
     dark:text-white"
    >
      <img
        src={`/logo-${isDark ? "dark" : "light"}.png`}
        alt=""
        width={200}
        height={200}
        className="select-none"
      />
      <ul className="mt-10 flex flex-col gap-7 text-xl ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${listStyle} ${isActive ? "active-icon bg-gray-100 dark:bg-gray-900" : "text-gray-400"}`
          }
        >
          <FaHome className={`${iconStyle}`} />
          <p>Home</p>
        </NavLink>

        <NavLink
          to="bookings"
          className={({ isActive }) =>
            `${listStyle} ${isActive ? "active-icon bg-gray-100 dark:bg-gray-900" : "text-gray-400"}`
          }
        >
          <FaCalendarMinus className={`${iconStyle}`} />
          <p>Bookings</p>
        </NavLink>

        <NavLink
          to="cabins"
          className={({ isActive }) =>
            `${listStyle} ${isActive ? "active-icon bg-gray-100 dark:bg-gray-900" : "text-gray-400"}`
          }
        >
          <HiHomeModern className={`${iconStyle}`} />
          <p>Cabins</p>
        </NavLink>

        <NavLink
          to="users"
          className={({ isActive }) =>
            `${listStyle} ${isActive ? "active-icon bg-gray-100 dark:bg-gray-900" : "text-gray-400"}`
          }
        >
          <FaUserFriends className={`${iconStyle}`} />
          <p>Users</p>
        </NavLink>

        <NavLink
          to="settings"
          className={({ isActive }) =>
            `${listStyle} ${isActive ? "active-icon bg-gray-100 dark:bg-gray-900" : "text-gray-400"}`
          }
        >
          <IoSettingsSharp className={`${iconStyle}`} />
          <p>Settings</p>
        </NavLink>
      </ul>
    </aside>
  );
}

export default Sidebar;
