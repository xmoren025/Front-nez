"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Circle from "@mui/icons-material/Circle";
import dynamic from "next/dynamic";

const LoginForm = dynamic(() => import("@/components/forms/loginForm"), {
  ssr: false,
});

export default function Login() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const listItems = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  ];

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
      {/* columna izquierda */}
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
          priority
          style={{ marginBottom: "2rem" }}
        />

        <List sx={{ width: "100%", maxWidth: 360 }}>
          {listItems.map((text, index) => (
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

      {/* columna derecha */}
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
