import React from "react";

import TableLayout from "../Layouts/TableLayout";

import DUMMY_USERS from "../../../data/dummyUsers";

const AllUsersTable = () => {
  return <TableLayout users={DUMMY_USERS} />;
};

export default AllUsersTable;
