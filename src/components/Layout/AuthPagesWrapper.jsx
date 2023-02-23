import React from "react";

import { Box, Card, CardContent } from "@mui/material";

const AuthPagesWrapper = (props) => {
  return (
    <Box
      minWidth="100vw"
      minHeight="100vh"
      overflow="hidden"
      display="flex"
      bgcolor="#fafafb"
      justifyContent="center"
      alignItems="center"
    >
      <Card sx={{ maxWidth: 500, p: 3, boxShadow: 4 }}>
        <CardContent>{props.children}</CardContent>
      </Card>
    </Box>
  );
};

export default AuthPagesWrapper;
