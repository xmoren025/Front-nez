"use client";

import React from "react";

// material
import { Box, IconButton, Tooltip} from "@mui/material";

// icon
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";

function AddButton({onClick}) {
  return (
    <Box>
      <Tooltip title="Add">
        <IconButton variant="contained" onClick={onClick}>
          <AddShoppingCart color="primary"/>
        </IconButton>
      </Tooltip>
    </Box>
  );
}
export default AddButton;
