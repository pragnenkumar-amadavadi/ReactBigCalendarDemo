import {
  dayjsLocalizer,
  type EventProps,
  type NavigateAction,
  type SlotInfo,
  type ToolbarProps,
} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import {
  StyleReactBigCalendar,
  CalendarWrapper,
  ToolbarContainer,
  SectionTitle,
  TopRow,
  MainTitle,
  DateRangeLabel,
  ControlsRow,
  ButtonGroup,
  NavButton,
  CalendarPickerButton,
  LegendContainer,
  LegendItem,
  HeaderContainer,
  HeaderDate,
  HeaderDay,
  EventContainer,
  EventCard,
  EventPill,
  EventTime,
  EventDuration,
  GutterHeaderContainer,
  GutterWrapperContainer,
  HiddenDatePickerContainer,
} from "./ReactBigCalendar.styled";
import { useMemo, useState, useRef } from "react";

import { Navigate as navigate, type ViewStatic } from "react-big-calendar";
import TimeGrid from "react-big-calendar/lib/TimeGrid";
import type { DateLocalizer } from "react-big-calendar";
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

  const handleChooseFromCalendar = () => {
    setIsDatePickerOpen(true);
  };

  const handleDateChange = (newDate: any) => {
    if (newDate) {
      onNavigate(navigate.DATE, newDate.toDate());
      setIsDatePickerOpen(false);
    }
  };

  return (
    <ToolbarContainer>
      <SectionTitle>Schedule Availability</SectionTitle>

      <TopRow>
        <div>
          <MainTitle>{dayjs(date).format("MMMM YYYY")}</MainTitle>
          <DateRangeLabel>
            Week of {dayjs(date).format("MMM D")} -{" "}
            {dayjs(date).add(7, "day").format("MMM D")}
          </DateRangeLabel>
        </div>
      </TopRow>

      <ControlsRow>
        <ButtonGroup>
          <NavButton
            onClick={() => onNavigate(navigate.PREVIOUS)}
            aria-label="Previous week"
          >
            <ChevronLeft size="1.6rem" />
          </NavButton>
          <NavButton
            onClick={() => onNavigate(navigate.NEXT)}
            aria-label="Next week"
          >
            <ChevronRight size="1.6rem" />
          </NavButton>
        </ButtonGroup>

        <CalendarPickerButton
          ref={datePickerAnchor}
          onClick={handleChooseFromCalendar}
        >
          <CalendarIcon size="1.6rem" />
          Choose from calender
        </CalendarPickerButton>

        {/* Hidden DatePicker */}
        <HiddenDatePickerContainer>
          <CustomDatePicker
            open={isDatePickerOpen}
            onClose={() => setIsDatePickerOpen(false)}
            value={dayjs(date)}
            onChange={handleDateChange}
            slotProps={{
              popper: {
                anchorEl: datePickerAnchor.current,
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
        </HiddenDatePickerContainer>

        <LegendContainer>
          <LegendItem color="#22d3ee">Booked</LegendItem>
          <LegendItem color="#525252">Available</LegendItem>
        </LegendContainer>
      </ControlsRow>
    </ToolbarContainer>
  );
};

// Custom Header Component for Days
const CustomDateHeader = ({ date }: { date: Date }) => {
  return (
    <HeaderContainer>
      <HeaderDate>{dayjs(date).format("DD MMM")}</HeaderDate>
      <HeaderDay>{dayjs(date).format("ddd")}</HeaderDay>
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
      <EventCard>
        <EventPill>Scheduled</EventPill>
        <EventTime>
          {start.format("hh:mm A")} - {end.format("hh:mm A")}
        </EventTime>
        <EventDuration>{duration} Hours</EventDuration>
      </EventCard>
    </EventContainer>
  );
};

interface CustomWeekViewProps {
  date: Date;
  localizer: DateLocalizer;
  max?: Date;
  min?: Date;
  scrollToTime?: Date;
  [key: string]: any;
}

const CustomWeekView: React.FC<CustomWeekViewProps> & ViewStatic = ({
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
CustomWeekView.title = (
  date: Date,
  { localizer }: { localizer: DateLocalizer }
) => {
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
      toolbar: (props: ToolbarProps) => <CustomToolbar {...props} />,
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
