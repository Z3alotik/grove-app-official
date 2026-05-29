import { ReactNode } from "react";

export interface GADialogProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  header?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  hideFooter?: boolean;
  onAccept?: () => void;
  onCancel?: () => void;
  disableAcceptButton?: boolean;
  acceptButtonIcon?: ReactNode;
  acceptButtonText?: string;
  cancelButtonText?: string;
  hideCancelButton?: boolean;
  hideAcceptButton?: boolean;
  dividers?: "upper" | "lower" | "both";
  size?: "sm" | "md" | "lg";
}
