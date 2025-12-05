import {
  dayjsLocalizer,
  type EventProps,
  type NavigateAction,
  type SlotInfo,
  type DateLocalizer,
  Navigate as navigate,
  type TitleOptions,
} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import {
  StyleReactBigCalendar,
  CalendarWrapper,
  ToolbarContainer,
  HeaderContainer,
  EventContainer,
  GutterHeaderContainer,
  GutterWrapperContainer,
} from "./ReactBigCalendar.styled";
import { useMemo, useState, useRef, useEffect } from "react";
// @ts-expect-error TimeGrid does not have types exported directly
import TimeGrid from "react-big-calendar/lib/TimeGrid";
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
} from "lucide-react";

const localizer = dayjsLocalizer(dayjs);

import { CustomDatePicker } from "../DatePicker/DatePicker.component";

export interface CustomToolbarProps {
  date: Date;
  onNavigate: (action: NavigateAction, newDate?: Date) => void;
}

// Custom Toolbar Component
const CustomToolbar = ({ date, onNavigate }: CustomToolbarProps) => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const datePickerAnchor = useRef<HTMLButtonElement>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  // Sync ref to state to safely use in render
  useEffect(() => {
    setAnchorEl(datePickerAnchor.current);
  }, []);

  const handleChooseFromCalendar = () => {
    setIsDatePickerOpen(true);
  };

  const handleDateChange = (newDate: dayjs.Dayjs | null) => {
    if (newDate) {
      onNavigate(navigate.DATE, newDate.toDate());
      setIsDatePickerOpen(false);
    }
  };

  return (
    <ToolbarContainer>
      <div className="toolbar-top-row">
        <div>
          <div className="section-title">Schedule Availability</div>
          <h2>{dayjs(date).format("MMMM YYYY")}</h2>
          <div className="date-range-label">
            Week of {dayjs(date).format("MMM D")} -{" "}
            {dayjs(date).add(7, "day").format("MMM D")}
          </div>
        </div>
      </div>

      <div className="toolbar-controls-row">
        <div className="button-group">
          <button
            onClick={() => onNavigate(navigate.PREVIOUS)}
            aria-label="Previous week"
          >
            <ChevronLeft size="1.6rem" />
          </button>
          <button
            onClick={() => onNavigate(navigate.NEXT)}
            aria-label="Next week"
          >
            <ChevronRight size="1.6rem" />
          </button>
        </div>

        <button
          ref={datePickerAnchor}
          className="calendar-picker-btn"
          onClick={handleChooseFromCalendar}
        >
          <CalendarIcon size="1.6rem" />
          Choose from calender
        </button>

        {/* Hidden DatePicker */}
        <div className="hidden-datepicker">
          <CustomDatePicker
            open={isDatePickerOpen}
            onClose={() => setIsDatePickerOpen(false)}
            value={dayjs(date)}
            onChange={handleDateChange}
            slotProps={{
              popper: {
                anchorEl: anchorEl,
                placement: "bottom-start",
                modifiers: [
                  {
                    name: "offset",
                    options: {
                      offset: [0, 10],
                    },
                  },
                  {
                    name: "flip",
                    enabled: true,
                  },
                  {
                    name: "preventOverflow",
                    enabled: true,
                  },
                ],
              },
            }}
          />
        </div>

        <div className="legend-container">
          <div className="legend-item booked">Booked</div>
          <div className="legend-item available">Available</div>
        </div>
      </div>
    </ToolbarContainer>
  );
};

// Custom Header Component for Days
const CustomDateHeader = ({ date }: { date: Date }) => {
  return (
    <HeaderContainer>
      <span className="header-date">{dayjs(date).format("DD MMM")}</span>
      <span className="header-day">{dayjs(date).format("ddd")}</span>
    </HeaderContainer>
  );
};

// Custom Time Gutter Header
const CustomTimeGutterHeader = () => {
  return <GutterHeaderContainer>Time</GutterHeaderContainer>;
};

// Custom Time Gutter Wrapper
const CustomTimeGutterWrapper = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return <GutterWrapperContainer>{children}</GutterWrapperContainer>;
};

// Custom Event Component
const CustomEvent = ({ event }: EventProps) => {
  // Calculate duration in hours for display
  const start = dayjs(event.start);
  const end = dayjs(event.end);
  const duration = end.diff(start, "hour");

  return (
    <EventContainer>
      <div className="event-card">
        <div className="event-pill">Scheduled</div>
        <div className="event-time">
          {start.format("hh:mm A")} - {end.format("hh:mm A")}
        </div>
        <div className="event-duration">{duration} Hours</div>
      </div>
    </EventContainer>
  );
};

interface CustomWeekViewProps {
  date: Date;
  localizer: DateLocalizer;
  max?: Date;
  min?: Date;
  scrollToTime?: Date;
  [key: string]: unknown;
}

// Define an interface that extends the component type with static methods
interface CustomWeekViewStatic extends React.FC<CustomWeekViewProps> {
  range: (date: Date, { localizer }: { localizer: DateLocalizer }) => Date[];
  navigate: (
    date: Date,
    action: NavigateAction,
    { localizer }: { localizer: DateLocalizer }
  ) => Date;
  title: (date: Date, options: TitleOptions) => string;
}

