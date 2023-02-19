import React from "react";

import TableLayout from "../Layouts/TableLayout";

import DUMMY_USERS from "../../../data/dummyUsers";

const ClientsTable = () => {
  const developers = DUMMY_USERS.filter((user) =>
    user.role.toLowerCase().includes("developer")
  );

  return <TableLayout users={developers} />;
};

export default ClientsTable;
