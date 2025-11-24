"use client";

// material
import { Box } from "@mui/material";

// component
import EditButton from "../buttons/editButton";
import DeleteButton from "../buttons/deleteButton";
import ActionButton from "../buttons/actionButton";

// style
import styles from "./TabsContentGrids.module.css";

// moar
import Image from "next/image";
import Link from "next/link";


function PuzzleRepresentation() {
  return (
    <Box className={styles.representationContent}>
      <Box className={styles.upBttnsContainer}>
        {" "}
        <EditButton />
        <DeleteButton />
      </Box>
      <Image
        src="/logos/nez2-logo-512.png"
        alt="Nez Logo"
        width={300}
        height={50}
        priority
      />
      <Box className={styles.bttnsContainer}>
        {" "}
        <ActionButton
          text="Details"
          variant="contained"
          component={Link}
          href="/../dashboard/list-puzzles/puzzle/puzzle-information"
          sx={{ borderRadius: 1 }}
        />
      </Box>
    </Box>
  );
}

export default PuzzleRepresentation;
