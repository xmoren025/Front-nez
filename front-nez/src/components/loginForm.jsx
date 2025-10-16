"use client"
import React from "react";

import { useState, useEffect } from "react";

import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";

import { Email, Lock} from "@mui/icons-material";

function LoginForm(){

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
    
    return(
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
            href="/../dashboard/home"
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
    );
}

export default LoginForm;