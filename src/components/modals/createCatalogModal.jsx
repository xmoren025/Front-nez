"use client";

import React from "react";
import {
  Box,
  Typography,
  Divider,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

import CancelButton from "../buttons/cancelButton";
import ActionButton from "../buttons/actionButton";
import CloseButton from "../buttons/closeButton";

import styles from "./Modals.module.css";

function CreateCatalogModal() {
  const [user, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box className={styles.modalContainer}>
      <Typography variant="h6"> Create a catalog</Typography>
      <CloseButton />
      <Divider />
      <Typography variant="subtitle1">Instructions here</Typography>

      {/* Catalog Name Field */}
      <TextField
        required
        fullWidth
        label="Puzzle Name"
        name="puzzlename"
        value={userData.puzzleName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.puzzleName && Boolean(errors.puzzleName)}
        helperText={touched.puzzleName && errors.puzzleName}
        variant="outlined"
        className={styles.textField}
      />

      {/* Description Field */}
      <TextField
        required
        fullWidth
        label="Catalog description"
        name="catalogDescription"
        value={userData.catalogDescription}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.catalogDescription && Boolean(errors.catalogDescription)}
        helperText={touched.catalogDescription && errors.catalogDescription}
        variant="outlined"
        className={styles.textField}
      />

      <CancelButton />
      <ActionButton />
    </Box>
  );
}

export default CreateCatalogModal;
