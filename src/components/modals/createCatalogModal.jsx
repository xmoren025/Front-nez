"use client";

import React, { useState } from "react";

// material
import { Box, Typography, Divider, Modal, TextField } from "@mui/material";

// component
import CancelButton from "../buttons/cancelButton";
import ActionButton from "../buttons/actionButton";
import CloseButton from "../buttons/closeButton";
import CreateButton from "../buttons/createButton";

// style
import styles from "./Modals.module.css";

function CreateCatalogModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState({
    catalogName: "",
    catalogDescription: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.catalogName.trim()) newErrors.catalogName = "Name is required";
    if (!formData.catalogDescription.trim())
      newErrors.catalogDescription = "Description is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    console.log("Form submitted:", formData);
    handleClose();
  };

  return (
    <div>
      <CreateButton onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.modalContainer}>
          <Box className={styles.headerModal}>
            <Typography variant="h5" className={styles.modalTitle}>
              Create a catalog
            </Typography>
            <CloseButton onClick={handleClose} className={styles.closeButton} />
          </Box>

          <Divider className={styles.divider}/>
          <Typography variant="subtitle1">Instructions here</Typography>

          {/* Catalog Name Field */}
          <TextField
            required
            fullWidth
            label="Catalog Name"
            name="catalogName"
            value={formData.catalogName}
            onChange={handleChange}
            error={Boolean(errors.catalogName)}
            helperText={errors.catalogName}
            variant="outlined"
            className={styles.textField}
          />

          {/* Description Field */}
          <TextField
            required
            fullWidth
            multiline
            minRows={3}
            label="Catalog description"
            name="catalogDescription"
            value={formData.catalogDescription}
            onChange={handleChange}
            error={Boolean(errors.catalogDescription)}
            helperText={errors.catalogDescription}
            variant="outlined"
            className={styles.textField}
          />

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

export default CreateCatalogModal;
