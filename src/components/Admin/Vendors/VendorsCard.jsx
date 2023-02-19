import React from "react";

import { Box, Card, CardContent, Typography, CardMedia } from "@mui/material";

import card2Img from "../../../assets/Admin/Dashboard/card2.png";

const VendorsCard = () => {
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

export default VendorsCard;