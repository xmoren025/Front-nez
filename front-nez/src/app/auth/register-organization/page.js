"use client";

import React from "react";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";

//icons
import Business from "@mui/icons-material/Business";
import Abc from "@mui/icons-material/Abc";


export default function RegisterOrganization() {
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
        <Typography variant="h5" sx={{ color: "text.primary" }}>
          Register organization
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Complete the form to register your organization 
        </Typography>
        <Divider />
        <TextField
          required
          id="input-with-icon-textfield"
          label="Organization name"
          name="organization-name"
          onChange={handleChange}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Business/>
                </InputAdornment>
              ),
            },
          }}
          variant="standard"
        />
        <TextField
          id="input-with-icon-textfield"
          label="Acronym"
          name="acronym"
          onChange={handleChange}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Abc />
                </InputAdornment>
              ),
            },
          }}
          variant="standard"
        />

        <Button variant="contained" type="Submit" href="/main-page">
          Register
        </Button>

      </Box>
    </div>
  );
}