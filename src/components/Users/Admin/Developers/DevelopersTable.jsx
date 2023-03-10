import React from "react";

import CustomTable from "../../../UI/CustomTable";

import DUMMY_USERS from "../../../../data/dummyUsers";

const ClientsTable = () => {
  const developers = DUMMY_USERS.filter((user) =>
    user.role.toLowerCase().includes("developer")
  );

  return <CustomTable users={developers} />;
};

export default ClientsTable;
