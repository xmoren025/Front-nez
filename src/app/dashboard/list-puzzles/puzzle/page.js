"use client";

// material
import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

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
import PuzzleRepresentation from "@/components/createPuzzleTabsContent/puzzleRepresentation";

export default function Puzzle() {
  const tabs = [
    { label: "Puzzle representation", content: <PuzzleRepresentation /> },
  ];

  const router = useRouter();
  return (
    <Box>
      <NavBar />
      <Box className="contentSpace">
        <Typography className="title" variant="h4" gutterBottom paddingTop={5}>
          Puzzle name
        </Typography>
        <Stack direction="row" spacing={5} className="buttonStack">
          <ControlButton
            text="Execute"
            icon={<PlayCircle />}
            onClick={() => alert("Executed")}
            sx={{
              backgroundColor: "mediumSeaGreen",
              "&:hover": {
                backgroundColor: "seaGreen",
              },
            }}
          />

          <ControlButton
            text="Stop puzzle"
            icon={<StopCircle />}
            onClick={() => alert("stopped")}
            sx={{
              backgroundColor: "#eb4e43ff",
              "&:hover": {
                backgroundColor: "#d43636ff",
              },
            }}
          />

          <ControlButton
            text="Deploy"
            icon={<RocketLaunch />}
            onClick={() => alert("Employed")}
            color="primary"
          />

          <ControlButton
            text="See results"
            icon={<Visibility />}
            onClick={() =>
              router.push("/dashboard/list-puzzles/puzzle/results")
            }
            sx={{
              backgroundColor: "lightSeaGreen",
              "&:hover": {
                backgroundColor: "darkCyan",
              },
            }}
          />
        </Stack>
        <CustomTabsBoard items={tabs} />
      </Box>
    </Box>
  );
}
