import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { type CustomDatePickerProps } from "./DatePicker.type";
import {
  StyledDatePicker,
  StyledDatePickerContainer,
  Label,
} from "./DatePicker.styled";
import InputAdornment from "@mui/material/InputAdornment";
import { Calendar } from "lucide-react";

export const CustomDatePicker = ({
  label,
  ...props
}: CustomDatePickerProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledDatePickerContainer>
        {label && <Label>{label} *</Label>}
        <StyledDatePicker
          {...props}
          openTo="day"
          views={["year", "month", "day"]}
          slotProps={{
            openPickerIcon: { fontSize: "small" },
            textField: {
              InputProps: {
                startAdornment: (
                  <InputAdornment position="start" sx={{ color: "#71717a" }}>
                    <Calendar size="1.125rem" strokeWidth={2} />
                  </InputAdornment>
                ),
              },
            },
            popper: {
              sx: {
                "& .MuiPaper-root": {
                  backgroundColor: "#09090b",
                  color: "#fafafa",
                  border: "1px solid #27272a",
                  borderRadius: "1rem",
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.3)",
                  overflow: "hidden",
                  marginTop: "0.5rem",
                  // Custom scrollbar styles
                  "& *::-webkit-scrollbar": {
                    width: "8px",
                    height: "8px",
                  },
                  "& *::-webkit-scrollbar-track": {
                    backgroundColor: "transparent",
                    borderRadius: "4px",
                  },
                  "& *::-webkit-scrollbar-thumb": {
                    backgroundColor: "#3f3f46",
                    borderRadius: "4px",
                    transition: "background-color 0.2s ease-in-out",
                    "&:hover": {
                      backgroundColor: "#52525b",
                    },
                  },
                  "& *": {
                    scrollbarWidth: "thin",
                    scrollbarColor: "#3f3f46 transparent",
                  },
                },
                "& .MuiPickersCalendarHeader-root": {
                  color: "#fafafa",
                  padding: "1rem 1.25rem",
                  marginTop: 0,
                  marginBottom: "0.5rem",
                  "& .MuiPickersCalendarHeader-label": {
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    textTransform: "capitalize",
                    cursor: "pointer",
                    padding: "0.5rem 0.75rem",
                    borderRadius: "0.5rem",
                    transition: "all 0.2s ease-in-out",
                    userSelect: "none",
                    "&:hover": {
                      backgroundColor: "#18181b",
                      color: "#22d3ee",
                    },
                    "&:active": {
                      transform: "scale(0.98)",
                    },
                  },
                },
                "& .MuiPickersCalendarHeader-switchViewButton": {
                  color: "#a1a1aa",
                  padding: "0.5rem",
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    backgroundColor: "#18181b",
                    color: "#fafafa",
                  },
                },
                "& .MuiPickersArrowSwitcher-button": {
                  color: "#a1a1aa",
                  padding: "0.5rem",
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    backgroundColor: "#18181b",
                    color: "#fafafa",
                  },
                },
                "& .MuiDayCalendar-header": {
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                },
                "& .MuiDayCalendar-weekDayLabel": {
                  color: "#71717a",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  width: "2.5rem",
                  height: "2rem",
                  textTransform: "uppercase",
                },
                "& .MuiDayCalendar-slideTransition": {
                  minHeight: "16rem",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                  paddingBottom: "0.75rem",
                },
                "& .MuiPickersDay-root": {
                  color: "#fff",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "0.5rem",
                  transition: "all 0.15s ease-in-out",
                  "&:hover": {
                    backgroundColor: "#18181b",
                    transform: "scale(1.05)",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "#1AFFFF",
                    color: "#09090b",
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "#06b6d4",
                    },
                    "&:focus": {
                      backgroundColor: "#22d3ee",
                    },
                  },
                  "&.MuiPickersDay-today": {
                    border: "2px solid #3f3f46",
                    backgroundColor: "transparent",
                    "&:not(.Mui-selected)": {
                      color: "#fafafa",
                    },
                  },
                  "&.Mui-disabled": {
                    color: "#3f3f46",
                  },
                },
                "& .MuiPickersDay-dayOutsideMonth": {
                  color: "#52525b",
                  opacity: 0.5,
                },
                "& .MuiIconButton-root": {
                  color: "#a1a1aa",
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    backgroundColor: "#18181b",
                    color: "#fafafa",
                  },
                },
                "& .MuiYearCalendar-root": {
                  padding: "0.5rem",
                  "& > div": {
                    scrollBehavior: "smooth",
                  },
                },
                "& .MuiPickersYear-yearButton": {
                  color: "#e4e4e7",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  borderRadius: "0.5rem",
                  transition: "all 0.15s ease-in-out",
                  margin: "0.25rem 0",
                  "&:hover": {
                    backgroundColor: "#18181b",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "#22d3ee",
                    color: "#09090b",
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "#06b6d4",
                    },
                    "&:focus": {
                      backgroundColor: "#22d3ee",
                    },
                  },
                },
                "& .MuiMonthCalendar-root": {
                  width: "100%",
                  padding: "1rem",
                  "& > div": {
                    scrollBehavior: "smooth",
                  },
                },
                "& .MuiPickersMonth-monthButton": {
                  color: "#e4e4e7",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  borderRadius: "0.5rem",
                  transition: "all 0.15s ease-in-out",
                  margin: "0.25rem",
                  "&:hover": {
                    backgroundColor: "#18181b",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "#22d3ee",
                    color: "#09090b",
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "#06b6d4",
                    },
                  },
                },
              },
            },
          }}
        />
      </StyledDatePickerContainer>
    </LocalizationProvider>
  );
};
