import React from "react";

import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import TableActions from "./TableActions";
import CustomProgress from "../Others/CustomProgress";

const CustomTable = (props) => {
  const columns = [
    {
      field: "fullName",
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
      field: "designation",
      headerClassName: "super-app-theme--header",
      flex: 1,
      headerName: "Designation",
      sortable: false,
    },

    {
      field: "contactNum",
      headerClassName: "super-app-theme--header",
      flex: 1,
      headerName: "Number",
      align: "center",
      headerAlign: "center",
      maxWidth: 150,
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
        getRowId={(row) => row._id}
        loading={!props.users.length}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
};

export default CustomTable;
