"use client";

import React from "react";

// material
import { Box } from "@mui/material";

// component
import DragNDropElement from "./dragNDropElement";

// dnd
import { Droppable, Draggable } from "@hello-pangea/dnd";

// styles
import styles from "./Workspace.module.css";

const Workspace = ({ workspacePieces }) => {
  return (
    <Droppable droppableId="workspace">
      {(provided) => (
        <Box
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={styles.workspaceContainer}
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
                  className={styles.draggableItem}
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
