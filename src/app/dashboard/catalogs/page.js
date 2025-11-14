"use client";

// material
import { Box, Typography } from "@mui/material";

// component
import InfoTable from "@/components/infoTable";
import NavBar from "@/components/navBar";
import SearchBar from "@/components/searchbar";
import EditButton from "@/components/buttons/editButton";
import DeleteButton from "@/components/buttons/deleteButton";
import ActionButton from "@/components/buttons/actionButton";

// style
import "@/styles/globals.css";

export default function Catalogs() {
  return (
    <Box>
      <NavBar />
      <Box className="contentSpace">
        <Typography className="title" variant="h4" gutterBottom paddingTop={5}>
          My catalogs
        </Typography>
        <SearchBar />
        <InfoTable
          title="Usuarios"
          columns={[
            { id: "id", label: "ID" },
            { id: "nombre", label: "Nombre" },
            { id: "email", label: "Correo" },
            { id: "actions", label: "Acciones" },
          ]}
          data={[
            { id: 1, nombre: "Juan", email: "juan@mail.com" },
            { id: 2, nombre: "Ana", email: "ana@mail.com" },
          ]}
          renderActions={(row) => (
            <>
              <EditButton onClick={() => console.log("Editar", row)} />
              <DeleteButton onClick={() => console.log("Eliminar", row)} />
              <ActionButton
                text="Share"
                variant="contained"
                sx={{ borderRadius: 1 }}
              />
            </>
          )}
        />
      </Box>
    </Box>
  );
}
