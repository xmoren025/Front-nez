"use client";
import React, { useEffect, useState } from "react";
import { Box, ImageList, ImageListItem } from "@mui/material";
import styles from "./Gallery.module.css";

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const importAll = (r) => r.keys().map(r);
    try {
      const imgs = importAll(
        require.context("../../public/upload", false, /\.(png|jpe?g|svg|webp)$/)
      );
      setImages(imgs.map((src, index) => ({ img: src, title: `img-${index}` })));
    } catch (err) {
      console.warn("No se pudieron cargar las imágenes:", err);
      setImages([]);
    }
  }, []);

  return (
    <Box className={styles.galleryContainer}>
      <ImageList className={styles.gallery} cols={4} rowHeight={180}>
        {images.map((item, index) => (
          <ImageListItem key={index} className={styles.imageItem}>
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              className={styles.imageGallery}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default Gallery;
