"use client";

import React from "react";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";

//icons
import Email from "@mui/icons-material/Email";

export default function ForgotPassword() {
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
    <div className="forgot-password">
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
        <Typography variant="h5" sx={{ color: "text.primary" }}>
          Forgot your password?
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Please enter your email to reset the password
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

        <Button variant="contained" type="Submit" href="/main-page">
          Send Email
        </Button>

        <Link href="/../auth/login" underline="hover">
          {"< Back to login"}
        </Link>
      </Box>
    </div>
  );
}
