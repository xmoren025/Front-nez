"use client";

import React from "react";

// material
import {Box, Button} from "@mui/material"

function CancelButton({ onClick }) {
  return (
    <Box>
      <Button
        variant="contained"
        onClick={onClick}
        sx={{
          backgroundColor: "#81858fff",
          "&:hover": { backgroundColor: "#5e646dff" },
        }}
      >
        Cancel
      </Button>
    </Box>
  );
}
export default CancelButton;
