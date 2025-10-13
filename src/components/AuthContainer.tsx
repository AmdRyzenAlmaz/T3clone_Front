import { useEffect } from "react";
import { useAppSelector } from "../store/store";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router";

export const AuthContainer = () => {
  const accessToken = useAppSelector((state) => state.user.access_token);
  console.log(accessToken);
  const navigate = useNavigate();
  useEffect(() => {
    if (!accessToken) {
      navigate("/sign-up", { replace: true });
    } else {
      navigate("/", { replace: true });

      // TYT NAPISAT LOGIKY PODRL K WEBSOCKETS
    }
  }, [accessToken, navigate]);

  return <Outlet />;
};
