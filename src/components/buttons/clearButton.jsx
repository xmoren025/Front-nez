"use client";

import React from "react";
import Autorenew from "@mui/icons-material/Autorenew";
import { Box, IconButton, Tooltip } from "@mui/material";

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
s;
