"use client";

import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

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
