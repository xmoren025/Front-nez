"use client";

import React, { useState, useEffect } from "react";

// material
import { Tabs, Tab, Box, Typography } from "@mui/material";

// style
import styles from "./CustomTabsBoard.module.css";
import CartGrid from "./createPuzzleTabsContent/cartGrid";

function CustomTabsBoard({ items = [] }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (items.length > 0 && value >= items.length) {
      setValue(0);
    }
  }, [items, value]);

  return (
    <Box className={styles.container}>
      {/* Tabs superiores */}
      <Box className={styles.tabsContainer}>
        <Tabs
          value={Math.min(value, items.length - 1) || 0}
          onChange={handleChange}
          sx={{
            ".MuiTabs-indicator": { display: "none" },
          }}
        >
          {items.map((item, index) => (
            <Tab
              key={index}
              label={item.label}
              className={`${styles.tab} ${
                value === index ? styles.tabActive : ""
              }`}
            />
          ))}
        </Tabs>
      </Box>

      {/* Contenedor de contenido */}
      <Box className={styles.contentBox}>
        <Typography component="div">
          {items?.[value]?.content ?? "No hay contenido disponible"}
        </Typography>
      </Box>
    </Box>
  );
}

export default CustomTabsBoard;
