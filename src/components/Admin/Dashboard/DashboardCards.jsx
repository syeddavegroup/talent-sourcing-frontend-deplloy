import React from "react";

import { Box, Card, CardContent, Typography, CardMedia } from "@mui/material";

import card1Img from "../../../assets/Admin/Dashboard/card1.png";
import card2Img from "../../../assets/Admin/Dashboard/card2.png";

export const DevelopersCard = () => {
  return (
    <Card
      sx={{
        display: "flex",
        width: 300,
        maxWidth: 300,
        maxHeight: 200,
        border: 1,
        borderRadius: 3,
        borderColor: "lightGrey",
      }}
      elevation={0}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography variant="h6" noWrap>
            Total Developers
          </Typography>
          <Typography
            variant="h4"
            fontWeight="bolder"
            color="black"
            marginY={3}
          >
            400
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: "100%", objectFit: "contain" }}
        image={card1Img}
        alt="Illustration1"
      />
    </Card>
  );
};

export const ClientsCard = () => {
  return (
    <Card
      sx={{
        display: "flex",
        width: 300,
        maxWidth: 300,
        maxHeight: 200,
        border: 1,
        borderRadius: 3,
        borderColor: "lightGrey",
      }}
      elevation={0}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography variant="h6" noWrap>
            Total Clients
          </Typography>
          <Typography
            variant="h4"
            fontWeight="bolder"
            color="black"
            marginY={3}
          >
            200
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: "100%", objectFit: "contain" }}
        image={card2Img}
        alt="Illustration2"
      />
    </Card>
  );
};

export const VendorsCard = () => {
  return (
    <Card
      sx={{
        display: "flex",
        width: 300,
        maxWidth: 300,
        maxHeight: 200,
        border: 1,
        borderRadius: 3,
        borderColor: "lightGrey",
      }}
      elevation={0}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography variant="h6" noWrap>
            Total Vendors
          </Typography>
          <Typography
            variant="h4"
            fontWeight="bolder"
            color="black"
            marginY={3}
          >
            100
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: "100%", objectFit: "contain" }}
        image={card2Img}
        alt="Illustration3"
      />
    </Card>
  );
};

const DashboardCards = () => {
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

export default DashboardCards;
