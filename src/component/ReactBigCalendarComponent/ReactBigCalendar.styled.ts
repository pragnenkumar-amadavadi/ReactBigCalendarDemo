import { styled } from "@mui/material/styles";
import { Calendar, type CalendarProps } from "react-big-calendar";

// Main Calendar Wrapper
export const CalendarWrapper = styled("div")(() => ({
  height: "100%",
  width: "100%",
  backgroundColor: "#000000", // Dark background
  color: "#ffffff",
  padding: "20px",
  boxSizing: "border-box",
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',

  // Customize Scrollbar for the calendar container
  "& ::-webkit-scrollbar": {
    width: "8px",
    height: "8px",
  },
  "& ::-webkit-scrollbar-track": {
    background: "#0a0a0a",
  },
  "& ::-webkit-scrollbar-thumb": {
    background: "#333",
    borderRadius: "4px",
  },
  "& ::-webkit-scrollbar-thumb:hover": {
    background: "#555",
  },
}));

export const StyleReactBigCalendar = styled(Calendar)<CalendarProps>(() => ({
  // General Overrides
  "&.rbc-calendar": {
    color: "#9ca3af", // Default text color
  },

  // Header (Days of the week)
  ".rbc-header": {
    padding: "12px 0",
    fontWeight: 500,
    borderBottom: "none",
    borderLeft: "none", // Vertical grid lines
    "& + .rbc-header": {
      borderLeft: "1px solid #333",
    },
    overflow: "visible",
    flexBasis: "14.2857% !important",
    maxWidth: "14.2857% !important", // Ensure headers don't grow
    backgroundColor: "#0a0a0a", // Match header bg
  },

  // The container for the headers
  ".rbc-time-header-content": {
    borderLeft: "1px solid #333",
    marginBottom: "0px",
  },

  // Remove the top border of the time header
  ".rbc-time-header": {
    borderTop: "none",
  },

  // Time Gutter (Left side times)
  ".rbc-time-gutter": {
    backgroundColor: "#0a0a0a", // Match image dark bg
    borderRight: "none", // Right border of the gutter
    ".rbc-timeslot-group": {
      borderBottom: "none", // Horizontal grid lines in gutter
      color: "#9ca3af", // Time label color
      fontSize: "0.875rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center", // Center align time labels
      padding: "0",
      minHeight: "100px !important", // Force height to match slots
    },
  },

  // The main grid area
  ".rbc-time-content": {
    borderTop: "1px solid #333", // Top of the grid
    borderLeft: "none", // Handled by gutter right border

    // Vertical lines between days
    ".rbc-day-slot": {
      borderLeft: "1px solid #333",
    },

    // Horizontal lines (timeslots)
    ".rbc-timeslot-group": {
      borderBottom: "1px solid #333",
      minHeight: "100px !important", // Force height to match gutter
    },
  },

  // Remove default borders
  ".rbc-time-view": {
    border: "none",
  },
  ".rbc-time-header.rbc-overflowing": {
    borderRight: "none",
    marginRight: "8px !important", // Match the custom scrollbar width
  },

  // Fix the header/grid alignment when scrolling
  // ".rbc-header" handled above, merging logic there.

  // Current Time Indicator
  ".rbc-current-time-indicator": {
    backgroundColor: "#22d3ee",
  },

  // Today highlight
  ".rbc-today": {
    backgroundColor: "transparent",
  },

  // Event Styles
  ".rbc-event": {
    backgroundColor: "transparent",
    border: "none",
    padding: 0,
    borderRadius: "4px",
    "&:focus": {
      outline: "none",
    },

    // Hide the default label (time range) rendered by RBC
    ".rbc-event-label": {
      display: "none !important",
    },

    "> div": {
      padding: 0,
    },
  },

  ".rbc-events-container ": {
    marginRight: "0px",
  },

  ".rbc-event-container": {
    borderTop: "none",
    borderRight: "2px solid #1AFFFF1A",
  },

  ".rbc-allday-cell": {
    display: "none",
  },

  ".rbc-time-content > * + * > *": {
    borderLeft: "none",
  },

  ".rbc-time-slot": {
    borderTop: "1px solid #333",

    "&:first-of-type": {
      borderTop: "none",
    },
  },
}));

// --- Custom Toolbar Components ---

export const ToolbarContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  marginBottom: "24px",
  backgroundColor: "#000000",
});

export const SectionTitle = styled("div")({
  fontSize: "0.875rem",
  color: "#9ca3af",
  marginBottom: "4px",
});

