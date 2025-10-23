"use client";

import React from "react";
import Edit from "@mui/icons-material/Edit";
import { Box, IconButton, Tooltip } from "@mui/material";

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
