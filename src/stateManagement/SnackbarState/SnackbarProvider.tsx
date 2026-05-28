import { createContext, useContext, useState } from "react";
import {
  SnackbarContextType,
  SnackbarProviderProps,
} from "./SnackbarProvider.types";
import { AlertSeverity } from "../../components/General/GASnackbar/GASnackbar.types";
import GASnackbar from "../../components/General/GASnackbar/GASnackbar";

/**
 * Snackbar context for managing notification state across the application
 * @type {React.Context<SnackbarContextType | undefined>}
 */
const SnackbarContext = createContext<SnackbarContextType | undefined>(
  undefined,
);

/**
 * SnackbarProvider component that manages snackbar/notification state
 * Renders a GASnackbar component that displays notifications to users
 * @component
 * @param {SnackbarProviderProps} props - Component props
 * @param {React.ReactNode} props.children - Child components to be wrapped by the provider
 * @returns {React.ReactElement} The provider component with snackbar context and GASnackbar component
 */
const SnackbarProvider = ({ children }: SnackbarProviderProps) => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    severity: "success" as AlertSeverity,
    message: "",
  });

  /**
   * Displays a snackbar notification with the specified message and severity level
   * @function
   * @param {string} message - The notification message to display
   * @param {AlertSeverity} severity - The severity level of the notification (success, error, warning, info)
   * @returns {void}
   */
  const showSnackbar = (message: string, severity: AlertSeverity) => {
    setSnackbar({ open: true, message, severity });
  };

  /**
   * Closes the currently displayed snackbar notification
   * @function
   * @returns {void}
   */
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

/**
 * Hook to use the SnackbarContext
 * Provides access to the showSnackbar function for displaying notifications
 * Must be used within a SnackbarProvider component
 * @function
 * @returns {SnackbarContextType} The snackbar context value containing showSnackbar method
 * @throws {Error} If used outside of SnackbarProvider
 * @example
 * const { showSnackbar } = useSnackbar();
 * showSnackbar("Success!", "success");
 */
export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used within an SnackbarProvider");
  }
  return context;
};
