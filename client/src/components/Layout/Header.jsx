import React from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { orange } from "./../../constants/color";
import {
  Add as AddIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";

const Header = () => {
  const handleMobile = () => {};
  const openSearch = () => {};
  const openNewGroup = () => {};
  const LogOut = () => {};
  const NavigateToGroup = () => {};
  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: orange,
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              ChatPulse
            </Typography>
            <Box
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <Tooltip title="Search">
                <IconButton color="inherit" size="large" onClick={openSearch}>
                  <SearchIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="New Group">
                <IconButton color="inherit" size="large" onClick={openNewGroup}>
                  <AddIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="new Group">
                <IconButton
                  color="inherit"
                  size="large"
                  onClick={NavigateToGroup}
                >
                  <GroupIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="new Notification">
                <IconButton color="inherit" size="large" onClick={LogOut}>
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Logout">
                <IconButton color="inherit" size="large" onClick={LogOut}>
                  <LogoutIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
