import type { Meta, StoryObj } from "@storybook/react";
import { CustomDialog } from "./Dialog.component";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const meta: Meta<typeof CustomDialog> = {
  title: "Components/Dialog",
  component: CustomDialog,
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
    open: { control: "boolean" },
    title: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof CustomDialog>;

const DialogWrapper = (args: React.ComponentProps<typeof CustomDialog>) => {
  const [open, setOpen] = useState(args.open || false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Open Dialog
      </Button>
      <CustomDialog {...args} open={open} onClose={handleClose}>
        <Typography>
          This is the content of the dialog. You can put any React node here.
        </Typography>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "flex-end",
            gap: "10px",
          }}
        >
          <Button
            onClick={handleClose}
            sx={{ color: "white", borderColor: "white" }}
            variant="outlined"
          >
            Cancel
          </Button>
          <Button onClick={handleClose} variant="contained" color="primary">
            Confirm
          </Button>
        </div>
      </CustomDialog>
    </>
  );
};

export const Default: Story = {
  args: {
    title: "Example Dialog",
    open: false,
  },
  render: (args) => <DialogWrapper {...args} />,
};

const LongContentDialogWrapper = (
  args: React.ComponentProps<typeof CustomDialog>
) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open Long Content Dialog
      </Button>
      <CustomDialog {...args} open={open} onClose={() => setOpen(false)}>
        {Array.from({ length: 10 }).map((_, i) => (
          <Typography key={i} paragraph>
            Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </Typography>
        ))}
      </CustomDialog>
    </>
  );
};

export const WithLongContent: Story = {
  args: {
    title: "Long Content Dialog",
    open: false,
  },
  render: (args) => <LongContentDialogWrapper {...args} />,
};
