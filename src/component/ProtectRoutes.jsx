import { useNavigate } from "react-router-dom";
import { useUser } from "../feature/Authentication/useUser";
import { useEffect } from "react";

function ProtectRoutes({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useUser();
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, navigate, isLoading],
  );

  if (isAuthenticated) return <div>{children};</div>;
}

export default ProtectRoutes;
