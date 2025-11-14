"use client";

import { Box, Grid } from "@mui/material";
import PieceComponent from "../cards/pieceComponent";
import CreatePieceModal from "../modals/createPieceModal";
import styles from "./TabsContentGrids.module.css";

function PiecesGrid() {
  return (
    <Box>
      <Box className={styles.cardsContent}>
        <Grid container spacing={2}>
          {[...Array(3)].map((_, index) => (
            <Grid item key={index} >
              <PieceComponent />
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={2}>
          {[...Array(3)].map((_, index) => (
            <Grid item key={index} >
              <PieceComponent />
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={2}>
          {[...Array(3)].map((_, index) => (
            <Grid item key={index} >
              <PieceComponent />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box className={styles.createBttnContainer}>
        {" "}
        <CreatePieceModal/>
      </Box>
    </Box>
  );
}

export default PiecesGrid;
