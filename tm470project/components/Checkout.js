import {
  Box,
  Button,
  Fade,
  Modal,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { createTheme } from "@mui/material/styles";

export default function Checkout() {
  const theme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#FF90BC",
      },
      secondary: {
        main: "#81F4E1",
      },
      background: {
        default: "#ff90f4",
      },
      error: {
        main: "#ffd390",
      },
      text: {
        primary: "#ffffff",
      },
    },
  });
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "50%",
    transform: "translate(-50%, -50%)",
    border: "10px solid #FF90BC",
    borderRadius: "1rem",
    padding: "1rem",
  };
  const [isOpen, setisOpen] = useState(false);
  const handleOpen = () => {
    setisOpen(true);
  };
  const handleClose = () => {
    setisOpen(false);
  };
  const { register, handleSubmit } = useForm();
  return (
    <>
      <Button onClick={handleOpen} variant="contained" style={{ width: "25%" }}>
        Checkout
      </Button>
      <Modal
        open={isOpen}
        onClose={handleClose}
        slotProps={{
          backdrop: { style: { backgroundColor: "rgba(0,0,0,0.95)" } },
        }}
      >
        <Fade in={isOpen} timeout={500}>
          <Box style={style}>
            <TextField
              id="name"
              label="Name on card"
              fullWidth
              required
            ></TextField>
            <TextField
              id="cardNumber"
              label="Card number"
              fullWidth
              required
            ></TextField>
            <TextField
              id="expDate"
              label="Expiry date"
              fullWidth
              required
            ></TextField>
            <TextField
              id="ccv"
              label="CCV number (3 digits on the back of the card)"
              fullWidth
              required
            ></TextField>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
