import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../store/store";

export const PublicAuthConatiner = () => {
  const accessToken = useAppSelector((s) => s.user.access_token);

  if (accessToken) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
