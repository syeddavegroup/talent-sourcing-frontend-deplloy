import React from "react";
import { Outlet } from "react-router-dom";

import AWrapper from "../../components/Admin/Layout/AWrapper";

const APage = () => {
  return (
    <AWrapper>
      <Outlet />
    </AWrapper>
  );
};

export default APage;
