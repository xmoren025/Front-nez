"use client";

import React from "react";

// material
import {Card, CardHeader, CardContent, Typography} from "@mui/material";

// icon 


// component
import AddButton from "../buttons/addButton";

// styles
import styles from "./CardsComponent.module.css";

function CatalogComponent() {

  return (
    <Card className={styles.card}>
      <CardHeader
        title={
          <Typography variant="h6" className={styles.cardTitle}>
            Catalog name
          </Typography>
        }
        action={<AddButton />}
      />
      <CardContent className={styles.cardContent}>
        <Typography variant="body2" className={styles.cardCaption}>
          Requirement type
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CatalogComponent;
