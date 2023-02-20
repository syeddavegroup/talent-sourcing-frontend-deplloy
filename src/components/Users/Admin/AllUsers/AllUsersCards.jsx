import React from "react";

import { Box } from "@mui/material";

import DevelopersCard from "../Developers/DevelopersCard";
import ClientsCard from "../Clients/ClientsCard";
import VendorsCard from "../Vendors/VendorsCard";

const AllUsersCards = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 4,
      }}
    >
      <DevelopersCard />
      <ClientsCard />
      <VendorsCard />
    </Box>
  );
};

export default AllUsersCards;
