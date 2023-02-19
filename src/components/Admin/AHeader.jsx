import React from "react";

import {
  AppBar,
  Toolbar,
  Link,
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
      <Toolbar sx={{ display: "flex", gap: 3 }}>
        <Typography variant="h5" noWrap fontWeight="bold" color="blue">
          <Link href="/">T-Sourcing</Link>
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
            maxWidth: 300,
            marginX: "auto",
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
