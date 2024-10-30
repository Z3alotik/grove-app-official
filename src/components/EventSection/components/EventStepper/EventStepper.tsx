import {
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Typography,
} from "@mui/material";
import { steps } from "./EventStepper.consts";
import useEventStepper from "./useEventStepper";

const EventStepper = () => {
  const { handleNext, handlePrevious, activeStep } = useEventStepper();

  return (
    <Box>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <Button
                  disabled={index === 2}
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Další
                </Button>
                <Button
                  disabled={index === 0}
                  onClick={handlePrevious}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Zpět
                </Button>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};
export default EventStepper;
