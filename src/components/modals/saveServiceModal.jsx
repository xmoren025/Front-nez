"use client";

import React, { useState } from "react";

// material
import {
  Box,
  Typography,
  Divider,
  TextField,
  Switch,
  Modal,
  FormControlLabel,
} from "@mui/material";

// component
import CancelButton from "../buttons/cancelButton";
import ActionButton from "../buttons/actionButton";
import CloseButton from "../buttons/closeButton";
import SaveButton from "../buttons/saveButton";

// style
import styles from "./Modals.module.css";

function SaveServiceModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState({
    puzzleName: "",
    employ: true,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (e) => {
    setFormData((prev) => ({ ...prev, employ: e.target.checked }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.puzzleName.trim()) newErrors.puzzleName = "Puzzle name is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    console.log("Service saved:", formData);
    handleClose();
  };

  return (
    <div>
      <SaveButton onClick={handleOpen} />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.modalContainer}>
          <Box className={styles.headerModal}>
            <Typography variant="h5" className={styles.modalTitle}>
              Save service
            </Typography>
            <CloseButton onClick={handleClose} className={styles.closeButton} />
          </Box>
          <Divider className={styles.divider}/>
          <Typography variant="subtitle1" className={styles.instructions}>Instructions here</Typography>

          {/* Puzzle Name Field */}
          <TextField
            required
            fullWidth
            label="Puzzle Name"
            name="puzzleName"
            value={formData.puzzleName}
            onChange={handleChange}
            error={Boolean(errors.puzzleName)}
            helperText={errors.puzzleName}
            variant="outlined"
            className={styles.textField}
          />

          {/* Employ Switch */}
          <Box className={styles.switchContainer}>
            <FormControlLabel
              control={
                <Switch
                  checked={formData.employ}
                  onChange={handleSwitchChange}
                  color="primary"
                  className={styles.switch}
                />
              }
              label="Employ"
            />
            <Typography variant="caption" display="block">
              Toggle this to employ or disable the service.
            </Typography>
          </Box>

          <Box className={styles.buttonsContainer} >
            <CancelButton onClick={handleClose} />
            <ActionButton
              text="Save"
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

export default SaveServiceModal;
