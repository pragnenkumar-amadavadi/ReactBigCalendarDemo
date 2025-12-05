import { type DatePickerProps as MuiDatePickerProps } from "@mui/x-date-pickers/DatePicker";

export interface CustomDatePickerProps extends MuiDatePickerProps {
  label?: string;
}
