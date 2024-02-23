import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function Private() {
  const [checkedLogin, setCheckedLogin] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setCheckedLogin(token);
    } else {
      {
        navigate("/login");
      }
    }
  });
  return (
    <>
      {checkedLogin ? (
        <>
          <Outlet />
        </>
      ) : (
        <>{null}</>
      )}
    </>
  );
}

export default Private;
