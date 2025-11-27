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
import SaveServiceModal from "../modals/saveServiceModal";

function JoinGrid() {
  const availablePieces = [
  { id: 1, name: "RGB", color: "#e74c3c" },  
  { id: 2, name: "2", color: "#f39c12" },  
  { id: 3, name: "3", color: "#27ae60" },   
  { id: 4, name: "4", color: "#16a085" },  
  { id: 5, name: "5", color: "#2980b9" },   
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

  const clearWorkspace = () => {
    setWorkspacePieces([]);
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
          <SaveServiceModal />
          <ClearButton onClear={clearWorkspace}/>
        </Box>
      </Box>
    </Box>
  );
}

export default JoinGrid;
