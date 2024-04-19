import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export default function CalendarTimePicker() {
  return (
    <div className={"flex justify-center pt-6"}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker />
      </LocalizationProvider>
    </div>
  );
}
