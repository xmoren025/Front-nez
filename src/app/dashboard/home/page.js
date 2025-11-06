"use client";

import React from "react";

// material
import { Box, Typography, Button, Stack } from "@mui/material";

// icon
import {
  Extension,
  Checklist,
  Storage,
  AppRegistration,
  TrendingFlat,
} from "@mui/icons-material";

// component
import NavBar from "@/components/navBar";

// style
import "@/styles/globals.css";

export default function HomePage() {
  return (
    <Box>
      <NavBar />
      <Box className="contentSpace">
        <Typography variant="h4" className="title">
          Welcome to Nez system !
        </Typography>
        <Typography variant="h6" className="">
          subtitle & instructions
        </Typography>

        <Button variant="contained" href="/../dashboard/create-puzzle">
          Get started
        </Button>

        <Box>
          <Stack direction="row" spacing={5}>
            <Extension fontSize="large" />
            <TrendingFlat fontSize="large" />
            <Checklist fontSize="large" />
            <TrendingFlat fontSize="large" />
            <Storage fontSize="large" />
            <TrendingFlat fontSize="large" />
            <AppRegistration fontSize="large" />
          </Stack>
          <Typography variant="h6">text description</Typography>
        </Box>
      </Box>
    </Box>
  );
}
