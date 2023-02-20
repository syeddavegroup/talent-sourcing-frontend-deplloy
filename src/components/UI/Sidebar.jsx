import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  Drawer,
  Toolbar,
  List,
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const Sidebar = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.pathname);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 240,
          boxSizing: "border-box",
        },
        border: "none",
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {props.navLinks.map((item) => (
            <ListItem
              key={item.id}
              disablePadding
              onClick={() => navigate(item.path)}
              sx={{
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                marginY: 2,
                backgroundColor: `${
                  location.pathname === item.path ? "lightgray" : ""
                }`,
              }}
            >
              <ListItemButton>
                <ListItemIcon sx={{ marginRight: -3, color: "black" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
