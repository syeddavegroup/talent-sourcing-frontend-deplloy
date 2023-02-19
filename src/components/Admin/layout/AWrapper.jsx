import * as React from "react";

import { CssBaseline, Toolbar, Box } from "@mui/material";

import AHeader from "../AHeader";
import ANav from "../ANav";

const AWrapper = (props) => {
  return (
    <Box sx={{ display: "flex"}}>
      <CssBaseline />

      <AHeader />
      <ANav />

      <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
        <Toolbar />
        <Box sx={{ p: 0, minHeight: "100vh", borderRadius: 3 }}>
          {props.children}
        </Box>
      </Box>
    </Box>
  );
};

export default AWrapper;
