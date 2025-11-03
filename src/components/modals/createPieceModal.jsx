"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Divider,
  Modal,
  Button,
  TextField,
} from "@mui/material";

// components
import CancelButton from "../buttons/cancelButton";
import ActionButton from "../buttons/actionButton";
import CloseButton from "../buttons/closeButton";
import CreateButton from "../buttons/createButton";

import styles from "./Modals.module.css";

function CreatePieceModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState({
    pieceName: "",
    pieceDescription: "",
    command: "",
    pieceImage: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (file) => {
    setFormData((prev) => ({ ...prev, pieceImage: file }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.pieceName.trim()) newErrors.pieceName = "Name is required";
    if (!formData.pieceDescription.trim())
      newErrors.pieceDescription = "Description is required";
    if (!formData.command.trim())
      newErrors.command = "Command name is required";
    if (!formData.pieceImage)
      newErrors.pieceImage = "Docker image is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    console.log("Piece created:", formData);
    handleClose();
  };

  return (
    <div>
      <CreateButton onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-piece-title"
        aria-describedby="modal-piece-description"
      >
        <Box className={styles.modalContainer}>
          <Box className={styles.headerModal}>
            <Typography variant="h5" className={styles.modalTitle}>
              Create a piece
            </Typography>
            <CloseButton onClick={handleClose} className={styles.closeButton} />
          </Box>
          <Divider className={styles.divider}/>
          <Typography variant="subtitle1" className={styles.instructions}>Instructions here</Typography>

          {/* Piece Name Field */}
          <TextField
            required
            fullWidth
            label="Piece Name"
            name="pieceName"
            value={formData.pieceName}
            onChange={handleChange}
            error={Boolean(errors.pieceName)}
            helperText={errors.pieceName}
            variant="outlined"
            className={styles.textField}
          />

          {/* Description Field */}
          <TextField
            required
            fullWidth
            multiline
            minRows={3}
            label="Piece Description"
            name="pieceDescription"
            value={formData.pieceDescription}
            onChange={handleChange}
            error={Boolean(errors.pieceDescription)}
            helperText={errors.pieceDescription}
            variant="outlined"
            className={styles.textField}
          />

          {/* Command Field */}
          <TextField
            required
            fullWidth
            label="Command"
            name="command"
            value={formData.command}
            onChange={handleChange}
            error={Boolean(errors.command)}
            helperText={errors.command}
            variant="outlined"
            className={styles.textField}
          />

          {/* Image Field */}
          <Button variant="outlined" component="label" fullWidth className={styles.uploadButton}>
            Upload Docker Image
            <input
              type="file"
              hidden
              accept="image/*"
              name="pieceImage"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) handleImageUpload(file);
              }}
            />
          </Button>

          {formData.pieceImage && (
            <Typography variant="body2" sx={{ mt: 1 }}>
              Selected file: {formData.pieceImage.name}
            </Typography>
          )}
          {errors.pieceImage && (
            <Typography color="error" variant="body2">
              {errors.pieceImage}
            </Typography>
          )}

          <Box className={styles.buttonsContainer} >
            <CancelButton onClick={handleClose} className={styles.cancelButton}/>
            <ActionButton
              text="Create"
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

export default CreatePieceModal;
