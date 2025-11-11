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
import PuzzleRepresentation from "@/components/puzzleRepresentation";
import { redirect } from "next/dist/server/api-utils";

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
            color="success"
          />
          <ControlButton
            text="Deploy"
            icon={<RocketLaunch />}
            onClick={() => alert("Employed")}
            color="success"
          />
          <ControlButton
            text="Stop puzzle"
            icon={<StopCircle />}
            onClick={() => alert("stopped")}
            color="success"
          />

          <ControlButton
            text="See results"
            icon={<Visibility />}
            onClick={() =>
             router.push("/dashboard/list-puzzles/puzzle/results")
            }
            color="success"
          />
        </Stack>
        <CustomTabsBoard items={tabs} />
      </Box>
    </Box>
  );
}
