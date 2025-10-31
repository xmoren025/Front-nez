"use client"
import React from "react";
import InfoTable from "@/components/infoTable";
import {Box} from "@mui/material"
import NavBar from "@/components/navBar";


export default function Results(){
    return(
        <Box>
            <NavBar/>
            <InfoTable/>
        </Box>
    );
}