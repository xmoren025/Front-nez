"use client";

import React from "react";
import Button from '@mui/material/Button';

function BackButton({ onClick, disabled = false, variant = "text" }) {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      sx={{
        borderRadius: '8px',
        textTransform: 'none',
        fontWeight: 500,
        px: 3,
      }}
    >
      Back
    </Button>
  );
}

export default BackButton;