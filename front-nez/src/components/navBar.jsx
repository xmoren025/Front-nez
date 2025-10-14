import React from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import Avatar from "@mui/material/Avatar";
import ButtonBase from "@mui/material/ButtonBase";

// Icons
import {
  AddBox,
  ViewList,
  FolderOpen,
  Inventory2,
  Extension,
  ExpandLess,
  ExpandMore,
  Logout,
} from "@mui/icons-material";

function NavBar() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Nez System
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto", paddingLeft: 1, paddingTop: 3 }}>
          <ButtonBase
            component="label"
            role={undefined}
            tabIndex={-1}
            aria-label="Avatar image"
            sx={{
              borderRadius: "40px",
              "&:has(:focus-visible)": {
                outline: "2px solid",
                outlineOffset: "2px",
              },
              position: "absolute",
            }}
          >
            <Avatar alt="User name" src={avatarSrc} />
            <input
              type="file"
              accept="image/*"
              style={{
                border: 0,
                clip: "rect(0 0 0 0)",
                height: "1px",
                margin: "-1px",
                overflow: "hidden",
                padding: 0,
                whiteSpace: "nowrap",
                width: "1px",
              }}
              onChange={handleAvatarChange}
            />
          </ButtonBase>
          <Typography
            variant="body2"
            color="disabled"
            sx={{ p: 2, paddingLeft: 7 }}
          >
            User name
          </Typography>

          <Divider />

          <ListItemButton onClick={handleServicesClick}>
            <ListItemIcon>
              <Extension />
            </ListItemIcon>
            <ListItemText primary="Services" />
            {openServices ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openServices} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <AddBox />
                </ListItemIcon>
                <ListItemText primary="Create a service" />
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ViewList />
                </ListItemIcon>
                <ListItemText primary="List services" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={handleStorageClick}>
            <ListItemIcon>
              <Inventory2 />
            </ListItemIcon>
            <ListItemText primary="Storage" />
            {openStorage ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openStorage} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <FolderOpen />
                </ListItemIcon>
                <ListItemText primary="Catalogs" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton href="/test">
            <ListItemIcon>
              <Logout sx={{ color: red[300] }} />
            </ListItemIcon>
            <ListItemText primary="Log out" />
          </ListItemButton>
        </Box>
      </Drawer>
    </Box>
  );
}

export default NavBar;
