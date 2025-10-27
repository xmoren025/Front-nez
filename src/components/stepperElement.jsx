// components/Stepper.jsx
"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

// Componentes de botones reutilizables
import BackButton from "./buttons/backButton";
import NextButton from "./buttons/nextButton";

// Iconos MUI
import {
  Extension,
  Checklist,  
  Storage,
  AppRegistration,
} from "@mui/icons-material";

import styles from './Stepper.module.css';

const steps = [
  {
    label: "Choose your pieces",
    icon: <Extension />,
  },
  {
    label: "Choose your requirements", 
    icon: <Checklist />,
  },
  {
    label: "Choose your data",
    icon: <Storage />,
  },
  {
    label: "Join your app",
    icon: <AppRegistration />,
  },
];

function StepperElement() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
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
      {/* Stepper personalizado - SIMPLE */}
      <Box className={styles.stepper}>
        {/* Línea de conexión - SIEMPRE GRIS */}
        <div className={styles.stepperLine}></div>
        
        {/* Pasos */}
        {steps.map((step, index) => (
          <div 
            key={step.label} 
            className={styles.step}
            onClick={handleStep(index)}
            style={{ cursor: 'pointer' }}
          >
            {/* Icono - SOLO activo es azul */}
            <div className={`${styles.stepIcon} ${activeStep === index ? styles.stepIconActive : ''}`}>
              {React.cloneElement(step.icon, {
                sx: { fontSize: '1.25rem' }
              })}
            </div>
            
            {/* Label - SOLO activo es oscuro */}
            <div className={`${styles.stepLabel} ${activeStep === index ? styles.stepLabelActive : ''}`}>
              {step.label}
            </div>
          </div>
        ))}
      </Box>

      {/* Contenido del paso actual */}
      <Box className={styles.contentContainer}>
        <Typography className={styles.contentTitle}>
          Step {activeStep + 1}: {steps[activeStep].label}
        </Typography>
        
        <Typography className={styles.contentDescription}>
          Contenido específico del paso {activeStep + 1}...
        </Typography>
      </Box>

      {/* Botones de navegación */}
      <Box className={styles.buttonsContainer}>
        <BackButton 
          onClick={handleBack}
          disabled={isFirstStep}
        />
        
        <NextButton 
          onClick={handleNext}
          disabled={isLastStep}
          isLastStep={isLastStep}
        />
      </Box>
    </Box>
  );
}

export default StepperElement;