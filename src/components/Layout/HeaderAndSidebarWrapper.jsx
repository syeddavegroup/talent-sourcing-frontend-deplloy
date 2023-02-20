import * as React from "react";

import { CssBaseline, Toolbar, Box } from "@mui/material";

import Header from "../UI/Header";
import Sidebar from "../UI/Sidebar";

const HeaderAndSidebarWrapper = (props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Header />
      <Sidebar navLinks={props.navLinks} />

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Toolbar />
        <Box sx={{ p: 3, minHeight: "100vh" }}>{props.children}</Box>
      </Box>
    </Box>
  );
};

export default HeaderAndSidebarWrapper;
