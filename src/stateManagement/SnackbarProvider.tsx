import React, { createContext, useContext, useState } from "react";
import {
  SnackbarContextType,
  SnackbarProviderProps,
} from "./SnackbarProvider.types";
import { AlertSeverity } from "../components/general/GASnackbar/GASnackbar.types";
import GASnackbar from "../components/general/GASnackbar/GASnackbar";

const SnackbarContext = createContext<SnackbarContextType | undefined>(
  undefined
);

const SnackbarProvider = ({ children }: SnackbarProviderProps) => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    severity: "success" as AlertSeverity,
    message: "",
  });

  const showSnackbar = (message: string, severity: AlertSeverity) => {
    setSnackbar({ open: true, message, severity });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <GASnackbar
        open={snackbar.open}
        severity={snackbar.severity}
        message={snackbar.message}
        handleClose={handleCloseSnackbar}
      />
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;

// Helper function for easier use of snackbar context
export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used within an SnackbarProvider");
  }
  return context;
};
