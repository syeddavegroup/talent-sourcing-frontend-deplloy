import React from "react";

import CustomTable from "../../../UI/CustomTable";

import DUMMY_USERS from "../../../../data/dummyUsers";

const ClientsTable = () => {
  const vendors = DUMMY_USERS.filter((user) =>
    user.role.toLowerCase().includes("vendor")
  );

  return <CustomTable users={vendors} />;
};

export default ClientsTable;
