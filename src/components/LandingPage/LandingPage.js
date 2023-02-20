import React from "react";

import { Box, Link, Typography } from "@mui/material";

const LandingPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h2">
        <Link href="/admin/dashboard">Go to Admin</Link>
      </Typography>
      <Typography variant="h2">
        <Link href="/developer/onboarding">Go to Developer</Link>
      </Typography>
      <Typography variant="h2">
        <Link href="/vendor/onboarding">Go to Vendor</Link>
      </Typography>
      <Typography variant="h2">
        <Link href="/client/onboarding">Go to Client</Link>
      </Typography>
    </Box>
  );
};

export default LandingPage;
