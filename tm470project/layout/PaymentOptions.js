import Button from "@mui/material/Button";

export default function PaymentOptions() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-row pt-5 items-center justify-between w-1/4">
        <Button variant="contained" size="large">
          Card
        </Button>
        <Button variant="contained" size="large">
          Card offline{" "}
        </Button>
      </div>
      <div className="flex flex-row pt-5 items-center justify-between w-1/4">
        <Button variant="contained">Receipt </Button>
        <Button variant="contained">E-Receipt </Button>
      </div>
    </div>
  );
}
