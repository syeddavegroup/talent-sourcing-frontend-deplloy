import * as React from "react";

import { CssBaseline, Toolbar, Box } from "@mui/material";

import AHeader from "../AHeader";
import ANav from "../ANav";

const AWrapper = (props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AHeader />
      <ANav />

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Toolbar />
        <Box sx={{ p: 3, minHeight: "100vh" }}>{props.children}</Box>
      </Box>
    </Box>
  );
};

export default AWrapper;
