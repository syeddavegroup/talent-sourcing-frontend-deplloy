import React from "react";

import { Box } from "@mui/material";

import DevelopersCard from "./DevelopersCard";
import DevelopersTable from "./DevelopersTable";

const DevelopersPage = () => {
  return (
    <Box>
      <Box display="flex" justifyContent="center" mb={4}>
        <DevelopersCard />
      </Box>

      <DevelopersTable />
    </Box>
  );
};

export default DevelopersPage;
