import { type DialogProps as MuiDialogProps } from "@mui/material/Dialog";

export interface CustomDialogProps extends MuiDialogProps {
  title?: string;
  onClose: () => void;
  subtitle?: string;
}
