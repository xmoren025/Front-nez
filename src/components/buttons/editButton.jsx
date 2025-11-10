"use client";

import React from "react";

// material
import { Box, IconButton, Tooltip } from "@mui/material";

// icon
import Edit from "@mui/icons-material/Edit";

function EditButton() {
  return (
    <Box>
      <Tooltip title="Edit">
        <IconButton variant="contained">
          <Edit />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
export default EditButton;
