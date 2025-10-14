"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

import InputAdornment from "@mui/material/InputAdornment";

//icons
import Email from "@mui/icons-material/Email";
import Lock from "@mui/icons-material/Lock";

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
    <div className="login-page">

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: 400,
          mx: "auto",
          mt: 8,
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1.5,
          border: "1px solid #ccc",
          borderRadius: 2,
          backgroundColor: "#fff",
        }}
      >
        <Image
          src="/logos/nez2-logo-512.png"
          alt="Nez logo"
          width={300}
          height={200}
        />
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Sign in to start your sesion
        </Typography>
        <Divider />
        <TextField
          required
          id="input-with-icon-textfield"
          label="Email"
          name="email"
          onChange={handleChange}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              ),
            },
          }}
          variant="standard"
        />
        <TextField
          required
          id="input-with-icon-textfield"
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
          onChange={handleChange}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
            },
          }}
          variant="standard"
        />

        <Button variant="contained" type="Submit" href="/main-page">
          Log in
        </Button>

        <Link href="/../auth/forgot-password" underline="hover">
          {"I forgot my password"}
        </Link>

        <Link href="/../auth/register-user" underline="hover">
          {"Register a new user"}
        </Link>
      </Box>
    </div>
  );
}