export const TopRow = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
});

export const MainTitle = styled("h2")({
  margin: 0,
  fontSize: "2rem", // Larger as per image
  fontWeight: 600,
  color: "#ffffff",
  lineHeight: 1,
});

export const DateRangeLabel = styled("div")({
  fontSize: "0.875rem",
  color: "#9ca3af",
  marginTop: "8px",
});

export const AddScheduleButton = styled("button")({
  backgroundColor: "#22d3ee",
  color: "#000000",
  border: "none",
  borderRadius: "6px",
  padding: "10px 20px",
  fontSize: "0.875rem",
  fontWeight: 600,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "6px",
  transition: "background-color 0.2s",
  "&:hover": {
    backgroundColor: "#67e8f9",
  },
});

export const ControlsRow = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginTop: "12px",
});

export const ButtonGroup = styled("div")({
  display: "flex",
  backgroundColor: "#1f1f1f",
  borderRadius: "6px",
  padding: "4px",
  border: "1px solid #333",
});

export const NavButton = styled("button")({
  backgroundColor: "transparent",
  border: "none",
  color: "#9ca3af",
  padding: "6px 10px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    color: "#ffffff",
  },
});

export const CalendarPickerButton = styled("button")({
  backgroundColor: "#1f1f1f",
  border: "1px solid #333",
  borderRadius: "6px",
  color: "#9ca3af",
  padding: "8px 16px",
  fontSize: "0.875rem",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  cursor: "pointer",
  "&:hover": {
    borderColor: "#555",
    color: "#ffffff",
  },
});

export const LegendContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  backgroundColor: "#1f1f1f",
  padding: "8px 16px",
  borderRadius: "6px",
  border: "1px solid #333",
  marginLeft: "0px", // Reset margin
});

export const LegendItem = styled("div")<{ color: string }>(({ color }) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "0.875rem",
  color: "#9ca3af",
  "&::before": {
    content: '""',
    display: "block",
    width: "12px",
    height: "12px",
    borderRadius: "3px",
    backgroundColor: "transparent",
    border: `2px solid ${color}`,
  },
}));

// --- Custom Header Component Styles ---

export const HeaderContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "8px 0",
  height: "100%",
  backgroundColor: "#0a0a0a",
});

export const HeaderDate = styled("span")({
  fontSize: "1.1rem",
  fontWeight: 600,
  color: "#ffffff",
  lineHeight: 1.2,
  marginBottom: "4px",
});

export const HeaderDay = styled("span")({
  fontSize: "0.875rem",
  fontWeight: 500,
  color: "#9ca3af",
});

// --- Custom Event Component Styles ---

export const EventContainer = styled("div")({
  width: "100%",
  height: "100%",
  padding: "0px",
  display: "flex",
});

export const EventCard = styled("div")({
  width: "100%",
  height: "100%",
  borderLeft: "3px solid #22d3ee", // Left border based on image
  // Actually image shows the box has a background.
  // Let's try a subtle background with a stronger indicator if needed.
  // The image shows a solid block.
  backgroundColor: "#0e2a2e", // Very dark teal
  borderRadius: "0 4px 4px 0", // Square left corners for the border
  color: "#ffffff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center", // Center content horizontally
  justifyContent: "center", // Center content vertically
  gap: "6px",
  padding: "8px",
  cursor: "pointer",
  transition: "background-color 0.2s",
  boxSizing: "border-box",
  "&:hover": {
    backgroundColor: "#13383d",
  },
});

export const EventPill = styled("div")({
  backgroundColor: "rgba(34, 211, 238, 0.1)",
  color: "#22d3ee",
  fontSize: "0.7rem",
  fontWeight: 600,
  padding: "2px 8px",
  borderRadius: "12px",
  marginBottom: "4px",
});

export const EventTime = styled("div")({
  fontSize: "0.75rem",
  fontWeight: 500,
  color: "#ffffff",
  textAlign: "center",
});

export const EventDuration = styled("div")({
  fontSize: "0.7rem",
  color: "#9ca3af",
  marginTop: "2px",
});

// --- Custom Time Gutter Components ---

export const GutterHeaderContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  color: "#9ca3af",
  fontSize: "0.875rem",
  fontWeight: 500,
  backgroundColor: "#0a0a0a",
  borderBottom: "none",
});

export const GutterWrapperContainer = styled("div")({
  // This wraps the gutter content
  // We can use this to enforce background or styling
  backgroundColor: "#0a0a0a",
});
