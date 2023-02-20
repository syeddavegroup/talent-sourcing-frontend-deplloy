import React from "react";
import { Outlet } from "react-router-dom";

import HeaderAndSidebarWrapper from "../../Layout/HeaderAndSidebarWrapper";

import { adminNavLinks } from "../../../data/navLinks";

const APage = () => {
  return (
    <HeaderAndSidebarWrapper navLinks={adminNavLinks}>
      <Outlet />
    </HeaderAndSidebarWrapper>
  );
};

export default APage;
