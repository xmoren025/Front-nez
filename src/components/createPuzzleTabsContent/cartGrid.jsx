"use client";

// material
import { Box, Divider, Typography } from "@mui/material";
import ElementSelected from "../cards/elementSelected";
// icon

// component

// style
import styles from "./TabsContentGrids.module.css";

function CartGrid() {
  return (
    <Box className={styles.cartContent}>
      <Typography variant="h6" gutterBottom className={styles.cartTitle}>
        Selected elements
      </Typography>
      <Divider />
      <Box className={styles.elementsContainer}>
        <ElementSelected/>
      </Box>
    </Box>

    
  );
}

export default CartGrid;
