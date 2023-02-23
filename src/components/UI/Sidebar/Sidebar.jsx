import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

import {
  Drawer,
  Toolbar,
  List,
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  AppBar,
  styled,
} from "@mui/material";

const drawerWidth = 260;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

const Sidebar = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      anchor="left"
      open={props.open}
    >
      <DrawerHeader>
        <Typography marginLeft={1}>
          <Link to="/">T-Sourcing</Link>
        </Typography>
      </DrawerHeader>

      <Box sx={{ overflow: "auto" }}>
        <List>
          {props.navLinks.map((item) => (
            <ListItem
              key={item.id}
              disablePadding
              onClick={() => navigate(item.path)}
              sx={{
                borderRight: 3,
                borderColor: `${
                  location.pathname === item.path ? "#1890ff" : "white"
                }`,
                marginY: 2,
                backgroundColor: `${
                  location.pathname === item.path ? "#e6f7ff" : ""
                }`,
              }}
            >
              <ListItemButton>
                <ListItemIcon sx={{ marginRight: -3, color: "gray" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      variant="body2"
                      color={location.pathname === item.path ? "#1890ff" : ""}
                    >
                      {item.name}
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
