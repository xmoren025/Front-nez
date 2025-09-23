"use client";

import React from "react";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Lock from "@mui/icons-material/Lock";
import Email from "@mui/icons-material/Email";
import InputAdornment from "@mui/material/InputAdornment";

function Test() {
  return (
    <div className="login-page">
      <Box
        component="form"
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
          src="/images/logos/nez2-logo-512.png"
          alt="Nez logo"
          width={300}
          height={200}
        />
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Sign in to start your sesion
        </Typography>
        <Divider />
        <TextField
          id="input-with-icon-textfield"
          label="Email"
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
          id="input-with-icon-textfield"
          label="Password"
          type="password"
          autoComplete="current-password"
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

        <Button variant="contained">Log in</Button>

        <Link href="/forget-password" underline="hover">
          {"I forgot my password"}
        </Link>

        <Link href="/register" underline="hover">
          {"Register a new user"}
        </Link>
      </Box>
    </div>
  );
}

export default Test;
