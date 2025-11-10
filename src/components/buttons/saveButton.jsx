"use client";

import React from "react";

// material
import { Box, IconButton, Tooltip } from "@mui/material";

// icon
import Save from "@mui/icons-material/Save";

function SaveButton({ onClick }) {
  return (
    <Box>
      <Tooltip title="Save">
        <IconButton variant="contained" onClick={onClick}>
          <Save />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
export default SaveButton;
