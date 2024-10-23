import { NavLink } from "react-router-dom";

function SideBarButton({ to, children }) {
  const listStyle =
    "flex items-center group gap-3 px-10 py-3 dark:hover:bg-gray-900 hover:bg-gray-100";
  return (
    <NavLink
      to={`${to}`}
      className={({ isActive }) =>
        `${listStyle} ${isActive ? "active-icon bg-gray-100 dark:bg-gray-900" : ""}`
      }
    >
      {children}
    </NavLink>
  );
}

export default SideBarButton;
