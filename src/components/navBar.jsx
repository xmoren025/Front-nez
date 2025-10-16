import React from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import Avatar from "@mui/material/Avatar";
import ButtonBase from "@mui/material/ButtonBase";
import { red } from "@mui/material/colors";

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

const drawerWidth = 240;

function NavBar() {
  const [avatarSrc, setAvatarSrc] = React.useState(undefined);

  const handleAvatarChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      // Read the file as a data URL
      const reader = new FileReader();
      reader.onload = () => {
        setAvatarSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const [openServices, setOpenServices] = React.useState(true);
  const [openStorage, setOpenStorage] = React.useState(true);

  const handleStorageClick = () => {
    setOpenStorage(!openStorage);
  };

  const handleServicesClick = () => {
    setOpenServices(!openServices);
  };

  return (
    <Box sx={{ display: "flex" }}>
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
        <Image
          src="/logos/nez2-logo-512.png"
          alt="Nez logo"
          width={220}
          height={160}
        />

        <Toolbar />
        <Box sx={{ overflow: "auto", paddingLeft: 1 }}>
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
          
          <ListItemButton href="/auth/login">
            <ListItemIcon>
              <Logout sx={{ color: red[300]}} />
            </ListItemIcon>
            <ListItemText primary="Log out" />
          </ListItemButton>
        </Box>
      </Drawer>
    </Box>
  );
}

export default NavBar;
