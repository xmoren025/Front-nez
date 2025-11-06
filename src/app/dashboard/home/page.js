"use client";

import NavBar from "@/components/navBar";
import {
  Box,
  Typography,
  Button,
  Stack,
  CircularProgress,
  Paper,
  IconButton,
} from "@mui/material";
import { Edit, Delete, Fitbit } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { DragDropContext } from "@hello-pangea/dnd";

import DragNDropList from "@/components/puzzleComponents/dragNDropList";
import Workspace from "@/components/puzzleComponents/workspace";

export default function HomePage() {
  const [pieces, setPieces] = useState([]);
  const [workspacePieces, setWorkspacePieces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    async function fetchPieces() {
      const simulatedResponse = await new Promise((resolve) =>
        setTimeout(
          () =>
            resolve([
              { id: "anon", name: "Anonimización" },
              { id: "torgb", name: "ToRGB" },
              { id: "detector", name: "DetectorPulmon" },
            ]),
          300
        )
      );
      setPieces(simulatedResponse);
      setLoading(false);
    }
    fetchPieces();
  }, []);

  const handleDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (source.droppableId === "pieces" && destination.droppableId === "workspace") {
      const draggedPiece = pieces[source.index];
      const uid = crypto.randomUUID ? crypto.randomUUID() : String(Date.now());
      setWorkspacePieces((prev) => [...prev, { ...draggedPiece, uid }]);
    }

    if (source.droppableId === "workspace" && destination.droppableId === "workspace") {
      const updated = Array.from(workspacePieces);
      const [moved] = updated.splice(source.index, 1);
      updated.splice(destination.index, 0, moved);
      setWorkspacePieces(updated);
    }
  };

  if (!mounted) return null;
  if (loading)
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );

  return (
    <Box>
      <NavBar />
      <Box sx={{ paddingLeft: 35 }} align="center">
        <Typography variant="h3" gutterBottom paddingTop={10}>
          title
        </Typography>
        <Typography variant="h6" gutterBottom>
          subtitle
        </Typography>

        <Button
          variant="contained"
          href="/../dashboard/create-puzzle"
          sx={{ mt: 2, width: 310 }}
        >
          Get started
        </Button>

        <Box sx={{ mt: 4 }}>
          <Stack direction="row" spacing={5} justifyContent="center">
            <Fitbit fontSize="large" />
            <Fitbit fontSize="large" />
            <Fitbit fontSize="large" />
            <Fitbit fontSize="large" />
          </Stack>
          <Typography variant="h6" gutterBottom>
            text description
          </Typography>
        </Box>

        {/* 🔲 Contenedor principal de workspace + piezas */}
        <DragDropContext onDragEnd={handleDragEnd}>
          <Paper
            elevation={3}
            sx={{
              width: "90%",
              maxWidth: 900,
              mx: "auto",
              my: 5,
              borderRadius: 3,
              overflow: "hidden",
            }}
          >
            {/* 🧠 Workspace visual */}
            <Box
              sx={{
                bgcolor: "#fafafa",
                height: 350,
                borderBottom: "1px solid #ddd",
                p: 2,
                position: "relative",
              }}
            >
              {/* Botones edit/delete */}
              <Box sx={{ position: "absolute", top: 8, right: 8 }}>
                <IconButton size="small" color="primary">
                  <Edit fontSize="small" />
                </IconButton>
                <IconButton size="small" color="error">
                  <Delete fontSize="small" />
                </IconButton>
              </Box>

              {/* Área del workspace (dropeable real) */}
              <Workspace workspacePieces={workspacePieces} />
            </Box>

            {/* 🧩 Piezas disponibles */}
            <Box sx={{ bgcolor: "#f5f5f5", p: 2 }}>
              <DragNDropList pieces={pieces} />
            </Box>
          </Paper>
        </DragDropContext>
      </Box>
    </Box>
  );
}
