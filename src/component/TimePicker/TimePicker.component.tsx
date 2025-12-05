import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { type CustomTimePickerProps } from "./TimePicker.type";
import {
  StyledTimePicker,
  StyledTimePickerContainer,
  Label,
} from "./TimePicker.styled";
import InputAdornment from "@mui/material/InputAdornment";
import { Clock } from "lucide-react";

export const CustomTimePicker = ({
  label,
  ...props
}: CustomTimePickerProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledTimePickerContainer>
        {label && <Label>{label}</Label>}
        <StyledTimePicker
          {...props}
          slotProps={{
            openPickerIcon: { fontSize: "small" },
            textField: {
              InputProps: {
                startAdornment: (
                  <InputAdornment position="start" sx={{ color: "#9ca3af" }}>
                    <Clock size="1.2rem" />
                  </InputAdornment>
                ),
              },
            },
            popper: {
              sx: {
                "& .MuiPaper-root": {
                  backgroundColor: "#111111",
                  color: "#ffffff",
                  border: "1px solid #333",
                  borderRadius: "8px",
                },
                "& .MuiList-root": {
                  backgroundColor: "#111111",
                  color: "#ffffff",
                },
                "& .MuiMenuItem-root": {
                  color: "#ffffff",
                  "&:hover": {
                    backgroundColor: "#27272a",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "#22d3ee",
                    color: "#000000",
                    "&:hover": {
                      backgroundColor: "#67e8f9",
                    },
                  },
                },
                // For Digital Clock view
                "& .MuiDigitalClock-root": {
                  backgroundColor: "#111111",
                },
                "& .MuiDigitalClock-item": {
                  color: "#ffffff",
                  "&:hover": {
                    backgroundColor: "#27272a",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "#22d3ee",
                    color: "#000000",
                    fontWeight: "bold",
                  },
                },
              },
            },
          }}
        />
      </StyledTimePickerContainer>
    </LocalizationProvider>
  );
};
