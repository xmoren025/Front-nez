"use client";

import React from "react";

// material
import { Box, Typography } from "@mui/material";

// component
import DragNDropElement from "./dragNDropElement";

// moar
import { Droppable, Draggable } from "@hello-pangea/dnd";

const Workspace = ({ workspacePieces }) => {
  return (
    <Droppable droppableId="workspace">
      {(provided) => (
        <Box
          ref={provided.innerRef}
          {...provided.droppableProps}
          sx={{
            bgcolor: "#fff",
            border: "1px solid #ccc",
            borderRadius: 2,
            height: "100%",
            minHeight: 300,
            overflowY: "auto",
            p: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent:
              workspacePieces.length === 0 ? "center" : "flex-start",
          }}
        >
          {workspacePieces.map((piece, index) => (
            <Draggable
              key={piece.uid}
              draggableId={piece.uid.toString()}
              index={index}
            >
              {(provided) => (
                <Box
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  sx={{ mb: 1, width: "100%", maxWidth: 400 }}
                >
                  <DragNDropElement piece={piece} />
                </Box>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </Box>
      )}
    </Droppable>
  );
};

export default Workspace;
