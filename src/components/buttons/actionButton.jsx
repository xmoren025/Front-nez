"use client";

import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function ActionButton({
  text,
  variant = "contained",
  color = "primary",
  onClick,
  fullWidth = false,
  disabled = false,
  sx = {},
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
      >
        {text}
      </Button>
    </Box>
  );
}

export default ActionButton;
