import React from "react";

import {
  Typography,
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

const DevelopersTable = () => {
  return (
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
          <TableRow>
            <TableCell sx={{ border: 0, display: "flex" }}>
              <Avatar
                src="https://robohash.org/liberoetfugit.png?size=50x50&set=set1"
                alt="asdasdad"
                sx={{ backgroundColor: `${"red"}` }}
              />
              <Stack marginLeft={2}>
                <Typography variant="body1" fontWeight="bold">
                  Full Name
                </Typography>
                <Typography variant="subtitle2">jib title</Typography>
              </Stack>
            </TableCell>

            <TableCell align="center" sx={{ border: 0 }}>
              <CircularProgress
                variant="determinate"
                value={20}
                color="secondary"
                size={30}
                thickness={5}
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DevelopersTable;
