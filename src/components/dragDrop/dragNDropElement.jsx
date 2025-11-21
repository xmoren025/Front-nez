"use client";

import React from "react";

// material
import { Box } from "@mui/material";

// style
import styles from "./DragNDrop.module.css";

const DragNDropElement = ({ piece }) => {
  return (
    <Box
      className={styles.puzzlePiece}
      sx={{ bgcolor: piece.color }} 
    >
      {piece.name}
    </Box>
  );
};

export default DragNDropElement;
