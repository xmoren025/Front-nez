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
import {InfoIcon, ExpandLess, ExpandMore} from "@mui/icons-material"

// Component
import AddButton from "../buttons/addButton";
import EditButton from "../buttons/editButton";
import DeleteButton from "../buttons/deleteButton";

// style
import styles from "./CardsComponent.module.css";


function PieceComponent() {
  const [open, setOpen] = useState(true);

  const handleClick = () => setOpen((prev) => !prev);

  return (
    <Card className={styles.card}>
      <CardHeader
        title={
          <Typography variant="h6" className={styles.cardTitle}>
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
              <InfoIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="More information" />
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
