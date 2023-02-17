import React from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
  Box,
  Avatar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const AHeader = () => {
  return (
    <AppBar
      position="fixed"
      color="inherit"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, boxShadow: "none" }}
    >
      <Toolbar>
        <Typography variant="h5" noWrap fontWeight="bold" color="blue">
          D-Community
        </Typography>

        <TextField
          label="Search for anything..."
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            width: "100%",
            maxWidth: 400,
            marginLeft: " 140px",
            backgroundColor: "customGray.lightGray",
          }}
        />

        <Box sx={{ marginLeft: "auto" }}>
          <Avatar />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AHeader;
