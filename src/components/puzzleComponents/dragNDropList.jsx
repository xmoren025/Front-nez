"use client";

import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import DragNDropElement from "./dragNDropElement";

const DragNDropList = ({ pieces }) => {
  return (
    <Box sx={{ textAlign: "left" }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
        Piezas disponibles
      </Typography>
      <Typography variant="body2" sx={{ color: "gray", mb: 2 }}>
        Instructions here
      </Typography>

      <Droppable droppableId="pieces" direction="horizontal" isDropDisabled>
        {(provided) => (
          <Box
            ref={provided.innerRef}
            {...provided.droppableProps}
            sx={{
              display: "flex",
              flexWrap: "nowrap",
              overflowX: "auto",
              gap: 2,
              pb: 1,
              border: "1px solid #ccc",
              p: 2,
              borderRadius: 2
            }}
          >
            {pieces.map((piece, index) => (
              <Draggable
                key={piece.id}
                draggableId={piece.id.toString()}
                index={index}
              >
                {(provided) => (
                  <Box
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
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
    </Box>
  );
};

export default DragNDropList;

