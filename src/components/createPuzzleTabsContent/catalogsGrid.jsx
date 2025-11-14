"use client";

// material
import { Box, Grid } from "@mui/material";

// icon

// component
import CatalogComponent from "../cards/catalogComponent";
import CreateCatalogModal from "../modals/createCatalogModal";

// style
import styles from "./TabsContentGrids.module.css";

function CatalogsGrid() {
  return (
    <Box>
      <Box className={styles.cardsContent}>
        <Grid container spacing={2}>
          {[...Array(3)].map((_, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <CatalogComponent />
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={2}>
          {[...Array(3)].map((_, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <CatalogComponent />
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={2}>
          {[...Array(3)].map((_, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <CatalogComponent />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box className={styles.createBttnContainer}>
        {" "}
        <CreateCatalogModal />
      </Box>
    </Box>
  );
}

export default CatalogsGrid;
