import React from "react";
import { Outlet } from "react-router-dom";

import AWrapper from "./Layouts/AWrapper";

const APage = () => {
  return (
    <AWrapper>
      <Outlet />
    </AWrapper>
  );
};

export default APage;
