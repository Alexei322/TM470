import Button from "@mui/material/Button";

export default function MaterialButton({ text }) {
  return (
    <Button variant="contained" color="primary">
      {text}
    </Button>
  );
}
