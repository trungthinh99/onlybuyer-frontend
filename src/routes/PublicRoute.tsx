import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const token = localStorage.getItem("token");
  return token ? <Navigate to="/shop" replace /> : <Outlet />;
};

export default PublicRoute;
