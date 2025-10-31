"use client";
import InfoTable from "@/components/infoTable";
import React from "react";
import { Box } from "@mui/material";
import NavBar from "@/components/navBar";


export default function ListPuzzles() {
  return (
    <Box>
      <NavBar/>
      <InfoTable/>
    </Box>
  );
}
