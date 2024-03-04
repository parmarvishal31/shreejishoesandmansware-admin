import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Private from "./private";
import Public from "./public";
import LoginPage from "../pages/LoginPgae";
import Dashboard from "../components/Dashboard";
import Categories from "../pages/Categories";
import Products from "../pages/Products";
import AddProducts from "../pages/AddProducts";
import { useDispatch, useSelector } from "react-redux";
import { Profile } from "../api/auth";
import toast from "react-hot-toast";
import { login, logout } from "../redux/auth/authSlice";
import NotFound from "../pages/NotFound";
function Index() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  function getProfile(token) {
    Profile(token)
      .then((res) => {
        dispatch(login(res.data.user));
      })
      .catch((e) => {
        toast.error(e?.response?.data.message);
        localStorage.removeItem("token");
        dispatch(logout());
        navigate("/login");
      });
  }
  useEffect(() => {
    if (token) {
      getProfile(token);
    }
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Private />}>
          <Route path="/" element={<Dashboard />}>
            <Route path="/categories" element={<Categories />} />
          </Route>
        </Route>
        <Route path="/" element={<Public />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Index;
