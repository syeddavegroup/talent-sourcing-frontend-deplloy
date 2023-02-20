import React from "react";
import { Outlet } from "react-router-dom";

import HeaderAndSidebarWrapper from "../../Layout/HeaderAndSidebarWrapper";

import { clientNavLinks } from "../../../data/navLinks";

const CPage = () => {
  return (
    <HeaderAndSidebarWrapper navLinks={clientNavLinks}>
      <Outlet />
    </HeaderAndSidebarWrapper>
  );
};

export default CPage;
