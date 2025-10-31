
"use client";
import React from "react";

import NavBar from "@/components/navBar";
import StepperElement from "@/components/stepperElement";
import { Box, Typography } from "@mui/material";

export default function ChoosePieces() {

  return (
    <Box>
      <NavBar />
      <Box>
        <Typography className= "title" variant="h4" gutterBottom paddingTop={5}>
          Create a Puzzle
        </Typography>
        <StepperElement/>
      </Box>
    </Box>
  );
}
