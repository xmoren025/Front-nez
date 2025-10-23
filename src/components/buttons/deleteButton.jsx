"use client";

import React from "react";
import Delete from "@mui/icons-material/Delete";
import { Box, IconButton, Tooltip } from "@mui/material";

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
