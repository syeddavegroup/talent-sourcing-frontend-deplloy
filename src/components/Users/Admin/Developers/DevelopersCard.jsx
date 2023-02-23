import React from "react";

import StatsCard from "../../../UI/Card/StatsCard/StatsCard";

import DUMMY_USERS from "../../../../data/dummyUsers";

const DevelopersCard = () => {
  const developers = DUMMY_USERS.filter((user) =>
    user.role.toLowerCase().includes("developer")
  );
  return (
    <StatsCard
      title="Total Developers"
      count={developers.length}
      percentage={70.3}
      extra="10"
    />
  );
};

export default DevelopersCard;
