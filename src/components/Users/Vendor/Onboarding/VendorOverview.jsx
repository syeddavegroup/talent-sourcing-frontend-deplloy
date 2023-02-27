import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Box,
  Card,
  TextField,
  Typography,
  Grid,
  Button,
  MenuItem,
  CardContent,
  CircularProgress,
  Stack,
  styled,
} from "@mui/material";

const ImgStyled = styled("img")(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius,
}));

const VendorOverview = () => {
  const [userInfo, setUserInfo] = useState({});

  const userId = localStorage.getItem("userId");
  console.log(userId);

  useEffect(() => {
    axios
      .get(
        "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"
      )
      .then(function (response) {
        // handle success
        setUserInfo(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <CardContent>
      <Card sx={{ margin: "auto", padding: "1rem", width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <ImgStyled
            src={require("../../../../assets/avatars/3.png")}
            alt="Profile Picture"
          />
          <Box ml={-4}>
            <Typography variant="body2">
              Allowed JPG, GIF or PNG. Max size of 800K
            </Typography>
          </Box>
        </Box>
      </Card>
    </CardContent>
  );
};

export default VendorOverview;
