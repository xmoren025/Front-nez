"use client";

// material
import { Box, Typography } from "@mui/material";

// icon

//component
import Gallery from "@/components/gallery";
import InfoTable from "@/components/infoTable";
import CustomTabsBoard from "@/components/customTabsBoard";
import NavBar from "@/components/navBar";
import EditButton from "@/components/buttons/editButton";
import DeleteButton from "@/components/buttons/deleteButton";
import ActionButton from "@/components/buttons/actionButton";

// style
import "@/styles/globals.css";

const tabs = [
  { label: "Pieces", content: "Contenido del Tab pieces" },
  { label: "Requirements", content: "Contenido del Tab requirements" },
  { label: "Data", content: "Contenido del Tab data" },
  {
    label: "Configuration file",
    content: "Contenido del Tab configuration file",
  },
];

const myImages = [
  { img: "/logos/nez2-logo-192.png", title: "image 1" },
  { img: "/logos/nez2-logo-192.png", title: "image 2" },
  { img: "/logos/nez2-logo-192.png", title: "image 3" },
  { img: "/logos/nez2-logo-192.png", title: "image 4" },
];

export default function PuzzleInformation() {
  return (
    <Box>
      <NavBar />
      <Box className="contentSpace">
        <Typography className="title" variant="h4" gutterBottom paddingTop={5}>
          Puzzle name information
        </Typography>

        <Typography className="subtitle" variant="h5" gutterBottom paddingTop={5}>
          Puzzle name information
        </Typography>
        <Typography className="subtitle" variant="body2">
          Puzzle name information esplanation
        </Typography>
        <CustomTabsBoard items={tabs} />
        <Typography className="subtitle" variant="h5" gutterBottom paddingTop={5}>
          Puzzle name information
        </Typography>
        <Typography className="subtitle" variant="body2">
          Puzzle name information esplanation
        </Typography>
        <Gallery images={myImages} cols={4} rowHeight={200}/>
        <Typography className="subtitle" variant="h5" gutterBottom paddingTop={5}>
          Puzzle name information
        </Typography>
        <Typography className="subtitle" variant="body2">
          Puzzle name information esplanation
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
                sx={{ borderRadius: 1 }}
              />
            </>
          )}
        />
      </Box>
    </Box>
  );
}
