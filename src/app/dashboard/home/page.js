"use client";
import React from "react";
import NavBar from "@/components/navBar";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

// Icons
import { Fitbit } from "@mui/icons-material";
import CreateButton from "@/components/buttons/createButton";

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
