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
import useStyles from "./EventStepper.styles";

const EventStepper = () => {
  const { handleNext, handlePrevious, activeStep } = useEventStepper();
  const classes = useStyles();

  return (
    <Box>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label} className={classes.stepIcon}>
            <StepLabel className={classes.stepLabel}>{step.label}</StepLabel>
            <StepContent>
              <Typography color="white">{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <Button
                  disabled={index === 2}
                  variant="contained"
                  onClick={handleNext}
                  sx={{
                    mt: 1,
                    mr: 1,
                    color: "black",
                    backgroundColor: "white",
                    borderRadius: "20px",
                  }}
                >
                  Další
                </Button>
                <Button
                  variant="outlined"
                  disabled={index === 0}
                  onClick={handlePrevious}
                  sx={{
                    mt: 1,
                    mr: 1,
                    color: "white",
                    borderRadius: "20px",
                    borderColor: "white",
                  }}
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
