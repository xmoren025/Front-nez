"use client";

import React from "react";
import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import Save from "@mui/icons-material/Save";

function SaveButton() {
  return (
    <Box>
      <IconButton variant="contained">
        <Save/>
      </IconButton>
    </Box>
  );
}
export default SaveButton;