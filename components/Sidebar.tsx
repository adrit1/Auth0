import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import {
  Home as HomeIcon,
  Dashboard as DashboardIcon,
  AccountCircle as ProfileIcon,
  Settings as SettingsIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const menuItems = [
    { text: "Home", icon: <HomeIcon />, path: "/home" },
    { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
    { text: "Profile", icon: <ProfileIcon />, path: "/profile" },
    { text: "Settings", icon: <SettingsIcon />, path: "/setting" },
  ];
  const handleNavigation = (path: string) => {
    router.push(path); // ✅ Navigate to the selected path
    setOpen(false); // Close sidebar after navigation
  };
  return (
    <>
      {/* Menu Button to Toggle Sidebar */}
      <IconButton onClick={toggleDrawer} sx={{ position: "absolute", top: 10, left: 10, color: 'white' }}>
        <MenuIcon />
      </IconButton>

      {/* Sidebar Drawer */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <List sx={{ width: 250 }}>
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => handleNavigation(item.path)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
