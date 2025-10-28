// components/Stepper.jsx
"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

// Componentes reutilizables
import BackButton from "./buttons/backButton";
import NextButton from "./buttons/nextButton";
import CustomTabsBoard from "./boards/customTabsBoard"; // Importar el board

// Iconos
import {
  Extension,
  Checklist,  
  Storage,
  AppRegistration,
} from "@mui/icons-material";

import styles from './Stepper.module.css';

// Definir tabs para cada paso
const steps = [
  {
    label: "Choose your pieces",
    icon: <Extension />,
    tabs: [
      { label: "Pieces Tab 1", content: "Contenido del Tab 1 de Pieces" },
      { label: "Pieces Tab 2", content: "Contenido del Tab 2 de Pieces" },
      { label: "Pieces Tab 3", content: "Contenido del Tab 3 de Pieces" },
    ],
  },
  {
    label: "Choose your requirements", 
    icon: <Checklist />,
    tabs: [
      { label: "Requirements Tab 1", content: "Contenido del Tab 1 de Requirements" },
      { label: "Requirements Tab 2", content: "Contenido del Tab 2 de Requirements" },
    ],
  },
  {
    label: "Choose your data",
    icon: <Storage />,
    tabs: [
      { label: "Data Tab 1", content: "Contenido del Tab 1 de Data" },
      { label: "Data Tab 2", content: "Contenido del Tab 2 de Data" },
      { label: "Data Tab 3", content: "Contenido del Tab 3 de Data" },
      { label: "Data Tab 4", content: "Contenido del Tab 4 de Data" },
    ],
  },
  {
    label: "Join your app",
    icon: <AppRegistration />,
    tabs: [
      { label: "Join Tab 1", content: "Contenido del Tab 1 de Join" },
    ],
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
      {/* Stepper*/}
      <Box className={styles.stepper}>
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
        
        {/* Integrar CustomTabsBoard con los tabs del paso actual */}
        <CustomTabsBoard items={steps[activeStep].tabs} />
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