" use client";
import React from "react";
import { Box, ImageList, ImageListItem } from "@mui/material";

function Gallery() {
  return (
    <Box>
      <ImageList sx={{ width: 500, height: 450 }} cols={4} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default Gallery;
