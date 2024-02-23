import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Sidebar from "../components/Sidebar";

export default function Layout({ children, title }) {
  return (
    <div className="h-screen overflow-auto">
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
          <Typography variant="h4">{title}</Typography>
          <div>{children}</div>
        </Box>
      </Box>
    </div>
  );
}
