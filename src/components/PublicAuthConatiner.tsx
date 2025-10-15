import { useAppSelector } from "../store/store";
import { Navigate, Outlet } from "react-router-dom";

export const PublicAuthConatiner = () => {
  const { isAuth, initialized } = useAppSelector(s => s.user);

  if (!initialized) return null;
  if (isAuth === true) return <Navigate to="/" replace />;
  return <Outlet />;
};
