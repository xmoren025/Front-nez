"use client";

import React from "react";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import AddCircle from "@mui/icons-material/AddCircle";


function CreateButton({onClick}) {
  return (
    <Box>
      <Button variant="text" startIcon={<AddCircle />} onClick={onClick}>
        Create
      </Button>
    </Box>
  );
}
export default CreateButton;