"use client";

import React, { useState } from "react";

// materials
import {
  Box,
  Typography,
  Divider,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Modal,
} from "@mui/material";

// icons
import Share from "@mui/icons-material/Share";

// components
import CancelButton from "../buttons/cancelButton";
import CloseButton from "../buttons/closeButton";
import ActionButton from "../buttons/actionButton";
import styles from "./Modals.module.css";

function ShareModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState({
    selectedUser: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData({ selectedUser: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.selectedUser)
      newErrors.selectedUser = "Please select a user.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    console.log("Shared with:", formData.selectedUser);
    handleClose();
  };

  return (
    <div>
      <ActionButton
        text="Share"
        variant="contained"
        startIcon={<Share />}
        onClick={handleOpen}
        sx={{ borderRadius: 2 }}
      />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-share-title"
        aria-describedby="modal-share-description"
      >
        <Box className={styles.modalContainer}>
          <Box className={styles.headerModal}>
            <Typography variant="h5" className={styles.modalTitle}>
              Share
            </Typography>
            <CloseButton onClick={handleClose} className={styles.closeButton} />
          </Box>
          <Divider className={styles.divider} />
          <Typography variant="subtitle1" className={styles.instructions}>
            Select a user to share with:
          </Typography>

          {/* User Select */}
          <Box className={styles.selectContainer}>
            <FormControl fullWidth error={Boolean(errors.selectedUser)}>
              <InputLabel id="userSelectLabel">User</InputLabel>
              <Select
                labelId="userSelectLabel"
                id="userSelect"
                value={formData.selectedUser}
                label="User"
                onChange={handleChange}
                className={styles.select}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="alice@example.com">alice@example.com</MenuItem>
                <MenuItem value="bob@example.com">bob@example.com</MenuItem>
                <MenuItem value="charlie@example.com">
                  charlie@example.com
                </MenuItem>
              </Select>
              {errors.selectedUser && (
                <Typography color="error" variant="caption">
                  {errors.selectedUser}
                </Typography>
              )}
            </FormControl>
          </Box>

          {/* Botones de acción */}
          <Box className={styles.buttonsContainer}>
            <CancelButton onClick={handleClose}/>
            <ActionButton
              text="Share"
              variant="contained"
              onClick={handleSubmit}
              sx={{ borderRadius: 1 }}
            />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default ShareModal;
