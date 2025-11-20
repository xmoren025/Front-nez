"use client";

// material
import { Box } from "@mui/material";
// icon

// component
import EditButton from "./buttons/editButton";
import DeleteButton from "./buttons/deleteButton";
import ActionButton from "./buttons/actionButton";

// style

// moar
import Image from "next/image";

function PuzzleRepresentation() {
  return (
    <Box>
      <Image
        src="/logos/nez2-logo-512.png"
        alt="Nez Logo"
        width={165}
        height={50}
        priority
      />
    </Box>
  );
}

export default PuzzleRepresentation;
