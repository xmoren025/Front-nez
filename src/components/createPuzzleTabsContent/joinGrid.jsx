// joinGrid.jsx
"use client";

// React
import { useState } from "react";

// material
import { Box } from "@mui/material";

// drag & drop
import { DragDropContext } from "@hello-pangea/dnd";

// components
import Workspace from "../dragDrop/workspace";
import DragNDropList from "../dragDrop/dragNDropList";

// style
import styles from "./TabsContentGrids.module.css";
import ClearButton from "../buttons/clearButton";
import SaveButton from "../buttons/saveButton";

function JoinGrid() {
  const availablePieces = [
    { id: 1, name: "Pieza A" },
    { id: 2, name: "Pieza B" },
    { id: 3, name: "Pieza C" },
  ];

  // piezas dentro del workspace
  const [workspacePieces, setWorkspacePieces] = useState([]);

  // manejar arrastre final
  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;

    // arrastrar una pieza desde la lista hacia el workspace
    if (
      source.droppableId === "pieces" &&
      destination.droppableId === "workspace"
    ) {
      const piece = availablePieces.find(
        (p) => p.id.toString() === draggableId
      );

      if (!piece) return;

      const newPiece = {
        ...piece,
        uid: Date.now() + Math.random(),
      };

      setWorkspacePieces((prev) => [...prev, newPiece]);
      return;
    }

    // mover dentro del workspace
    if (
      source.droppableId === "workspace" &&
      destination.droppableId === "workspace"
    ) {
      const items = Array.from(workspacePieces);
      const [moved] = items.splice(source.index, 1);
      items.splice(destination.index, 0, moved);
      setWorkspacePieces(items);
      return;
    }
  };

  return (
    <Box>
      <Box className={styles.joinContent}>
        <DragDropContext onDragEnd={onDragEnd}>
          {/* Lista de piezas */}
          <Box sx={{ mb: 3 }}>
            <DragNDropList pieces={availablePieces} />
          </Box>

          {/* Workspace */}
          <Workspace workspacePieces={workspacePieces} />
        </DragDropContext>
        <Box className={styles.joinBttnsContainer}>
          {" "}
          <SaveButton />
          <ClearButton />
        </Box>
      </Box>
    </Box>
  );
}

export default JoinGrid;
