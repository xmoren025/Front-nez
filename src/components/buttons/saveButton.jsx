"use client";

import React from "react";
import Save from "@mui/icons-material/Save";
import { Box, IconButton, Tooltip } from "@mui/material";

function SaveButton() {
  return (
    <Box>
      <Tooltip>
        <IconButton variant="contained">
          <Save />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
export default SaveButton;
