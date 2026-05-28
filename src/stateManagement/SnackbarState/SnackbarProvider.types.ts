import { ReactNode } from "react";
import { AlertSeverity } from "../../components/General/GASnackbar/GASnackbar.types";

export interface SnackbarProviderProps {
  children: ReactNode;
}

export type SnackbarContextType = {
  showSnackbar: (message: string, severity: AlertSeverity) => void;
};
