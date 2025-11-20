"use client";

import React from "react";

// material
import { Card, CardHeader, Typography } from "@mui/material";

// icon
import { Extension, FolderOpen, TaskAlt } from "@mui/icons-material";

// component
import RemoveButton from "../buttons/removeButton";

// style
import styles from "./CardsComponent.module.css";

function ElementSelected({ name, type }) {
  // Mapeo de íconos según tipo
  const icons = {
    pieza: <Extension fontSize="small" />,
    catalogo: <FolderOpen fontSize="small"/>,
    requerimiento: <TaskAlt fontSize="small" />,
  };

  const icon = icons[type?.toLowerCase()] || <FolderOpen  fontSize="small" color="primary" />;

  return (
    <Card className={styles.cardElementCart}>
      <CardHeader
        avatar={icon}
        title={
          <Typography variant="caption" className={styles.cardTitleElementCart}>
            {name || "example"}
          </Typography>
        }
        action={<RemoveButton/>}
      />
    </Card>
  );
}

export default ElementSelected;
