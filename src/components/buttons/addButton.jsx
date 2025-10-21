"use client";

import React from "react";
import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";

function AddButton() {
  return (
    <Box>
      <IconButton variant="contained">
        <AddShoppingCart/>
      </IconButton>
    </Box>
  );
}
export default AddButton;
