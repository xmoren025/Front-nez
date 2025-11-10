"use client";

// material
import { Box, Stack, Typography } from "@mui/material";

// icon
import {
  PlayCircle,
  RocketLaunch,
  StopCircle,
  Visibility,
} from "@mui/icons-material";

// component
import NavBar from "@/components/navBar";
import ControlButton from "@/components/buttons/controlButton";
import CustomTabsBoard from "@/components/customTabsBoard";

// style
import "@/styles/globals.css";
import PuzzleRepresentation from "@/components/puzzleRepresentation";

export default function Puzzle() {
  const tabs = [
    { label: "Puzzle representation", content: <PuzzleRepresentation/>},
  ];
  return (
    <Box>
      <NavBar />
      <Box className="contentSpace">
        <Typography className="title" variant="h4" gutterBottom paddingTop={5}>
          Puzzle name
        </Typography>
        <Stack direction="row" spacing={5}>
          <ControlButton
            text="Execute"
            icon={<PlayCircle />}
            onClick={() => alert("Guardado")}
            color="success"
            sx={{ minWidth: 180 }}
          />
          <ControlButton
            text="Deploy"
            icon={<RocketLaunch />}
            onClick={() => alert("Guardado")}
            color="success"
            sx={{ minWidth: 180 }}
          />
          <ControlButton
            text="Stop puzzle"
            icon={<StopCircle />}
            onClick={() => alert("Guardado")}
            color="success"
            sx={{ minWidth: 180 }}
          />

          <ControlButton
            text="See results"
            icon={<Visibility />}
            onClick={() => alert("Guardado")}
            color="success"
            sx={{ minWidth: 180 }}
          />
        </Stack>
        <CustomTabsBoard items={tabs} />
    
      </Box>
    </Box>
  );
}
