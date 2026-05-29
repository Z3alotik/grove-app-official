import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
} from "@mui/material";
import { GADialogProps } from "./GADialog.types";
import useStyles from "./GADialog.styles";

export const GADialog = ({
  open,
  onClose,
  title,
  header,
  children,
  footer,
  hideFooter = false,
  onAccept,
  onCancel,
  disableAcceptButton = false,
  acceptButtonIcon,
  acceptButtonText = "Accept",
  cancelButtonText = "Cancel",
  dividers,
  size = "md",
  hideAcceptButton,
  hideCancelButton,
}: GADialogProps) => {
  const classes = useStyles({ size });

  const getMaxWidth = () => {
    switch (size) {
      case "sm":
        return 400;
      case "lg":
        return 900;
      case "md":
      default:
        return 600;
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    } else {
      onClose();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      className={classes.GA_Dialog}
      PaperProps={{
        sx: {
          width: "100%",
          maxWidth: getMaxWidth(),
          borderRadius: "20px",
          backgroundColor: "#1a2832",
        },
      }}
    >
      {(header || title) && (
        <>
          {header ? (
            <div className={classes.GA_Dialog_Header}>{header}</div>
          ) : (
            <DialogTitle className={classes.GA_Dialog_Title}>
              {title}
            </DialogTitle>
          )}

          {(dividers === "both" || dividers === "upper") && <Divider />}
        </>
      )}

      <DialogContent className={classes.GA_Dialog_Content}>
        {children}
      </DialogContent>

      {!hideFooter && (
        <>
          {(dividers === "both" || dividers === "lower") && <Divider />}

          {footer ? (
            <div className={classes.GA_Dialog_Footer}>{footer}</div>
          ) : (
            <DialogActions className={classes.GA_Dialog_Actions}>
              {!hideCancelButton && (
                <Button variant="outlined" onClick={handleCancel}>
                  {cancelButtonText ? cancelButtonText : "Cancel"}
                </Button>
              )}

              {!hideAcceptButton && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={onAccept}
                  disabled={disableAcceptButton}
                  startIcon={acceptButtonIcon}
                >
                  {acceptButtonText ? acceptButtonText : "Accept"}
                </Button>
              )}
            </DialogActions>
          )}
        </>
      )}
    </Dialog>
  );
};
