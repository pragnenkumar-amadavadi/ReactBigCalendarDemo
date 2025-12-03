import {
  dayjsLocalizer,
  type EventProps,
  type NavigateAction,
  type SlotInfo,
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
  AddScheduleButton,
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
} from "./ReactBigCalendar.styled";
import { useMemo, useState } from "react";

import { Navigate as navigate } from "react-big-calendar";
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
  Plus,
} from "lucide-react";

const localizer = dayjsLocalizer(dayjs);

export interface CustomToolbarProps {
  date: Date;
  onNavigate: (action: NavigateAction) => void;
}

// Custom Toolbar Component
const CustomToolbar = ({ date, onNavigate }: CustomToolbarProps) => {
  const handleAddSchedule = () => {
    console.log("Add Schedule Clicked");
  };

  const handleChooseFromCalendar = () => {
    console.log("Choose from calendar Clicked");
  };

  return (
    <ToolbarContainer>
      <SectionTitle>Schedule Availability</SectionTitle>

      <TopRow>
        <div>
          <MainTitle>{dayjs(date).format("MMMM YYYY")}</MainTitle>
          <DateRangeLabel>
            Week of {dayjs(date).startOf("week").format("MMM D")} -{" "}
            {dayjs(date).endOf("week").format("MMM D")}
          </DateRangeLabel>
        </div>
        <AddScheduleButton onClick={handleAddSchedule}>
          Add Schedule <Plus size={16} />
        </AddScheduleButton>
      </TopRow>

      <ControlsRow>
        <ButtonGroup>
          <NavButton
            onClick={() => onNavigate(navigate.PREVIOUS)}
            aria-label="Previous week"
          >
            <ChevronLeft size={16} />
          </NavButton>
          <NavButton
            onClick={() => onNavigate(navigate.NEXT)}
            aria-label="Next week"
          >
            <ChevronRight size={16} />
          </NavButton>
        </ButtonGroup>

        <CalendarPickerButton onClick={handleChooseFromCalendar}>
          <CalendarIcon size={16} />
          Choose from calender
        </CalendarPickerButton>

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

const ReactBigCalendar = () => {
  const [date, setDate] = useState(new Date(2025, 9, 5)); // Oct 5, 2025 is Sunday

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
        views={["week"]}
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
        style={{
          height: "800px",
        }}
      />
    </CalendarWrapper>
  );
};

export { ReactBigCalendar };
