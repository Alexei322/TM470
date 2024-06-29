import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useEffect, useState } from "react";

export default function CalendarTimePicker({updateCalendarState}) {
  dayjs.extend(utc);
  const [selectedDate, setSelectedDate] = useState(dayjs.utc());

  useEffect(() => {
    updateCalendarState(selectedDate);
  }, [selectedDate]);

  return (
    <div className={"flex justify-center pt-6"}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          defaultValue={selectedDate}
          onChange={setSelectedDate}
        />
      </LocalizationProvider>
    </div>
  );
}
