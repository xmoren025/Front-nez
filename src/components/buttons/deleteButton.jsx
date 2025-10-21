"use client";

import React from "react";
import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import Delete from "@mui/icons-material/Delete";

function DeleteButton() {
  return (
    <Box>
      <IconButton variant="contained" color="error">
        <Delete/>
      </IconButton>
    </Box>
  );
}
export default DeleteButton;