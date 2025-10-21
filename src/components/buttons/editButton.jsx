"use client";

import React from "react";
import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import Edit from "@mui/icons-material/Edit";

function EditButton() {
  return (
    <Box>
      <IconButton variant="contained">
        <Edit/>
      </IconButton>
    </Box>
  );
}
export default EditButton;