"use client";

import React from "react";
import Close from "@mui/icons-material/Close";
import { Box, IconButton, Tooltip } from "@mui/material";

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
