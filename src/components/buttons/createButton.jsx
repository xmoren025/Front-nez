"use client";

import React from "react";

// material
import {Box, Button} from "@mui/material"

// icon
import AddCircle from "@mui/icons-material/AddCircle";


function CreateButton({onClick}) {
  return (
    <Box>
      <Button variant="text" size="large" startIcon={<AddCircle/>} onClick={onClick} >
        Create
      </Button>
    </Box>
  );
}
export default CreateButton;