"use client";

// material
import {Box, Typography} from "@mui/material";

// component
import InfoTable from "@/components/infoTable";
import NavBar from "@/components/navBar";

// style
import "@/styles/globals.css";

const columns = [
  { id: "cookstoveNo", label: "ID" },
  { id: "buyerName", label: "Name" },
  { id: "date", label: "Creation date" },
  { id: "actions", label: "Actions" },
];

const data = [
  { id: 1, cookstoveNo: "0012", buyerName: "John Doe", date: "06/11/2025" },
  { id: 2, cookstoveNo: "0013", buyerName: "Olive Yew", date: "06/11/2025" },
  { id: 3, cookstoveNo: "0014", buyerName: "Peg Legie", date: "06/11/2025" },
];
export default function Catalogs() {
  return (
    <Box>
      <NavBar />
      <Box>
        <Typography className="title" variant="h4" gutterBottom paddingTop={5}>
          My catalogs
        </Typography>
        <InfoTable title="Catalogs" columns={columns} data={data} />
      </Box>
    </Box>
  );
}
