"use client";
import React from "react";
import NavBar from "@/components/navBar";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


export default function HomePage() {
  return (
    <Box>
      <NavBar/>
      <Box sx={{ paddingLeft: 35}}>
        <Typography variant="h3" gutterBottom align="center" paddingTop={15}>
          title
        </Typography>
        <Typography variant="h6" gutterBottom align="center">
          subtitle
        </Typography>

        <Button
            variant="contained"
            type="submit"
            href="/../dashboard/create-puzzle/choose-pieces"
            Width="310"
            sx={{ mt: 2 }}
          >
            Log in
          </Button>
      </Box>
    </Box>
  );
}
