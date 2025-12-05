import { styled } from "@mui/material/styles";
import { Calendar, type CalendarProps } from "react-big-calendar";

// Main Calendar Wrapper
export const CalendarWrapper = styled("div")(() => ({
  minHeight: "100%",
  width: "100%",
  backgroundColor: "#000000", // Dark background
  color: "#ffffff",
  padding: "2rem",
  boxSizing: "border-box",
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',

  // Customize Scrollbar for the calendar container
  "& ::-webkit-scrollbar": {
    width: "0.8rem",
    height: "0.8rem",
  },
  "& ::-webkit-scrollbar-track": {
    background: "#0a0a0a",
  },
  "& ::-webkit-scrollbar-thumb": {
    background: "#333",
    borderRadius: "0.4rem",
  },
  "& ::-webkit-scrollbar-thumb:hover": {
    background: "#555",
  },
}));

export const StyleReactBigCalendar = styled(Calendar)<CalendarProps>(() => ({
  height: "calc(100vh - 4rem)",
  // General Overrides
  "&.rbc-calendar": {
    color: "#9ca3af", // Default text color
  },

  // Header (Days of the week)
  ".rbc-header": {
    padding: "1.2rem 0",
    fontWeight: 500,
    borderBottom: "none",
    borderLeft: "none", // Vertical grid lines
    "& + .rbc-header": {
      borderLeft: "0.1rem solid #333",
    },
    overflow: "visible",
    flexBasis: "14.2857% !important",
    maxWidth: "14.2857% !important", // Ensure headers don't grow
    backgroundColor: "#0a0a0a", // Match header bg
  },

  // The container for the headers
  ".rbc-time-header-content": {
    borderLeft: "0.1rem solid #333",
    marginBottom: "0rem",
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
      minHeight: "10rem !important", // Force height to match slots
    },
  },

  // The main grid area
  ".rbc-time-content": {
    borderTop: "0.1rem solid #333", // Top of the grid
    borderLeft: "none", // Handled by gutter right border

    // Vertical lines between days
    ".rbc-day-slot": {
      borderLeft: "0.1rem solid #333",
    },

    // Horizontal lines (timeslots)
    ".rbc-timeslot-group": {
      borderBottom: "0.1rem solid #333",
      minHeight: "10rem !important", // Force height to match gutter
    },
  },

  // Remove default borders
  ".rbc-time-view": {
    border: "0.1rem solid #333",
    borderRadius: "1rem",
    overflow: "hidden",
  },
  ".rbc-time-header.rbc-overflowing": {
    borderRight: "none",
    marginRight: "0.8rem !important", // Match the custom scrollbar width
  },

  // Fix the header/grid alignment when scrolling
  // ".rbc-header" handled above, merging logic there.

  // Current Time Indicator
  ".rbc-current-time-indicator": {
    backgroundColor: "#22d3ee",
    display: "none", // Add this line to hide it
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
    borderRadius: "0.4rem",
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
    marginRight: "0rem",
  },

  ".rbc-event-container": {
    borderTop: "none",
    borderRight: "0.2rem solid #1AFFFF1A",
  },

  ".rbc-allday-cell": {
    display: "none",
  },

  ".rbc-time-content > * + * > *": {
    borderLeft: "none",
  },

  ".rbc-time-slot": {
    borderTop: "0.1rem solid #333",

    "&:first-of-type": {
      borderTop: "none",
    },
  },
}));

// --- Custom Toolbar Components ---

