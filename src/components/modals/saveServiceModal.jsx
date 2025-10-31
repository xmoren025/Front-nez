"use client";

import React from "react";
import {
  Box,
  Typography,
  Divider,
  TextField,
  Switch
} from "@mui/material";

import CancelButton from "../buttons/cancelButton";
import ActionButton from "../buttons/actionButton";
import CloseButton from "../buttons/closeButton";

import styles from "./Modals.module.css";

function SaveServiceModal() {
  const [user, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box className={styles.modalContainer}>
      <Typography variant="h6"> Save service</Typography>
      <CloseButton />
      <Divider />
      <Typography variant="subtitle1">Instructions here</Typography>

      {/* Puzzle Name Field */}
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

      <Typography variant="subtitle1">Employ</Typography>
      <Switch {...label} defaultChecked />
      <Typography variant="caption">what is employ here</Typography>
      <CancelButton />
      <ActionButton />
    </Box>
  );
}

export default SaveServiceModal;
