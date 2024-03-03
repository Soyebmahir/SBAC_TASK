/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Component/Loading";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { useContext } from "react";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to="/sign-in" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
