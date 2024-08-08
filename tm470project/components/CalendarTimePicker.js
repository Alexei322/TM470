import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { MobileDateTimePicker } from "@mui/x-date-pickers";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import formTheme from "@/formTheme";

export default function CalendarTimePicker({ updateCalendarState }) {
  dayjs.extend(utc);
  const [selectedDate, setSelectedDate] = useState(dayjs.utc());

  useEffect(() => {
    updateCalendarState(selectedDate);
  }, [selectedDate]);

  return (
    <ThemeProvider theme={formTheme}>
      <div className={"flex justify-center pt-6"}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDateTimePicker
            minDate={dayjs.utc()}
            maxDate={dayjs.utc().add(1, "year")}
            defaultValue={dayjs.utc().hour(12).minute(0)}
            onChange={setSelectedDate}
            minutesStep={10}
            minTime={dayjs().hour(9).minute(30)}
            maxTime={dayjs().hour(18).minute(0)}
            ampm={false}
          />
        </LocalizationProvider>
      </div>
    </ThemeProvider>
  );
}
