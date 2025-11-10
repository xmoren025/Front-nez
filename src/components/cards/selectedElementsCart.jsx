"use client"

import React from "react";

// material
import {
  Box,
  Divider,
  Typography,
} from "@mui/material";

// component
import RemoveButton from "../buttons/removeButton";

function SelectedElementsCart(){
    return(
        <Box>
            <Typography variant="h6" gutterBottom>Selected pieces</Typography>
            <Divider/>
            <Box>
                <Typography variant ></Typography>
                <RemoveButton/>
            </Box>
        </Box>
    );
}

export default SelectedElementsCart;