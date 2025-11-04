"use client";

import React from "react";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import { Box, IconButton, Tooltip} from "@mui/material";

function AddButton({onClick}) {
  return (
    <Box>
      <Tooltip title="Add">
        <IconButton variant="contained" onClick={onClick}>
          <AddShoppingCart />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
export default AddButton;
