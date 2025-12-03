// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, vue3-vite, etc.

import type { Meta, StoryObj } from "@storybook/react-vite";
import { ReactBigCalendar } from "./ReactBigCalendar.component";

const meta = {
  component: ReactBigCalendar,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
        default: 'dark',
        values: [
            { name: 'dark', value: '#000000' },
            { name: 'light', value: '#ffffff' },
        ]
    }
  }
} satisfies Meta<typeof ReactBigCalendar>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    render: () => (
        <div style={{ height: '100vh', width: '100vw', backgroundColor: '#000000' }}>
            <ReactBigCalendar />
        </div>
    )
};

export const Primary = {
  args: {},
} satisfies Story;
