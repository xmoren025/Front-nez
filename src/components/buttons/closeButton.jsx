"use client";

import React from "react";

// material
import { Box, IconButton, Tooltip } from "@mui/material";

// icon
import Close from "@mui/icons-material/Close";

function CloseButton({onClick}) {
  return (
    <Box>
      <Tooltip title="Close">
        <IconButton variant="contained" onClick={onClick}>
          <Close />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
export default CloseButton;
