"use client";

// material
import { Box, Typography } from "@mui/material";

// icon

// component
import InfoTable from "@/components/infoTable";
import NavBar from "@/components/navBar";

// style
import "@/styles/globals.css";
import SearchBar from "@/components/searchbar";

const columns = [
  { id: "idNumber", label: "ID" },
  { id: "puzzleName", label: "Name" },
  { id: "date", label: "Created" },
  { id: "actions", label: "Actions" },
];

const data = [
  { id: 1, idNumber: "0012", puzzleName: "John Doe", date: "06/11/2025" },
  { id: 2, idNumber: "0013", puzzleName: "Olive Yew", date: "06/11/2025" },
  { id: 3, idNumber: "0014", puzzleName: "Peg Legie", date: "06/11/2025" },
  { id: 4, idNumber: "0015", puzzleName: "Austin Yew", date: "06/11/2025" },
];

export default function ListPuzzles() {
  return (
    <Box>
      <NavBar />
      <Box className="contentSpace">
        <Typography className="title" variant="h4" gutterBottom paddingTop={5}>
          My puzzles
        </Typography>
        <SearchBar/>
        <InfoTable title="Sales Baseline Form" columns={columns} data={data} />
      </Box>
    </Box>
  );
}
