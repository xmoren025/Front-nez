"use client";

// material
import { Box, Typography } from "@mui/material";

// component
import NavBar from "@/components/navBar";
import StepperElement from "@/components/stepperElement";

// style
import "@/styles/globals.css";

export default function ChoosePieces() {
  return (
    <Box>
      <NavBar />
      <Box className="contentSpace">
        <Typography className="title" variant="h4">
          Create a Puzzle
        </Typography>
        <StepperElement />

        
      </Box>
    </Box>
  );
}
