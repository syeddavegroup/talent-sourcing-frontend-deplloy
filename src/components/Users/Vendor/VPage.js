import React from "react";
import { Outlet } from "react-router-dom";

import HeaderAndSidebarWrapper from "../../Layout/HeaderAndSidebarWrapper";

import { vendorNavLinks } from "../../../data/navLinks";

const VPage = () => {
  return (
    <HeaderAndSidebarWrapper navLinks={vendorNavLinks}>
      <Outlet />
    </HeaderAndSidebarWrapper>
  );
};

export default VPage;
