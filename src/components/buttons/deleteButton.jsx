"use client";

import React from "react";

// material
import { Box, IconButton, Tooltip } from "@mui/material";

// icon
import Delete from "@mui/icons-material/Delete";

function DeleteButton() {
  return (
    <Box>
      <Tooltip title="Delete">
        <IconButton variant="contained" color="error">
          <Delete />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
export default DeleteButton;
