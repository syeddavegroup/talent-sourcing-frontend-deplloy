import React from "react";

import CustomTable from "../../../UI/CustomTable";

import DUMMY_USERS from "../../../../data/dummyUsers";

const ClientsTable = () => {
  const clients = DUMMY_USERS.filter((user) =>
    user.role.toLowerCase().includes("client")
  );

  return <CustomTable users={clients} />;
};

export default ClientsTable;
