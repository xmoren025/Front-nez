"use client";
import React from "react";
import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import styles from "./Gallery.module.css";

function Gallery({ images = [], cols = 4, rowHeight = 180 }) {
  return (
    <Box className={styles.gridContainer}>
      {images.length > 0 ? (
        <ImageList cols={cols} rowHeight={rowHeight} className={styles.imageGrid}>
          {images.map((item, index) => (
            <ImageListItem key={index} className={styles.imageItem}>
              <img
                src={item.img}
                alt={item.title || `img-${index}`}
                loading="lazy"
                className={styles.image}
              />
            </ImageListItem>
          ))}
        </ImageList>
      ) : (
        <Typography variant="body2" color="text.secondary" align="center">
          No hay imágenes disponibles
        </Typography>
      )}
    </Box>
  );
}

export default Gallery;
