import React from "react";

import card1Img from "../../../../assets/Admin/card2.png";

import CustomCard from "../../../UI/CustomCard";

import DUMMY_USERS from "../../../../data/dummyUsers";

const DevelopersCard = () => {
  const developers = DUMMY_USERS.filter((user) =>
    user.role.toLowerCase().includes("developer")
  );
  return (
    <CustomCard
      heading="Total Developers"
      image={card1Img}
      quantity={developers.length}
    />
  );
};

export default DevelopersCard;
