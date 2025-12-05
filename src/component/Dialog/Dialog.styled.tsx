import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";

export const StyledDialog = styled(Dialog)(() => ({
  "& .MuiDialog-paper": {
    backgroundColor: "#0a0a0a",
    color: "#ffffff",
    border: "0.1rem solid #1f1f1f",
    borderRadius: "0.8rem",
    paddingBlock: "1.2rem",
    minWidth: "50rem",
    maxWidth: "60rem",
    boxShadow:
      "0 2rem 2.5rem -0.5rem rgba(0, 0, 0, 0.8), 0 1rem 1rem -0.5rem rgba(0, 0, 0, 0.6)",
  },
}));

export const StyledDialogTitle = styled(DialogTitle)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: "0.4rem 1.6rem",
  fontSize: "1rem",
  fontWeight: 600,
});

export const StyledDialogContent = styled(DialogContent)({
  padding: "0 1.6rem !important",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
});

export const StyledDialogActions = styled(DialogActions)({
  padding: "2.4rem 0 0 0",
  justifyContent: "flex-end",
  gap: "1.2rem",
});

export const CloseButton = styled(IconButton)({
  color: "#6b7280",
  padding: "0.4rem",
  "&:hover": {
    color: "#ffffff",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
});

export const DialogSubtitle = styled("div")({
  fontSize: "0.8rem",
  color: "#6b7280",
  marginTop: "0.4rem",
  fontWeight: 400,
});
