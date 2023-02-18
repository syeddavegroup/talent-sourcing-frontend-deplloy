import React from "react";

import DashboardCards from "../../components/Admin/Dashboard/DashboardCards";
import DashboardTimeline from "../../components/Admin/Dashboard/DashboardTimeline";
import DashboardMembers from "../../components/Admin/Dashboard/DashboardMembers";
import { Box } from "@mui/material";

const ADashboardPage = () => {
  return (
    <>
      <DashboardCards />
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
