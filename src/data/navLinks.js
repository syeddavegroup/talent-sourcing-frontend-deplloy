import InboxIcon from "@mui/icons-material/MoveToInbox";
import SettingsIcon from "@mui/icons-material/Settings";
import CodeIcon from "@mui/icons-material/Code";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import GroupIcon from "@mui/icons-material/Group";
import HailIcon from "@mui/icons-material/Hail";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";

import { LoginOutlined, UnorderedListOutlined } from "@ant-design/icons";

export const adminNavLinks = [
  { id: 1, name: "Dashboard", icon: <InboxIcon />, path: "/admin/dashboard" },
  {
    id: 2,
    name: "All Users",
    icon: <Diversity3Icon />,
    path: "/admin/allUsers",
  },
  { id: 5, name: "Developers", icon: <CodeIcon />, path: "/admin/developers" },
  { id: 4, name: "Clients", icon: <HailIcon />, path: "/admin/clients" },
  { id: 3, name: "Vendors", icon: <GroupIcon />, path: "/admin/vendors" },
  {
    id: 6,
    name: "Register",
    icon: <UnorderedListOutlined />,
    path: "/auth/register",
  },
  { id: 6, name: "Login", icon: <LoginOutlined />, path: "/auth/login" },
  { id: 6, name: "Settings", icon: <SettingsIcon />, path: "/admin/settings" },
];

export const clientNavLinks = [
  {
    id: 1,
    name: "Onboarding",
    icon: <FormatAlignCenterIcon />,
    path: "/client/onboarding",
  },
  {
    id: 2,
    name: "Settings",
    icon: <SettingsIcon />,
    path: "/client/settings",
  },
];

export const developerNavLinks = [
  {
    id: 1,
    name: "Onboarding",
    icon: <FormatAlignCenterIcon />,
    path: "/developer/onboarding",
  },
  {
    id: 2,
    name: "Settings",
    icon: <SettingsIcon />,
    path: "/developer/settings",
  },
  {
    id: 3,
    name: "Feed",
    icon: <SettingsIcon />,
    path: "/developer/feed",
  },
];

export const vendorNavLinks = [
  {
    id: 1,
    name: "Onboarding",
    icon: <FormatAlignCenterIcon />,
    path: "/vendor/onboarding",
  },
  {
    id: 2,
    name: "Settings",
    icon: <SettingsIcon />,
    path: "/vendor/settings",
  },
];
