"use client";

import React from "react";
import Button from '@mui/material/Button';

function NextButton({ onClick, disabled = false, variant = "text", isLastStep = false}) {
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
      Next
    </Button>
  );
}

export default NextButton;