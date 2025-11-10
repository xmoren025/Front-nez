"use client";

import React from "react";

// material
import {Box, Button, Typography, CircularProgress} from "@mui/material"

function ControlButton({
  text,
  icon,
  onClick,
  loading = false,
  disabled = false,
  variant = "contained",
  color = "primary",
  fullWidth = false,
  sx = {},
}) {
  return (
    <Box>
      <Button
        variant={variant}
        color={color}
        onClick={onClick}
        fullWidth={fullWidth}
        disabled={disabled || loading}
        startIcon={!loading ? icon : null}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textTransform: "none",
          borderRadius: 2,
          gap: 1,
          p: 3,
        }}
      >
        {loading ? (
          <CircularProgress size={25} color="inherit" />
        ) : (
          <Typography>{text}</Typography>
        )}
      </Button>
    </Box>
  );
}

// EXAMPLE
{/* <ControlButton
  text="Guardar"
  icon={<SaveIcon />}
  onClick={() => alert("Guardado")}
  color="success"
  sx={{ minWidth: 180 }}
/>; */}

export default ControlButton;
