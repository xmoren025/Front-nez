"use client";

import React, { useState } from "react";

// material
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

// icon
import InfoIcon from "@mui/icons-material/Info";

// Components
import AddButton from "../buttons/addButton";

// styles
import styles from "./CardsComponent.module.css";

function RequirementComponent() {
  const [open, setOpen] = useState(true);

  const handleClick = () => setOpen((prev) => !prev);

  return (
    <Card className={styles.card}>
      <CardHeader
        title={
          <Typography variant="h6" className={styles.cardTitle}>
            Requirement name
          </Typography>
        }
        subheader={
          <Typography variant="body2" className={styles.cardCaption}>
            Requirement type
          </Typography>
        }
        action={<AddButton />}
      />
      <Divider />
      <CardContent className={styles.cardContent}>
        <List disablePadding>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <InfoIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="More information" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 6 }}>
                <ListItemText primary="Requirement extra information here" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </CardContent>
    </Card>
  );
}

export default RequirementComponent;
