"use client";

import React from "react";
import { Card, CardHeader, Typography } from "@mui/material";

// Íconos
import { Extension, FolderOpen, TaskAlt } from "@mui/icons-material";

// Componente
import AddButton from "../buttons/addButton";

// Estilos
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
        action={<AddButton />}
      />
    </Card>
  );
}

export default ElementSelected;
