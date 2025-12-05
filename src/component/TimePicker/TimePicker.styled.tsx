import { styled } from "@mui/material/styles";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

export const StyledTimePickerContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
  width: "100%",
});

export const Label = styled("label")({
  fontSize: "0.8rem",
  color: "#ffffff",
  fontWeight: 500,
  display: "block",
  marginBottom: "0.6rem",
});

export const StyledTimePicker = styled(TimePicker)(() => ({
  width: "100%",
  "& .MuiInputBase-root": {
    backgroundColor: "#171717",
    color: "#a1a1aa",
    borderRadius: "0.6rem",
    border: "0.1rem solid #27272a",
    transition: "border-color 0.2s",
    minHeight: "4.4rem",
    "&:hover": {
      borderColor: "#3a3a3a",
    },
    "&.Mui-focused": {
      borderColor: "#22d3ee",
      boxShadow: "0 0 0 0.1rem rgba(34, 211, 238, 0.3)",
      color: "#ffffff",
    },
    "&.Mui-error": {
      borderColor: "#ef4444",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiSvgIcon-root": {
    color: "#52525b",
  },
  "& .MuiInputBase-input": {
    padding: "1.2rem 1.4rem",
    fontSize: "0.9rem",
    color: "#a1a1aa",
    "&:focus": {
      color: "#ffffff",
    }
  },
})) as typeof TimePicker;
