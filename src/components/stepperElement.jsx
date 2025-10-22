"use client";

import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const steps = [
  "Choose your pieces",
  "Choose your requirements",
  "Choose your data",
  "Join your app", 
];

function StepperElement() {
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
    <Box sx={{ width: "100%" }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>

      <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
        Step {activeStep + 1}: {steps[activeStep]}
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button
          color="inherit"
          disabled={isFirstStep}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button onClick={handleNext} disabled={isLastStep}>
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default StepperElement;
