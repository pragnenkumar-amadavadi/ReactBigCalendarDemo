import { type TimePickerProps as MuiTimePickerProps } from "@mui/x-date-pickers/TimePicker";

export interface CustomTimePickerProps extends MuiTimePickerProps {
  label?: string;
}
