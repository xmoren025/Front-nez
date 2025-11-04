"use client";
import React from "react";
import NavBar from "@/components/navBar";
import { Box, Typography, Button, Stack } from "@mui/material";

// Icons
import { Fitbit } from "@mui/icons-material";
import CatalogComponent from "@/components/puzzleComponents/catalogComponent";

export default function HomePage() {

  return (
    <Box>
      <NavBar />
      <Box sx={{ paddingLeft: 35 }} align="center">
        <Typography variant="h3" gutterBottom paddingTop={15}>
          title
        </Typography>
        <Typography variant="h6" gutterBottom>
          subtitle
        </Typography>

        <Button
          variant="contained"
          type="submit"
          href="/../dashboard/create-puzzle/choose-pieces"
          width="310"
          sx={{ mt: 2 }}
        >
          Get started
        </Button>

        <Box>
          <Stack direction="row" spacing={5}>
            <Fitbit fontSize="large" />
            <Fitbit fontSize="large" />
            <Fitbit fontSize="large" />
            <Fitbit fontSize="large" />
          </Stack>
          <Typography variant="h6" gutterBottom>
            text descrition
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
