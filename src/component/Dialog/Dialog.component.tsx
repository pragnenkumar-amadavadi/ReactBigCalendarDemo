import { X } from "lucide-react";
import { type CustomDialogProps } from "./Dialog.type";
import {
  StyledDialog,
  StyledDialogTitle,
  StyledDialogContent,
  CloseButton,
  DialogSubtitle,
} from "./Dialog.styled";
import Box from "@mui/material/Box";

export const CustomDialog = ({
  open,
  onClose,
  title,
  subtitle,
  children,
  ...props
}: CustomDialogProps) => {
  return (
    <StyledDialog open={open} onClose={onClose} {...props}>
      {title && (
        <StyledDialogTitle>
          <Box>
            {title}
            <DialogSubtitle>{subtitle}</DialogSubtitle>
          </Box>
          <CloseButton onClick={onClose} aria-label="close">
            <X size="2rem" />
          </CloseButton>
        </StyledDialogTitle>
      )}
      <StyledDialogContent>{children}</StyledDialogContent>
    </StyledDialog>
  );
};
