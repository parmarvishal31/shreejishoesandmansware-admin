import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Private from "./private";
import Public from "./public";
import LoginPage from "../pages/LoginPgae";
import Dashboard from "../pages/Dashboard";
import Categories from "../pages/Categories";
import Products from "../pages/Products";
import AddProducts from "../pages/AddProducts";
import { useDispatch } from "react-redux";
import { Profile } from "../api/auth";
import toast from "react-hot-toast";
import { login } from "../redux/auth/authSlice";
function Index() {
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");
  function getProfile(token) {
    Profile(token)
      .then((res) => {
        dispatch(login(res.data.user));
      })
      .catch((e) => {
        toast.error(e?.response?.data.message);
      });
  }
  useEffect(() => {
    if (token) {
      getProfile(token);
    }
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Private />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
      <Route path="/" element={<Public />}></Route>
    </Routes>
  );
}

export default Index;
