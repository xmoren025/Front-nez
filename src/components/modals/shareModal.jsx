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
  OutlinedInput
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
                multiple // <-- habilita selección múltiple
                value={formData.selectedUser || []} // debe ser un array
                label="User"
                onChange={(event) => {
                  const {
                    target: { value },
                  } = event;
                  setFormData({
                    ...formData,
                    selectedUser:
                      typeof value === "string" ? value.split(",") : value,
                  });
                }}
                input={<OutlinedInput label="User" />} // igual que en tu ejemplo de MUI
                className={styles.select}
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 48 * 4.5 + 8,
                      width: 250,
                    },
                  },
                }}
              >
                <MenuItem value="alice@example.com">user example 1</MenuItem>
                <MenuItem value="bob@example.com">user example 2</MenuItem>
                <MenuItem value="charlie@example.com">user example 3</MenuItem>
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
            <CancelButton onClick={handleClose} />
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
