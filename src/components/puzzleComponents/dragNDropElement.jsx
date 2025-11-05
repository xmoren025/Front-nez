"use client";

import React from "react";

// material
import { Paper, Typography } from "@mui/material";

// icon
import { Extension } from "@mui/icons-material";

//style
//import styles from "../JoinPieces.module.css";

const DragNDropElement = ({ piece }) => (
  <Paper
    sx={{
      p: 2,
      bgcolor: "#f5f5f5",
      cursor: "grab",
      "&:hover": { bgcolor: "#e0e0e0" },
    }}
    //className={styles.joinPiece}
    elevation={2}
  >
    <Typography>
      <Extension sx={{ mr: 1, verticalAlign: "middle" }} />
      {piece.name}
    </Typography>
  </Paper>
);

export default DragNDropElement;
