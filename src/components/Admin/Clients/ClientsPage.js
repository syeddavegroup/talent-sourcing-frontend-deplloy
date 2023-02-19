import React from "react";

import { Box } from "@mui/material";

import ClientsCard from "./ClientsCard";
import ClientsTable from "./ClientsTable";

const ClientsPage = () => {
  return (
    <Box>
      <Box display="flex" justifyContent="center" mb={4}>
        <ClientsCard />
      </Box>

      <ClientsTable />
    </Box>
  );
};

export default ClientsPage;
