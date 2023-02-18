import InboxIcon from "@mui/icons-material/MoveToInbox";
import SettingsIcon from "@mui/icons-material/Settings";
import CodeIcon from "@mui/icons-material/Code";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import GroupIcon from "@mui/icons-material/Group";

export const adminNavLinks = [
  { id: 1, name: "Dashboard", icon: <InboxIcon />, path: "/admin/dashboard" },
  { id: 3, name: "Vendors", icon: <Diversity3Icon />, path: "/admin/vendors" },
  { id: 4, name: "Clients", icon: <GroupIcon />, path: "/admin/clients" },
  { id: 5, name: "Developers", icon: <CodeIcon />, path: "/admin/developers" },
  { id: 2, name: "Settings", icon: <SettingsIcon />, path: "/admin/settings" },
];
