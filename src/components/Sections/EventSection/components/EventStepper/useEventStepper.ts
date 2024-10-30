import { useState } from "react";

const useEventStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handlePrevious = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return {
    handleNext,
    handlePrevious,
    activeStep,
  };
};

export default useEventStepper;
