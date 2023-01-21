import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentToken, selectCurrentRoles } from "./authSlice";
import React from "react";

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};
const RequireAuth = ({ allowedRoles }) => {
  const token = useSelector(selectCurrentToken);
  const location = useLocation();
  const roles = useSelector(selectCurrentRoles);
  const decodedJwt = parseJwt(token);
  return token && decodedJwt?.exp * 1000 > Date.now() ? (
    roles?.find((role) => allowedRoles?.includes(role.authority)) ? (
      <Outlet />
    ) : (
      <Navigate to="/forbidden" state={{ from: location }} replace />
    )
  ) : (
    <>
      {localStorage.removeItem("user")}
      <Navigate to="/login" state={{ from: location }} replace />
    </>
  );
};

export default RequireAuth;
