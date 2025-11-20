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

// icon
import {
  Info as InfoIcon,
  GppGood as GppGoodIcon, // Security
  Bolt as BoltIcon, // Efficiency
  CloudDone as CloudDoneIcon, // Reliability
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";

// component
import AddButton from "../buttons/addButton";

// style
import styles from "./CardsComponent.module.css";

// Mapeo de íconos
const typeIcons = {
  Efficiency: <BoltIcon className={styles.iconEfficiency} />,
  Reliability: <CloudDoneIcon className={styles.iconReliability} />,
  Security: <GppGoodIcon className={styles.iconSecurity} />,
  Default: <InfoIcon className={styles.iconDefault} />,
};

function RequirementComponent({ name, type, description }) {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen((prev) => !prev);

  const icon = typeIcons[type] || typeIcons.Default;

  return (
    <Card
      className={`${styles.card} ${
        styles[type?.toLowerCase()] || styles.default
      }`}
    >
      <CardHeader
        title={
          <Typography variant="Subtitle2">{name} Requirement Name</Typography>
        }
        subheader={
          <Typography variant="body2">
            {type} {icon}{" "}
          </Typography>
        }
        action={<AddButton />}
      />
      <Divider />
      <CardContent>
        <List disablePadding>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="More information" variant="caption"/>
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 5 }}>
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

// EXAMPLE
{/* <RequirementComponent
  name="System Uptime"
  type="Reliability"
  description="Guarantees that the system will be available 99.9% of the time."
/>; */}

export default RequirementComponent;
