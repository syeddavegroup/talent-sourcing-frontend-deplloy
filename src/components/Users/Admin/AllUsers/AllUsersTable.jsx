import React, { useState } from "react";

import CustomTable from "../../../UI/CustomTable";

import DUMMY_USERS from "../../../../data/dummyUsers";

const AllUsersTable = () => {
  const [users, setUsers] = useState();

  return <CustomTable users={DUMMY_USERS} />;
};

export default AllUsersTable;
