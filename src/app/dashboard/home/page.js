"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

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

function HomePage() {
  return (
    <Box>
      <NavBar />
      <Box className="contentSpaceHome">
        <Typography variant="h4" className="titleHome">
          Welcome to Nez system !
        </Typography>
        <Typography variant="h6" className="subtitle">
          subtitle & instructions
        </Typography>

        <Button variant="contained" className="submitButton" href="/../dashboard/create-puzzle">
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
        </Box>
        <Typography variant="h6" className="subtitle">
          text description
        </Typography>
      </Box>
    </Box>
  );
}

export default ProtectedRoute(HomePage); 