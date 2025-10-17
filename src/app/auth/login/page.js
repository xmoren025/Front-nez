"use client";

import React from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
//icons
import Circle from "@mui/icons-material/Circle";
import LoginForm from "@/components/forms/loginForm";

export default function Login() {
  

  return (
    <Grid
      container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Columna izquierda */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundColor: "#ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
          borderRight: "1px solid #ddd",
        }}
      >
        <Image
          src="/logos/nez2-logo-512.png"
          alt="Nez logo"
          width={250}
          height={160}
          style={{ marginBottom: "2rem" }}
        />

        <List sx={{ width: "100%", maxWidth: 360 }}>
          {[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          ].map((text, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <Circle sx={{ fontSize: 10, color: "grey.600" }} />
              </ListItemIcon>
              <ListItemText
                primary={text}
                primaryTypographyProps={{ color: "text.secondary" }}
              />
            </ListItem>
          ))}
        </List>
      </Grid>

      {/* Columna derecha (Formulario) */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fafafa",
        }}
      >
        <LoginForm />
      </Grid>
    </Grid>
  );
}
