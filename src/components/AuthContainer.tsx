import { useAppSelector } from "../store/store";
import { Navigate, Outlet } from "react-router-dom";

export const AuthContainer = () => {
  const accessToken = useAppSelector((state) => state.user.access_token);


  if (!accessToken) {
    return <Navigate to="sign-in"/>;
  }

  return <Outlet />;
};
