"use client";

import React from "react";

// material
import { Box, IconButton, Tooltip } from "@mui/material";

//icon
import Autorenew from "@mui/icons-material/Autorenew";

function ClearButton() {
  return (
    <Box>
      <Tooltip title="Clear">
        <IconButton variant="contained">
          <Autorenew />
        </IconButton>
      </Tooltip>
    </Box>
  );
}

export default ClearButton;
