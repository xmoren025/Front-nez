"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

// material
import { Box, Typography} from "@mui/material";

// icon

// component
import InfoTable from "@/components/infoTable";
import NavBar from "@/components/navBar";
import EditButton from "@/components/buttons/editButton";
import DeleteButton from "@/components/buttons/deleteButton";
import ActionButton from "@/components/buttons/actionButton";

// style
import "@/styles/globals.css";


function Results() {
  return (
    <Box>
      <NavBar />

      <Box className="contentSpace">
        <Typography className="title" variant="h4" gutterBottom paddingTop={5}>
          Puzzle name results
        </Typography>
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
                onClick={""}
                sx={{ borderRadius: 1 }}
              />
            </>
          )}
        />
      </Box>
    </Box>
  );
}

export default ProtectedRoute(Results);