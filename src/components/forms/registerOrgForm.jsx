"use client";

import React, { useState, useEffect } from "react";

// material
import {
  Box,
  Divider,
  TextField,
  Button,
  Typography,
  InputAdornment,
} from "@mui/material";

// icon
import { Business, Abc } from "@mui/icons-material";

// style
import styles from './Forms.module.css';

// moar
import { useRouter } from "next/navigation";



export default function RegisterOrgForm() {
  const router = useRouter();

  const [userData, setUserData] = useState({
    organizationName: "",
    acronym: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = ({ target: { name, value } }) => {
    setUserData({ ...userData, [name]: value });

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
      case "organizationName":
        if (!value) {
          error = "Organization name is required";
        } else if (value.length < 3) {
          error = "Organization name must be at least 3 characters";
        }
        break;
      case "acronym":
        if (!value) {
          error = "Acronym is required";
        } else if (value.length > 10) {
          error = "Acronym should be 10 characters or fewer";
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

    const allTouched = Object.keys(userData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    const isFormValid = Object.keys(userData).every((key) =>
      validateField(key, userData[key])
    );

    if (isFormValid) {
      console.log("Form submitted:", userData);
      alert("Registration successful!");
      router.push("/auth/login");
    }
  };

  useEffect(() => {
    console.log("Organization data updated:", userData);
  }, [userData]);

  return (
    <Box className={styles.container}>
      <Box component="form" onSubmit={handleSubmit} className={styles.form}>
        <Typography variant="h4" className={styles.title}>
          Register organization
        </Typography>

        <Typography variant="body1" className={styles.subtitle}>
          Complete the form to register your organization
        </Typography>

        <Divider className={styles.divider} />

        <TextField
          required
          fullWidth
          label="Organization Name"
          name="organizationName"
          value={userData.organizationName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.organizationName && Boolean(errors.organizationName)}
          helperText={touched.organizationName && errors.organizationName}
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

        <TextField
          required
          fullWidth
          label="Acronym"
          name="acronym"
          value={userData.acronym}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.acronym && Boolean(errors.acronym)}
          helperText={touched.acronym && errors.acronym}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Abc color="primary" />
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
      </Box>
    </Box>
  );
}
