import React from "react";

import TableLayout from "../Layouts/TableLayout";

import DUMMY_USERS from "../../../data/dummyUsers";

const ClientsTable = () => {
  const vendors = DUMMY_USERS.filter((user) =>
    user.role.toLowerCase().includes("vendor")
  );

  return <TableLayout users={vendors} />;
};

export default ClientsTable;
