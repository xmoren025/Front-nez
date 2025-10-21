"use client";

import React from "react";
import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import AddCircle from "@mui/icons-material/AddCircle";

function CreateButton() {
  return (
    <Box>
      <IconButton variant="contained">
        <AddCircle/>
      </IconButton>
    </Box>
  );
}
export default CreateButton;