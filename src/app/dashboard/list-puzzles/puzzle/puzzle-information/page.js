"use client";

import Gallery from "@/components/gallery";
import InfoTable from "@/components/infoTable";
import CustomTabsBoard from "@/components/boards/customTabsBoard";
import {Box} from "@mui/material"
import NavBar from "@/components/navBar";


const columns = [
    { id: "cookstoveNo", label: "Cookstove no." },
    { id: "buyerName", label: "Buyer Name" },
    { id: "status", label: "Status" },
    { id: "actions", label: "Actions" },
  ];

  const data = [
    { id: 1, cookstoveNo: "0012", buyerName: "John Doe", status: "Sent" },
    { id: 2, cookstoveNo: "0013", buyerName: "Olive Yew", status: "Pending" },
    { id: 3, cookstoveNo: "0014", buyerName: "Peg Legie", status: "Sent" },
    { id: 4, cookstoveNo: "0015", buyerName: "Austin Yew", status: "Sent" },
  ];

  const tabs = [
    { label: "1", content: "Contenido del Tab 1" },
    { label: "2", content: "Contenido del Tab 2" },
    { label: "3", content: "Contenido del Tab 3" },
    { label: "4", content: "Contenido del Tab 4" },
  ];
  
export default function PuzzleInformation() {
  
  return (
    <Box>
      <NavBar/>
      <CustomTabsBoard items={tabs} />
      <Gallery/>
       <InfoTable title="Sales Baseline Form" columns={columns} data={data} />
    </Box>
  );
}
