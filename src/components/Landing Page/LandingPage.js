import React from "react";

import { Box, Link, Typography } from "@mui/material";

const LandingPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h2">
        <Link href="/admin/dashboard">Go to Admin</Link>
      </Typography>
    </Box>
  );
};

export default LandingPage;
