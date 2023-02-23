import React from "react";

import StatsCard from "../../../UI/Card/StatsCard/StatsCard";

import DUMMY_USERS from "../../../../data/dummyUsers";

const VendorsCard = () => {
  const vendors = DUMMY_USERS.filter((user) =>
    user.role.toLowerCase().includes("vendor")
  );
  return (
    <StatsCard
      title="Total Clients"
      count={vendors.length}
      percentage={30.6}
      extra="20"
    />
  );
};

export default VendorsCard;
