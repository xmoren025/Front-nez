"use client";

// material
import { Box, Grid } from "@mui/material";

// icon

// component
import PieceComponent from "../cards/pieceComponent";
import CreatePieceModal from "../modals/createPieceModal";

// style
import styles from "./TabsContentGrids.module.css";
import CartGrid from "./cartGrid";

function PiecesGrid() {
  return (
    <Box>
      <Box>
        <Box className={styles.cardsContent}>
          <Grid container spacing={2}>
            {[...Array(3)].map((_, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                <PieceComponent />
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={2}>
            {[...Array(3)].map((_, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                <PieceComponent />
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={2}>
            {[...Array(3)].map((_, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                <PieceComponent />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box className={styles.createBttnContainer}></Box>
        <CreatePieceModal/>
      </Box>
      <Box className={styles.cart}>
          <CartGrid/>  
      </Box>
    </Box>
  );
}

export default PiecesGrid;
