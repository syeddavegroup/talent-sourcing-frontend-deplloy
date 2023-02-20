import React from "react";

import AllUsersCards from "../AllUsers/AllUsersCards";
import DashboardTimeline from "./DashboardTimeline";
import DashboardMembers from "./DashboardMembers";
import { Box } from "@mui/material";

const ADashboardPage = () => {
  return (
    <>
      <AllUsersCards />
      <Box
        sx={{
          display: "flex",

          justifyContent: "space-around",
          marginY: 5,
          flexWrap: "wrap",
          gap: 3,
        }}
      >
        <Box sx={{ alignSelf: "flex-start", flex: 1 }}>
          <DashboardTimeline />
        </Box>
        <Box sx={{ alignSelf: "flex-start" }}>
          <DashboardMembers />
        </Box>
      </Box>
    </>
  );
};

export default ADashboardPage;
