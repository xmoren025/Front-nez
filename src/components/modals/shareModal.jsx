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

function ShareModal() {
  const [user, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box className={styles.modalContainer}>
      <Typography variant="h6"> Share</Typography>
      <CloseButton/>
      <Divider />
      <Typography variant="subtitle1">Instructions here</Typography>

      {/* User select*/}
      <Box sx={{ minWidth: 150 }}>
        <FormControl fullWidth>
          <InputLabel id="userSelect">User</InputLabel>
          <Select
            labelId="userSelect"
            id="userSelect"
            value={user}
            label="User"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
          </Select>
        </FormControl>
      </Box>
      
      <CancelButton/>
      <ActionButton/>
    </Box>
  );
}

export default ShareModal;
