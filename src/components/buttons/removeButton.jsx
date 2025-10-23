"use client";

import React from "react";
import RemoveShoppingCart from "@mui/icons-material/RemoveShoppingCart";
import { Box, IconButton, Tooltip } from "@mui/material";

function RemoveButton() {
  return (
    <Box>
      <Tooltip title="Remove">
        <IconButton variant="contained">
          <RemoveShoppingCart />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
export default RemoveButton;
