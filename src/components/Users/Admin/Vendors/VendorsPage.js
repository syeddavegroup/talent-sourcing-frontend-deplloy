import React from "react";

import { Box } from "@mui/material";

import VendorsCard from "./VendorsCard";
import VendorsTable from "./VendorsTable";

const VendorsPage = () => {
  return (
    <Box>
      <Box display="flex" justifyContent="center" mb={4}>
        <VendorsCard />
      </Box>

      <VendorsTable />
    </Box>
  );
};

export default VendorsPage;
