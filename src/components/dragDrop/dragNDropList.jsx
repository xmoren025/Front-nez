"use client";

import React from "react";

// material
import { Box, Typography } from "@mui/material";

// element 
import DragNDropElement from "./dragNDropElement";

// moar
import { Droppable, Draggable } from "@hello-pangea/dnd";

// style
import styles from "./DragNDrop.module.css";

const DragNDropList = ({ pieces }) => {
  return (
    <Box className={styles.listContainer}>
      <Typography variant="subtitle1" className={styles.title}>
        Piezas disponibles
      </Typography>

      <Typography variant="body2" className={styles.subtitle}>
        Instructions here
      </Typography>

      <Droppable droppableId="pieces" direction="horizontal" isDropDisabled>
        {(provided) => (
          <Box
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={styles.droppableArea}
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

