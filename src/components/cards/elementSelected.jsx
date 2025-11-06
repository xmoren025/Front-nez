"use client";

import React from "react";

// material
import { Card, CardHeader, Typography } from "@mui/material";

// Icon
import { Extension, FolderOpen, TaskAlt } from "@mui/icons-material";

// Component
import RemoveButton from "../buttons/removeButton";

// Style
import styles from "./CardsComponent.module.css";

function ElementSelected({ name, type }) {
  // Mapeo de íconos según tipo
  const icons = {
    pieza: <Extension />,
    catalogo: <FolderOpen />,
    requerimiento: <TaskAlt />,
  };

  const icon = icons[type?.toLowerCase()] || <FolderOpen />;

  return (
    <Card className={styles.cardElementCart}>
      <CardHeader
        avatar={icon}
        title={
          <Typography variant="body2" className={styles.cardTitleElementCart}>
            {name || "Selected element name"}
          </Typography>
        }
        action={<RemoveButton/>}
      />
    </Card>
  );
}

export default ElementSelected;
