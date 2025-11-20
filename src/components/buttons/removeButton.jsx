"use client";

import React from "react";

// material 
import { Box, IconButton, Tooltip } from "@mui/material";

// icon
import RemoveShoppingCart from "@mui/icons-material/RemoveShoppingCart";

function RemoveButton() {
  return (
    <Box paddingLeft={1}>
      <Tooltip title="Remove">
        <IconButton variant="contained">
          <RemoveShoppingCart fontSize="small"/>
        </IconButton>
      </Tooltip>
    </Box>
  );
}
export default RemoveButton;
