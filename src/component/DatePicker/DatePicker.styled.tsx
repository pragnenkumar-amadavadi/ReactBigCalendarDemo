import { styled } from "@mui/material/styles";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const StyledDatePickerContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  width: "100%",
});

export const Label = styled("label")({
  fontSize: "0.875rem",
  color: "#e5e7eb",
  fontWeight: 600,
  display: "block",
  letterSpacing: "0.01em",
});

export const StyledDatePicker = styled(DatePicker)(() => ({
  width: "100%",
  "& .MuiInputBase-root": {
    backgroundColor: "#18181b",
    color: "#e4e4e7",
    borderRadius: "0.75rem",
    border: "1px solid #3f3f46",
    transition: "all 0.2s ease-in-out",
    minHeight: "3rem",
    fontSize: "0.875rem",
    "&:hover": {
      borderColor: "#52525b",
      backgroundColor: "#1f1f23",
    },
    "&.Mui-focused": {
      borderColor: "#22d3ee",
      backgroundColor: "#1f1f23",
      boxShadow: "0 0 0 3px rgba(34, 211, 238, 0.1)",
      color: "#ffffff",
    },
    "&.Mui-error": {
      borderColor: "#ef4444",
      "&:focus": {
        boxShadow: "0 0 0 3px rgba(239, 68, 68, 0.1)",
      },
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiSvgIcon-root": {
    color: "#71717a",
    transition: "color 0.2s ease-in-out",
  },
  "& .MuiInputBase-input": {
    padding: "0.75rem 1rem",
    fontSize: "0.875rem",
    fontWeight: 500,
    color: "#e4e4e7",
    "&::placeholder": {
      color: "#71717a",
      opacity: 1,
    },
  },
  "& .MuiInputAdornment-root": {
    marginRight: "0.5rem",
  },
})) as typeof DatePicker;
