import React from "react";

import DUMMY_USERS from "../../../../data/dummyUsers";

import StatsCard from "../../../UI/Card/StatsCard/StatsCard";

const ClientsCard = () => {
  const clients = DUMMY_USERS.filter((user) =>
    user.role.toLowerCase().includes("client")
  );

  return (
    <StatsCard
      title="Total Clients"
      count={clients.length}
      percentage={59.3}
      extra="16"
    />
  );
};
export default ClientsCard;