export const ToolbarContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
  marginBottom: "2.4rem",
  backgroundColor: "#000000",

  // Top Row Section
  "& .toolbar-top-row": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",

    "& .section-title": {
      fontSize: "0.875rem",
      color: "#9ca3af",
      marginBottom: "0.4rem",
    },

    "& h2": {
      margin: 0,
      fontSize: "2rem", // Larger as per image
      fontWeight: 600,
      color: "#ffffff",
      lineHeight: 1,
    },

    "& .date-range-label": {
      fontSize: "0.875rem",
      color: "#9ca3af",
      marginTop: "0.8rem",
    },
  },

  // Controls Row Section
  "& .toolbar-controls-row": {
    display: "flex",
    alignItems: "center",
    gap: "1.2rem",
    marginTop: "1.2rem",

    "& .button-group": {
      display: "flex",
      backgroundColor: "#1f1f1f",
      borderRadius: "0.6rem",
      padding: "0.4rem",
      border: "0.1rem solid #333",

      "& button": {
        backgroundColor: "transparent",
        border: "none",
        color: "#9ca3af",
        padding: "0.6rem 1rem",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
          color: "#ffffff",
        },
      },
    },

    "& .calendar-picker-btn": {
      backgroundColor: "#1f1f1f",
      border: "0.1rem solid #333",
      borderRadius: "0.6rem",
      color: "#9ca3af",
      padding: "0.8rem 1.6rem",
      fontSize: "0.875rem",
      display: "flex",
      alignItems: "center",
      gap: "0.8rem",
      cursor: "pointer",
      "&:hover": {
        borderColor: "#555",
        color: "#ffffff",
      },
    },

    "& .hidden-datepicker": {
      position: "absolute",
      visibility: "hidden",
    },

    "& .legend-container": {
      display: "flex",
      alignItems: "center",
      gap: "1.6rem",
      backgroundColor: "#1f1f1f",
      padding: "0.8rem 1.6rem",
      borderRadius: "0.6rem",
      border: "0.1rem solid #333",
      marginLeft: "0rem",

      "& .legend-item": {
        display: "flex",
        alignItems: "center",
        gap: "0.8rem",
        fontSize: "0.875rem",
        color: "#9ca3af",
        "&::before": {
          content: '""',
          display: "block",
          width: "1.2rem",
          height: "1.2rem",
          borderRadius: "0.3rem",
          backgroundColor: "transparent",
        },
        "&.booked::before": {
          border: "0.2rem solid #22d3ee",
        },
        "&.available::before": {
          border: "0.2rem solid #525252",
        },
      },
    },
  },
});

// --- Custom Header Component Styles ---

export const HeaderContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.8rem 0",
  height: "100%",
  backgroundColor: "#0a0a0a",

  "& .header-date": {
    fontSize: "1.1rem",
    fontWeight: 600,
    color: "#ffffff",
    lineHeight: 1.2,
    marginBottom: "0.4rem",
  },

  "& .header-day": {
    fontSize: "0.875rem",
    fontWeight: 500,
    color: "#9ca3af",
  },
});

// --- Custom Event Component Styles ---

export const EventContainer = styled("div")({
  width: "100%",
  height: "100%",
  padding: "0rem",
  display: "flex",

  "& .event-card": {
    width: "100%",
    height: "100%",
    borderLeft: "0.3rem solid #22d3ee",
    backgroundColor: "#0e2a2e", // Very dark teal
    borderRadius: "0 0.4rem 0.4rem 0",
    color: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.6rem",
    padding: "0.8rem",
    cursor: "pointer",
    transition: "background-color 0.2s",
    boxSizing: "border-box",

    "&:hover": {
      backgroundColor: "#13383d",
    },

    "& .event-pill": {
      backgroundColor: "rgba(34, 211, 238, 0.1)",
      color: "#22d3ee",
      fontSize: "0.7rem",
      fontWeight: 600,
      padding: "0.2rem 0.8rem",
      borderRadius: "1.2rem",
      marginBottom: "0.4rem",
    },

    "& .event-time": {
      fontSize: "0.75rem",
      fontWeight: 500,
      color: "#ffffff",
      textAlign: "center",
    },

    "& .event-duration": {
      fontSize: "0.7rem",
      color: "#9ca3af",
      marginTop: "0.2rem",
    },
  },
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
