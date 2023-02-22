import React from "react";

import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import TableActions from "./TableActions";
import CustomProgress from "../Others/CustomProgress";

const CustomTable = (props) => {
  const columns = [
    {
      field: "id",
      headerClassName: "super-app-theme--header",
      flex: 1,
      headerName: "S.NO",
      align: "center",
      headerAlign: "center",
      maxWidth: 100,
    },
    {
      field: "name",
      headerClassName: "super-app-theme--header",
      flex: 1,
      headerName: "Name",
      maxWidth: 200,
      sortable: false,
    },
    {
      field: "email",
      headerClassName: "super-app-theme--header",
      flex: 1,
      headerName: "Email",
      sortable: false,
    },
    {
      field: "jobTitle",
      headerClassName: "super-app-theme--header",
      flex: 1,
      headerName: "Job Title",
      sortable: false,
    },
    {
      field: "role",
      headerClassName: "super-app-theme--header",
      flex: 1,
      headerName: "Role",
      maxWidth: 150,
      sortable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "progress",
      headerClassName: "super-app-theme--header",
      flex: 1,
      headerName: "Progress",
      align: "center",
      headerAlign: "center",
      maxWidth: 150,
      renderCell: (params) => (
        <CustomProgress
          value={params.row.progress}
          color={params.row.progressColor}
        />
      ),
    },
    {
      field: "actions",
      headerClassName: "super-app-theme--header",
      flex: 1,
      headerName: "Actions",
      sortable: false,
      align: "center",
      headerAlign: "center",
      maxWidth: 150,
      renderCell: (params) => <TableActions user={params.row} />,
    },
  ];

  return (
    <Box
      sx={{
        height: 550,
        width: "100%",
        "& .super-app-theme--header": {
          backgroundColor: "#e0e0e0",
          fontSize: 16,
        },
      }}
    >
      <DataGrid
        rows={props.users}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
};

export default CustomTable;
