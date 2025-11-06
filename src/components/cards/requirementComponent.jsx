"use client";

import React, { useState } from "react";
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

import {
  Info as InfoIcon,
  GppGood as GppGoodIcon, // Security
  Bolt as BoltIcon, // Efficiency
  CloudDone as CloudDoneIcon, // Reliability
} from "@mui/icons-material";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import AddButton from "../buttons/addButton";
import styles from "./CardsComponent.module.css";

// Mapeo de íconos
const typeIcons = {
  Efficiency: <BoltIcon className={styles.iconEfficiency} />,
  Reliability: <CloudDoneIcon className={styles.iconReliability} />,
  Security: <GppGoodIcon className={styles.iconSecurity} />,
  Default: <InfoIcon className={styles.iconDefault}  />,
};

function RequirementComponent({ name, type, description }) {
  const [open, setOpen] = useState(true);
  const handleClick = () => setOpen((prev) => !prev);

  const icon = typeIcons[type] || typeIcons.Default;

  return (
    <Card
      className={`${styles.card} ${
        styles[type?.toLowerCase()] || styles.default
      }`}
    >
      <CardHeader
        title={<Typography variant="h6">{name} Requirement Name</Typography>}
        subheader={<Typography variant="body2">{type} {icon} </Typography>}
        action={<AddButton />}
      />
      <Divider />
      <CardContent>
        <List disablePadding>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon><InfoIcon/></ListItemIcon>
            <ListItemText primary="More information" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 6 }}>
                <ListItemText
                  primary={description || "Requirement extra information."}
                />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </CardContent>
    </Card>
  );
}

export default RequirementComponent;
