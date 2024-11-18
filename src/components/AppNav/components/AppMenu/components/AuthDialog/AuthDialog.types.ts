export interface AuthDialogProps {
  openAuthDialog: boolean;
  handleCloseAuthDialog: () => void;
  isLogin: boolean;
  handleChangeAuthContent: () => void;
}
