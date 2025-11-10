"use client";

import React, { useState } from "react";

// material
import {
  Typography,
  Button,
  TextField,
  Divider,
  Box,
  InputAdornment,
} from "@mui/material";

// icon
import Lock from "@mui/icons-material/Lock";

// style
import styles from './Forms.module.css';


export default function ResetPasswordForm() {
  const [userData, setUserData] = useState({ password: "", confirmPassword: "" });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = ({ target: { name, value } }) => {
    setUserData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleBlur = ({ target: { name } }) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, userData[name]);
  };

  const validateField = (name, value) => {
    let error = "";

    if (name === "password") {
      if (!value) error = "Password is required";
      else if (value.length < 8) error = "Password must be at least 8 characters";
    }

    if (name === "confirmPassword") {
      if (!value) error = "Please confirm your password";
      else if (value !== userData.password) error = "Passwords do not match";
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
    return !error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ password: true, confirmPassword: true });

    const isFormValid = Object.keys(userData).every((key) =>
      validateField(key, userData[key])
    );

    if (isFormValid) {
      console.log("Password reset:", userData);
      // Aquí harías la llamada a tu API
    }
  };

  return (
    <Box className={styles.container}>
      <Box component="form" onSubmit={handleSubmit} className={styles.form}>
        <Typography variant="h4" className={styles.title}>
          Reset Your Password
        </Typography>

        <Typography variant="body1" className={styles.subtitle}>
          Please enter your new password below
        </Typography>

        <Divider className={styles.divider} />

        <TextField
          required
          fullWidth
          sx={{ mb: 2 }}
          label="New Password"
          name="password"
          type="password"
          value={userData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock color="primary"/>
              </InputAdornment>
            ),
          }}
          variant="outlined"
          className={styles.TextField}
        />

        <TextField
          required
          fullWidth
          sx={{ mb: 2 }}
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={userData.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.confirmPassword && Boolean(errors.confirmPassword)}
          helperText={touched.confirmPassword && errors.confirmPassword}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock color="primary" />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          className={styles.TextField}
        />

        <Button variant="contained" type="submit" fullWidth className={styles.submitButton}>
          Save
        </Button>
      </Box>
    </Box>
  );
}
