import { useAppSelector } from "../store/store";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const PrivateAuthContainer = () => {
  const { isAuth, initialized } = useAppSelector(s => s.user);
  const location = useLocation();

  if (!initialized) {
    return <div>Loading.............</div>;
  }

  if (isAuth === false) {
    return <Navigate to="/sign-in" replace state={{ from: location }} />;
  }

  return <Outlet />;
};
