"use client";

import React from "react";
import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import RemoveShoppingCart from "@mui/icons-material/RemoveShoppingCart";

function RemoveButton() {
  return (
    <Box>
      <IconButton variant="contained">
        <RemoveShoppingCart/>
      </IconButton>
    </Box>
  );
}
export default RemoveButton;