const CustomWeekView: CustomWeekViewStatic = ({
  date,
  localizer,
  max = localizer.endOf(new Date(), "day"),
  min = localizer.startOf(new Date(), "day"),
  scrollToTime = localizer.startOf(new Date(), "day"),
  ...props
}) => {
  const currRange = useMemo(
    () => CustomWeekView.range(date, { localizer }),
    [date, localizer]
  );

  return (
    <TimeGrid
      date={date}
      eventOffset={15}
      localizer={localizer}
      max={max}
      min={min}
      range={currRange}
      scrollToTime={scrollToTime}
      {...props}
    />
  );
};

// 1. Calculate the 7-day range starting from the 'date' passed in
CustomWeekView.range = (
  date: Date,
  { localizer }: { localizer: DateLocalizer }
) => {
  const start = date;
  const end = localizer.add(start, 6, "day");

  let current = start;
  const range = [];

  while (localizer.lte(current, end, "day")) {
    range.push(current);
    current = localizer.add(current, 1, "day");
  }

  return range;
};

// 2. Handle Navigation (Next/Prev jumps 7 days)
CustomWeekView.navigate = (
  date: Date,
  action: NavigateAction,
  { localizer }: { localizer: DateLocalizer }
) => {
  switch (action) {
    case navigate.PREVIOUS:
      return localizer.add(date, -7, "day");

    case navigate.NEXT:
      return localizer.add(date, 7, "day");

    default:
      return date;
  }
};

// 3. Set the Title in the toolbar
CustomWeekView.title = (date: Date, options: TitleOptions) => {
  // Cast options to unknown first to avoid type overlap error
  const { localizer } = options as unknown as { localizer: DateLocalizer };
  const range = CustomWeekView.range(date, { localizer });
  return `${localizer.format(range[0], "MMM DD")} - ${localizer.format(
    range[6],
    "MMM DD"
  )}`;
};

const ReactBigCalendar = () => {
  const [date, setDate] = useState(new Date());

  const events = useMemo(
    () => [
      {
        id: 1,
        title: "Scheduled",
        start: new Date(2025, 9, 2, 10, 0), // Thu Oct 2 10:00
        end: new Date(2025, 9, 2, 14, 0), // Thu Oct 2 14:00
      },
      {
        id: 2,
        title: "Scheduled",
        start: new Date(2025, 9, 3, 12, 0), // Fri Oct 3 12:00
        end: new Date(2025, 9, 3, 16, 0), // Fri Oct 3 16:00
      },
      {
        id: 3,
        title: "Scheduled",
        start: new Date(2025, 9, 4, 10, 0), // Sat Oct 4 10:00
        end: new Date(2025, 9, 4, 14, 0), // Sat Oct 4 14:00
      },
      {
        id: 4,
        title: "Scheduled",
        start: new Date(2025, 9, 5, 12, 30), // Sun Oct 5 12:30
        end: new Date(2025, 9, 5, 16, 30), // Sun Oct 5 16:30
      },
      {
        id: 5,
        title: "Scheduled",
        start: new Date(2025, 9, 6, 14, 0), // Mon Oct 6 14:00
        end: new Date(2025, 9, 6, 18, 0), // Mon Oct 6 18:00
      },
      {
        id: 6,
        title: "Scheduled",
        start: new Date(2025, 9, 7, 10, 0), // Tue Oct 7 10:00
        end: new Date(2025, 9, 7, 14, 0), // Tue Oct 7 14:00
      },
      {
        id: 7,
        title: "Scheduled",
        start: new Date(2025, 9, 8, 11, 0), // Wed Oct 8 11:00
        end: new Date(2025, 9, 8, 15, 0), // Wed Oct 8 15:00
      },
    ],
    []
  );

  const handleSelectSlot = (slotInfo: SlotInfo) => {
    console.log("Selected slot:", slotInfo);
  };

  const handleSelectEvent = (event: object) => {
    console.log("Selected event:", event);
  };

  const { views } = useMemo(
    () => ({
      views: {
        week: CustomWeekView,
      },
    }),
    []
  );

  const components = useMemo(
    () => ({
      toolbar: CustomToolbar,
      timeGutterHeader: CustomTimeGutterHeader,
      timeGutterWrapper: CustomTimeGutterWrapper,
      week: {
        header: CustomDateHeader,
        event: CustomEvent,
      },
    }),
    []
  );

  const handleNavigate = (newDate: Date) => {
    setDate(newDate);
  };

  return (
    <CalendarWrapper>
      <StyleReactBigCalendar
        localizer={localizer}
        events={events}
        defaultView={"week"}
        views={views}
        step={60}
        timeslots={1}
        date={date}
        onNavigate={handleNavigate}
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        components={components}
        selectable
        min={new Date(0, 0, 0, 0, 0, 0)}
        max={new Date(0, 0, 0, 23, 59, 59)}
      />
    </CalendarWrapper>
  );
};

export { ReactBigCalendar };
