import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { DarkmodeContext } from "./feature/hooks/useDarkContext";
import Layout from "./component/Layout";
import ProtectRoutes from "./component/ProtectRoutes";
import Bookings from "./Pages/Bookings";
import Cabins from "./Pages/Cabins";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import Login from "./Pages/Login";
import Settings from "./Pages/Settings";
import CheckIn from "./feature/check-in-out/CheckIn";
import BookingDetails from "./feature/Bookings/BookingDetails";
import Account from "./Pages/Account";
import ErrorComponent from "./component/ErrorComponent";

function App() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("darkmode") === "true",
  );

  const queryClinet = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });
  useEffect(
    function () {
      localStorage.setItem(
        "darkmode",
        window.matchMedia("(prefers-color-scheme:dark)").matches,
      );
    },
    [isDark],
  );
  return (
    <DarkmodeContext.Provider value={{ isDark, setIsDark }}>
      <div className={`${isDark ? "dark" : ""} h-screen overflow-hidden`}>
        <QueryClientProvider client={queryClinet}>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <ProtectRoutes>
                    <Layout />
                  </ProtectRoutes>
                }
              >
                <Route index element={<Home />} />
                <Route path="bookings" element={<Bookings />} />
                <Route
                  path="bookings/:bookingId"
                  element={<BookingDetails />}
                />
                <Route path="checkin/:bookingId" element={<CheckIn />} />
                <Route path="cabins" element={<Cabins />} />
                <Route path="users" element={<Users />} />
                <Route path="settings" element={<Settings />} />
                <Route path="account" element={<Account />} />
              </Route>
              <Route path="login" element={<Login />} />
              <Route path="*" element={<ErrorComponent />} />
            </Routes>
          </BrowserRouter>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </div>
      <Toaster />
    </DarkmodeContext.Provider>
  );
}

export default App;
