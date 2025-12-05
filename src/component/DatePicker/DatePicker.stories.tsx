import type { Meta, StoryObj } from "@storybook/react";
import { CustomDatePicker } from "./DatePicker.component";
import dayjs, { type Dayjs } from "dayjs";
import { useState } from "react";
import type { CustomDatePickerProps } from "./DatePicker.type";

const meta: Meta<typeof CustomDatePicker> = {
  title: "Components/DatePicker",
  component: CustomDatePicker,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#000000" },
        { name: "light", value: "#ffffff" },
      ],
    },
  },
  argTypes: {
    label: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof CustomDatePicker>;

const DatePickerWithState = (
  props: CustomDatePickerProps & { initialValue: Dayjs | null }
) => {
  const { initialValue, ...restProps } = props;
  const [value, setValue] = useState<Dayjs | null>(initialValue);
  return (
    <CustomDatePicker
      {...restProps}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    />
  );
};

export const Default: Story = {
  render: (args: CustomDatePickerProps) => (
    <DatePickerWithState {...args} initialValue={dayjs()} />
  ),
  args: {
    label: "Select Date",
  },
};

export const Empty: Story = {
  render: (args: CustomDatePickerProps) => (
    <DatePickerWithState {...args} initialValue={null} />
  ),
  args: {
    label: "Start Date",
  },
};

export const WithoutLabel: Story = {
  render: (args: CustomDatePickerProps) => (
    <DatePickerWithState {...args} initialValue={dayjs()} />
  ),
  args: {},
};
