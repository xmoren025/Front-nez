"use client";

import React from "react";
import { useState, useEffect } from "react";

import Image from "next/image";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";

//icons
import { Email, Lock, Circle } from "@mui/icons-material";

export default function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setUserData({ ...userData, [name]: value });
  };

  // Validaciones y demás
  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.password.length < 8) {
      alert("La contraseña debe contener 8 caracteres o más.");
    }

    if (!userData.password) {
      alert("Complete el campo de conttraseña");
    }
  };

  useEffect(() => {
    console.log(userData);
  }, [userData]);

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
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            width: 400,
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            border: "1px solid #ddd",
            borderRadius: 3,
            backgroundColor: "#fff",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
          }}
        >
          <Typography
            variant="h6"
            sx={{ color: "text.primary", mb: 1, fontWeight: 600 }}
          >
            Sign in
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Sign in to start your session
          </Typography>
          <Divider sx={{ width: "100%", mb: 2 }} />

          <TextField
            required
            label="Email"
            name="email"
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              ),
            }}
            variant="standard"
            fullWidth
          />

          <TextField
            required
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
            }}
            variant="standard"
            fullWidth
          />

          <Button
            variant="contained"
            type="submit"
            href="/main-page"
            fullWidth
            sx={{ mt: 2 }}
          >
            Log in
          </Button>

          <Link
            href="/../auth/forgot-password"
            underline="hover"
            sx={{ mt: 1 }}
          >
            I forgot my password
          </Link>

          <Link href="/../auth/register-user" underline="hover">
            Register a new user
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
}
