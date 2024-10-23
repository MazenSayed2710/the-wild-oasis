import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import {
  useDarkContext,
  DarkmodeContext,
} from "../feature/hooks/useDarkContext";

function Layout() {
  const { isDark } = useDarkContext(DarkmodeContext);
  return (
    <div
      className={`grid  ${isDark ? "dark" : ""} h-screen`}
      style={{
        display: "grid",
        gridTemplateColumns: "260px 1fr",
        gridTemplateRows: "7% 93%",
      }}
    >
      <Header />

      <Sidebar />

      <main className=" overflow-scroll bg-gray-100 dark:bg-gray-900">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
