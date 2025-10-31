"use client"

import React from "react";
import InfoTable from "@/components/infoTable";
import Box from "@mui/material/Box";
import NavBar from "@/components/navBar";


export default function Catalogs(){
    return(
        <Box>
            <NavBar/>
            <InfoTable/>
        </Box>
    );
}