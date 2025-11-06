"use client"

import React from "react";
import CustomTabsBoard from "../customTabsBoard"; 

function Board() {
  const tabs = [
    { label: "1", content: "Contenido del Tab 1" },
    { label: "2", content: "Contenido del Tab 2" },
    { label: "3", content: "Contenido del Tab 3" },
    { label: "4", content: "Contenido del Tab 4" },
  ];

  return <CustomTabsBoard items={tabs} />;
}

export default Board;