"use client"
import React from "react";
import InfoTable from "@/components/infoTable";
import {Box} from "@mui/material"
import NavBar from "@/components/navBar";

import "@/styles/globals.css";

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

export default function Results(){
    return(
        <Box>
            <NavBar/>
       <InfoTable title="Sales Baseline Form" columns={columns} data={data} />
        </Box>
    );
}