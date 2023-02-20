import React from "react";
import { Outlet } from "react-router-dom";

import HeaderAndSidebarWrapper from "../../Layout/HeaderAndSidebarWrapper";

import { developerNavLinks } from "../../../data/navLinks";

const DPage = () => {
  return (
    <HeaderAndSidebarWrapper navLinks={developerNavLinks}>
      <Outlet />
    </HeaderAndSidebarWrapper>
  );
};

export default DPage;
