import React from "react";

import { Box } from "@mui/material";

import AllUsersCards from "./AllUsersCards";
import AllUsersTable from "./AllUsersTable";

const AllUsersPage = () => {
  return (
    <Box>
      <Box display="flex" justifyContent="center" mb={4}>
        <AllUsersCards />
      </Box>

      <AllUsersTable />
    </Box>
  );
};

export default AllUsersPage;
