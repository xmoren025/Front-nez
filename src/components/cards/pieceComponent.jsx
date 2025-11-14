"use client";

import React, { useState } from "react";

// material
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";

// icon
import InfoIcon from "@mui/icons-material/Info";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

// Component
import AddButton from "../buttons/addButton";
import EditButton from "../buttons/editButton";
import DeleteButton from "../buttons/deleteButton";

// style
import styles from "./CardsComponent.module.css";


function PieceComponent() {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen((prev) => !prev);

  return (
    <Card className={styles.card}>
      <CardHeader
        title={
          <Typography variant="body1" className={styles.cardTitle}>
            Piece name
          </Typography>
        }
        subheader={
          <Typography variant="body2" className={styles.cardCaption}>
            Piece function
          </Typography>
        }
        action={<AddButton />}
      />
      <Divider />
      <CardContent className={styles.cardContent}>
        <List disablePadding>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <InfoIcon color="primary" fontSize="medium" />
            </ListItemIcon>
            <ListItemText secondary="More information" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 6 }}>
                <ListItemText
                  primary="Piece extra information here"
                  secondary="Additional details, parameters, or metadata..."
                />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </CardContent> 
      <CardActions className={styles.cardActions}>
        <EditButton />
        <DeleteButton />
      </CardActions>
    </Card>
  );
}

export default PieceComponent;
