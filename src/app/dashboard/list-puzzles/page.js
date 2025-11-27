"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

// material
import { Box, Typography } from "@mui/material";

// icon

// component
import InfoTable from "@/components/infoTable";
import NavBar from "@/components/navBar";
import SearchBar from "@/components/searchbar";
import EditButton from "@/components/buttons/editButton";
import DeleteButton from "@/components/buttons/deleteButton";
import ActionButton from "@/components/buttons/actionButton";

// style
import "@/styles/globals.css";

// moar 
import Link from "next/link";

function ListPuzzles() {
  return (
    <Box>
      <NavBar />
      <Box className="contentSpace">
        <Typography className="title" variant="h4" gutterBottom paddingTop={5}>
          My puzzles
        </Typography>
        <SearchBar />
        <InfoTable
          title="Usuarios"
          columns={[
            { id: "id", label: "ID" },
            { id: "nombre", label: "Nombre" },
            { id: "date", label: "Correo" },
            { id: "actions", label: "Acciones" },
          ]}
          data={[
            { id: 1, nombre: "Juan", date: "06/11/2025" },
            { id: 2, nombre: "Ana", date: "06/11/2025" },
          ]}
          renderActions={(row) => (
            <>
              <EditButton onClick={() => console.log("Editar", row)} />
              <DeleteButton onClick={() => console.log("Eliminar", row)} />
              <ActionButton
                text="See puzzle"
                variant="contained"
                component={Link}
                href="/../dashboard/list-puzzles/puzzle"
                sx={{ borderRadius: 1 }}
              />
            </>
          )}
        />
      </Box>
    </Box>
  );
}

export default ProtectedRoute(ListPuzzles);
