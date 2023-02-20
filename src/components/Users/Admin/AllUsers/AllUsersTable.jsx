import React from "react";

import CustomTable from "../../../UI/CustomTable";

import DUMMY_USERS from "../../../../data/dummyUsers";

const AllUsersTable = () => {
  return <CustomTable users={DUMMY_USERS} />;
};

export default AllUsersTable;
