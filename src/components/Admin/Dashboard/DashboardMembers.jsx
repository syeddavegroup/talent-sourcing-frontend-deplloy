import React, { useState } from "react";

import {
  Box,
  Typography,
  Divider,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  CircularProgress,
  Avatar,
  Stack,
} from "@mui/material";

import DUMMY_USERS from "../../../data/dummyUsers";

const DashboardDUMMY_USERS = () => {
  const [seeAll, setSeeAll] = useState(false);

  const visibleDUMMY_USERS = !seeAll
    ? [...DUMMY_USERS].slice(0, 5)
    : [...DUMMY_USERS].slice(0, 10);

  function toggleSeeAll() {
    setSeeAll((prev) => {
      return !prev;
    });
  }
  return (
    <Box
      maxWidth={400}
      width={400}
      border={1}
      borderColor="lightGray"
      borderRadius={3}
    >
      <Typography variant="h6" paddingX={3} paddingY={2}>
        Team Members
      </Typography>
      <Divider />

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>NAME</TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                PROGRESS
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleDUMMY_USERS.map((item) => (
              <TableRow key={item.id}>
                <TableCell sx={{ border: 0, display: "flex" }}>
                  <Avatar
                    src={item.avatar}
                    alt={item.fullName}
                    sx={{ backgroundColor: `${item.progressColor}` }}
                  />
                  <Stack marginLeft={2}>
                    <Typography variant="body1" fontWeight="bold">
                      {item.fullName}
                    </Typography>
                    <Typography variant="subtitle2">{item.jobTitle}</Typography>
                  </Stack>
                </TableCell>

                <TableCell align="center" sx={{ border: 0 }}>
                  <CircularProgress
                    variant="determinate"
                    value={item.progress}
                    color={item.progressColor}
                    size={30}
                    thickness={5}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Divider />
      <Button
        onClick={toggleSeeAll}
        color="error"
        sx={{ marginX: "auto", width: "100%" }}
      >
        {seeAll ? "See Less Members" : "See All Members"}
      </Button>
    </Box>
  );
};

export default DashboardDUMMY_USERS;
