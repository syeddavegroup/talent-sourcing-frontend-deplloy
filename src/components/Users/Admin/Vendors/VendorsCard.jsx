import React from "react";

import card2Img from "../../../../assets/Admin/card2.png";

import CustomCard from "../../../UI/CustomCard";

import DUMMY_USERS from "../../../../data/dummyUsers";

const VendorsCard = () => {
  const vendors = DUMMY_USERS.filter((user) =>
    user.role.toLowerCase().includes("vendor")
  );
  return (
    <CustomCard
      heading="Total Vendors"
      image={card2Img}
      quantity={vendors.length}
    />
  );
};

export default VendorsCard;
