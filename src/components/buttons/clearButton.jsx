"use client";

import React from "react";
import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import Autorenew from "@mui/icons-material/Autorenew";

function ClearButton() {
  return (
    <Box>
      <IconButton variant="contained">
        <Autorenew/>
      </IconButton>
    </Box>
  );
}
export default ClearButton;