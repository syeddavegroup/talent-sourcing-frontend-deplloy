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
  IconButton,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  GithubOutlined,
  BellOutlined,
} from "@ant-design/icons";

const Header = ({ open, handleDrawerToggle }) => {
  return (
    <Toolbar>
      <IconButton
        disableRipple
        aria-label="open drawer"
        size="small"
        onClick={handleDrawerToggle}
        sx={{
          color: "text.primary",
          bgcolor: open ? "#f5f5f5" : "#eeeeee",
          mr: 1,
          ml: -2,
          borderRadius: 1,
          p: 1,
        }}
      >
        {open ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
      </IconButton>

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
          backgroundColor: "customGray.lightGray",
        }}
      />

      <Stack marginLeft="auto" direction="row" spacing={1}>
        <IconButton
          disableRipple
          size="small"
          sx={{
            color: "text.primary",
            bgcolor: open ? "#f5f5f5" : "#eeeeee",
            borderRadius: 0,
          }}
        >
          <GithubOutlined />
        </IconButton>
        <IconButton
          disableRipple
          size="small"
          sx={{
            color: "text.primary",
            bgcolor: open ? "#f5f5f5" : "#eeeeee",
            borderRadius: 0,
          }}
        >
          <BellOutlined />
        </IconButton>
        <Avatar />
      </Stack>
    </Toolbar>
  );
};

export default Header;
