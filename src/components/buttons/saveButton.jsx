"use client";

import React from "react";
import Save from "@mui/icons-material/Save";
import { Box, IconButton, Tooltip } from "@mui/material";

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
