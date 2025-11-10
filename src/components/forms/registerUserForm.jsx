"use client";

import { useState, useEffect } from "react";

// material
import {
  Box,
  Typography,
  Button,
  TextField,
  Divider,
  InputAdornment,
} from "@mui/material";

//icon
import {Badge, Email, Lock, Business} from "@mui/icons-material"

// style
import styles from "./Forms.module.css";

export default function RegisterUserForm() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    organization: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = ({ target: { name, value } }) => {
    setUserData({ ...userData, [name]: value });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = ({ target: { name } }) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, userData[name]);
  };

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "username":
        if (!value) {
          error = "Username is required";
        } else if (value.length < 3) {
          error = "Username must be at least 3 characters";
        }
        break;
      case "email":
        if (!value) {
          error = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Email is invalid";
        }
        break;
      case "password":
        if (!value) {
          error = "Password is required";
        } else if (value.length < 8) {
          error = "Password must be at least 8 characters";
        }
        break;
      case "confirmPassword":
        if (!value) {
          error = "Please confirm your password";
        } else if (value !== userData.password) {
          error = "Passwords do not match";
        }
        break;
      case "organization":
        if (!value) {
          error = "Organization is required";
        }
        break;
      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
    return !error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = Object.keys(userData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    // Validate all fields
    const isFormValid = Object.keys(userData).every((key) =>
      validateField(key, userData[key])
    );

    if (isFormValid) {
      // Submit the form
      console.log("Form submitted:", userData);
      alert("Registration successful!");
      // Here you would typically make an API call
    }
  };

  useEffect(() => {
    console.log("User data updated:", userData);
  }, [userData]);

  return (
    <Box className={styles.container}>
      <Box component="form" onSubmit={handleSubmit} className={styles.form}>
        <Typography variant="h4" className={styles.title}>
          Register User
        </Typography>

        <Typography variant="body1" className={styles.subtitle}>
          Complete the form to get started
        </Typography>

        <Divider className={styles.divider} />

        {/* Username Field */}
        <TextField
          required
          fullWidth
          label="Username"
          name="username"
          value={userData.username}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.username && Boolean(errors.username)}
          helperText={touched.username && errors.username}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Badge color="primary" />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          className={styles.textField}
        />

        {/* Email Field */}
        <TextField
          required
          fullWidth
          label="Email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email color="primary" />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          className={styles.textField}
        />

        {/* Password Field */}
        <TextField
          required
          fullWidth
          label="Password"
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
                <Lock color="primary" />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          className={styles.textField}
        />

        {/* Confirm Password Field */}
        <TextField
          required
          fullWidth
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
          className={styles.textField}
        />

        {/* Organization Field */}
        <TextField
          required
          fullWidth
          label="Organization"
          name="organization"
          value={userData.organization}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.organization && Boolean(errors.organization)}
          helperText={touched.organization && errors.organization}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Business color="primary" />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          className={styles.textField}
        />

        <Button
          variant="contained"
          type="submit"
          fullWidth
          className={styles.submitButton}
        >
          Register
        </Button>

        <Box className={styles.footer}>
          <Typography variant="body2" className={styles.footerText}>
            Already have an account?{" "}
            <Button
              href="/auth/login"
              variant="text"
              className={styles.footerLink}
            >
              Sign in
            </Button>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
