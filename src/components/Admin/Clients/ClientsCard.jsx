import React from "react";

import card2Img from "../../../assets/Admin/card2.png";

import CustomCard from "../Layouts/CustomCard";

import DUMMY_USERS from "../../../data/dummyUsers";

const ClientsCard = () => {
  const clients = DUMMY_USERS.filter((user) =>
    user.role.toLowerCase().includes("client")
  );
  return (
    <CustomCard
      heading="Total Clients"
      image={card2Img}
      quantity={clients.length}
    />
  );
};
export default ClientsCard;
