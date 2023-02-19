import React from "react";

import TableLayout from "../Layouts/TableLayout";

import DUMMY_USERS from "../../../data/dummyUsers";

const ClientsTable = () => {
  const clients = DUMMY_USERS.filter((user) =>
    user.role.toLowerCase().includes("client")
  );

  return <TableLayout users={clients} />;
};

export default ClientsTable;
