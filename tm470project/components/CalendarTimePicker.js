import dayjs from "dayjs";
import 'dayjs/locale/en-gb';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import formTheme from "@/formTheme";


export default function CalendarTimePicker({ updateCalendarState }) {
  const [selectedDate, setSelectedDate] = useState(dayjs().hour(12).minute(0));

  useEffect(() => {
    updateCalendarState(selectedDate);
  }, [selectedDate]);

  return (
    <ThemeProvider theme={formTheme}>
      <div className={"flex justify-center pt-6"}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en-gb'>
          <MobileDateTimePicker
            minDate={dayjs()}
            maxDate={dayjs().add(1, "year")}
            defaultValue={selectedDate}
            onChange={setSelectedDate}
            minutesStep={10}
            minTime={dayjs().hour(9).minute(30)}
            maxTime={dayjs().hour(18).minute(0)}
            ampm={false}
            inputFormat="dd/MM/yyyy"
          />
        </LocalizationProvider>
      </div>
    </ThemeProvider>
  );
}
