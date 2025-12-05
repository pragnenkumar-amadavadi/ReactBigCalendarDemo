import type { Meta, StoryObj } from "@storybook/react";
import { CustomTimePicker } from "./TimePicker.component";
import dayjs from "dayjs";

const meta: Meta<typeof CustomTimePicker> = {
  title: "Components/TimePicker",
  component: CustomTimePicker,
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
type Story = StoryObj<typeof CustomTimePicker>;

export const Default: Story = {
  args: {
    label: "Select Time",
    value: dayjs(),
  },
};

export const Empty: Story = {
  args: {
    label: "Start Time",
    value: null,
  },
};

export const WithSeconds: Story = {
  args: {
    label: "Precise Time",
    value: dayjs(),
    views: ["hours", "minutes", "seconds"],
    format: "hh:mm:ss a",
  },
};

