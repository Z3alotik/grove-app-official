export type GASnackbarProps = {
  open: boolean;
  severity: AlertSeverity;
  message: React.ReactNode;
  handleClose: () => void;
};

export type AlertSeverity = "error" | "warning" | "info" | "success";
