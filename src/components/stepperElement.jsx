// components/Stepper.jsx
"use client";

import React from "react";

// material
import { Box, Typography, useMediaQuery } from "@mui/material";

// Icon
import {
  Extension,
  Checklist,
  Storage,
  AppRegistration,
} from "@mui/icons-material";

// Component
import BackButton from "./buttons/backButton";
import NextButton from "./buttons/nextButton";
import CustomTabsBoard from "./customTabsBoard";
import PiecesGrid from "./createPuzzleTabsContent/piecesGrid";
import RequirementsGrid from "./createPuzzleTabsContent/requirementsGrid";
import CatalogsGrid from "./createPuzzleTabsContent/catalogsGrid";
import JoinsGrid from "./createPuzzleTabsContent/joinGrid";

// style
import { useTheme } from "@mui/material/styles";
import styles from "./Stepper.module.css";


// Definir tabs para cada paso
const steps = [
  {
    label: "Choose your pieces",
    icon: <Extension />,
    tabs: [
      {
        label: "My pieces",
        content: <PiecesGrid />,
      },
    ],
  },
  {
    label: "Choose your requirements",
    icon: <Checklist />,
    tabs: [
      {
        label: "Requirements Tab 1",
        content: <RequirementsGrid/>,
      },
    ],
  },
  {
    label: "Choose your data",
    icon: <Storage />,
    tabs: [
      { label: "My catalogs", content: <CatalogsGrid/>},
      { label: "Shared catalogs ", content: <CatalogsGrid/> },
    ],
  },
  {
    label: "Join your app",
    icon: <AppRegistration />,
    tabs: [{ label: "Join puzzle", content: <JoinsGrid/>}],
  },
];

function StepperElement() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [activeStep, setActiveStep] = React.useState(0);

  const isFirstStep = activeStep === 0;
  const isLastStep = activeStep === steps.length - 1;

  const handleNext = () => {
    if (!isLastStep) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (!isFirstStep) {
      setActiveStep((prev) => prev - 1);
    }
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <Box className={styles.stepperContainer}>
      {/* Stepper*/}
      <Box className={styles.stepper}>
        <div className={styles.stepperLine}></div>

        {/* Pasos */}
        {steps.map((step, index) => (
          <div
            key={step.label}
            className={styles.step}
            onClick={handleStep(index)}
            style={{ cursor: "pointer" }}
          >
            {/* Icono - SOLO activo es azul */}
            <div
              className={`${styles.stepIcon} ${
                activeStep === index ? styles.stepIconActive : ""
              }`}
            >
              {React.cloneElement(step.icon, {
                sx: { fontSize: "1.25rem" },
              })}
            </div>

            {/* Label - SOLO activo es oscuro */}
            <div
              className={`${styles.stepLabel} ${
                activeStep === index ? styles.stepLabelActive : ""
              }`}
            >
              {step.label}
            </div>
          </div>
        ))}
      </Box>

      {/* Contenido del paso actual */}
      <Box className={styles.contentContainer}>
        <Typography variant="h5" className={styles.contentTitle}>
          Step {activeStep + 1}: {steps[activeStep].label}
        </Typography>

        {/* Integrar CustomTabsBoard con los tabs del paso actual */}
        <CustomTabsBoard items={steps[activeStep].tabs} />
        {/* Botones de navegación */}
        <Box className={styles.buttonsContainer}>
          <BackButton onClick={handleBack} disabled={isFirstStep} />

          <NextButton
            onClick={handleNext}
            disabled={isLastStep}
            isLastStep={isLastStep}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default StepperElement;
