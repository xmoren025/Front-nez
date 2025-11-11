"use client";

// material
import { Box, Grid } from "@mui/material";

// icon

// component
import RequirementComponent from "../cards/requirementComponent";

// style
import styles from "./TabsContentGrids.module.css";
import CartGrid from "./cartGrid";

function RequirementsGrid() {
  return (
    <Box>
      <Box className={styles.cardsContent}>
        <Grid container spacing={2}>
          {[...Array(3)].map((_, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <RequirementComponent 
              type="Efficiency"/>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={2}>
          {[...Array(3)].map((_, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <RequirementComponent
              type="Security"/>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={2}>
          {[...Array(3)].map((_, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <RequirementComponent 
              type="Reliability"/>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box className={styles.cart}>
        <CartGrid/>
      </Box>
    </Box>
  );
}

export default RequirementsGrid;
