
"use client";
import React from "react";

import NavBar from "@/components/navBar";
import StepperElement from "@/components/stepperElement";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
export default function ChoosePieces() {

  return (
    <Box>
      <NavBar />
      <Box sx={{ paddingLeft: 35 }}>
        <Typography variant="h4" gutterBottom paddingTop={5}>
          Choose pieces
        </Typography>
        <StepperElement/>
      </Box>
    </Box>
  );
}
