import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { Login } from "../api/auth";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth/authSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
function LoginPgae() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is require"),
      password: Yup.string().required("Passwoed is require"),
    }),
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const res = await Login(values);
        if (res.data.success) {
          toast.success(res.data.message);
          dispatch(login(res.data.user));
          localStorage.setItem("token", res.data.token);
          navigate("/");
        }
      } catch (error) {
        console.log("error: ", error);
        toast.error(error.response.data.message);
      } finally {
        setLoading(false);
      }
    },
  });
  return (
    <>
      <div className="w-[100vw] h-[100vh] flex justify-center items-center ">
        <div
          className="w-96 p-5 rounded-md "
          style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        >
          <div className="text-center text-2xl font-semibold">Login</div>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              id="email"
              name="email"
              label="email"
              type="email"
              fullWidth
              margin="normal"
              {...formik.getFieldProps("email")}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              id="password"
              name="password"
              label="password"
              type="password"
              fullWidth
              margin="normal"
              {...formik.getFieldProps("password")}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <div className="mt-3 text-center">
              {loading ? (
                <>
                  <LoadingButton
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="small"
                    loading={true}
                    disabled
                  >
                    <span>disabled</span>
                  </LoadingButton>
                </>
              ) : (
                <>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={loading}
                  >
                    Login
                  </Button>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPgae;
