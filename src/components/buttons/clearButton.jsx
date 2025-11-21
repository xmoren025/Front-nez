"use client";

import React from "react";

// material
import { Box, IconButton, Tooltip } from "@mui/material";

//icon
import Autorenew from "@mui/icons-material/Autorenew";

function ClearButton({ onClear }) {
  return (
    <Box>
      <Tooltip title="Clear">
        <IconButton 
          variant="contained"
          onClick={onClear} 
          color="error"     
        >
          <Autorenew />
        </IconButton>
      </Tooltip>
    </Box>
  );
}

export default ClearButton;