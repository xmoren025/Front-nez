"use client";
import React from "react";

import NavBar from "@/components/navBar";
import StepperElement from "@/components/stepperElement";
import Typography from "@mui/material/Typography";
import CustomTabsBoard from "@/components/boards/customTabsBoard"; 
import Box from "@mui/material/Box";
import SelectedPiecesCart from "@/components/selectedPiecesCart";

export default function ChoosePieces() {

  const tabs = [
    { label: "Tab 1", content: "Contenido del Tab 1" },
  ];

  return (
    <Box>
      <NavBar />
      <Box sx={{ paddingLeft: 35 }}>
        <Typography variant="h4" gutterBottom paddingTop={5}>
          Choose pieces
        </Typography>
        <StepperElement/>
        <SelectedPiecesCart/>
        <CustomTabsBoard items={tabs} />
      </Box>
    </Box>
  );
}
