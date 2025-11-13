"use client";

import { Box, Grid } from "@mui/material";
import PieceComponent from "../cards/pieceComponent";
import CreatePieceModal from "../modals/createPieceModal";
import CartGrid from "./cartGrid";
import styles from "./TabsContentGrids.module.css";

function PiecesGrid() {
  return (
    <Box className={styles.mainContainer}>
      <Box className={styles.contentWrapper}>
        {/* IZQUIERDA: grid de cards */}
        <Box className={styles.cardsSection}>
          <Grid container spacing={2}>
            {[...Array(9)].map((_, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <PieceComponent />
              </Grid>
            ))}
          </Grid>

          <Box className={styles.createBttnContainer}>
            <CreatePieceModal />
          </Box>
        </Box>

        {/* DERECHA: cart fijo */}
        <Box className={styles.cartSection}>
          <CartGrid />
        </Box>
      </Box>
    </Box>
  );
}

export default PiecesGrid;
