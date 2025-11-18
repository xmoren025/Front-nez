"use client";

import React from "react";

// material
import {Box, Button} from "@mui/material"

function ActionButton({
  text,
  variant = "contained",
  color = "primary",
  onClick,
  fullWidth = false,
  disabled = false,
  sx = {},
  ... props
}) {
  return (
    <Box>
      <Button
        variant={variant}
        color={color}
        onClick={onClick}
        fullWidth={fullWidth}
        disabled={disabled}
        sx={sx}
        {...props} 
      >
        {text}
      </Button>
    </Box>
  );
}

export default ActionButton;
