"use client";

import Gallery from "@/components/gallery";
import InfoTable from "@/components/infoTable";
import CustomTabsBoard from "@/components/boards/customTabsBoard";
import {Box} from "@mui/material"
import NavBar from "@/components/navBar";

export default function PuzzleInformation() {
  const tabs = [
    { label: "1", content: "Contenido del Tab 1" },
    { label: "2", content: "Contenido del Tab 2" },
    { label: "3", content: "Contenido del Tab 3" },
    { label: "4", content: "Contenido del Tab 4" },
  ];
  return (
    <Box>
      <NavBar/>
      <CustomTabsBoard items={tabs} />
      <Gallery/>
      <InfoTable />
    </Box>
  );
}
