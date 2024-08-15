import { Box, Button, Fade, Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTheme } from "@mui/material/styles";
import ItemSummary from "./ItemSummary";

export default function Checkout() {
  const theme = useTheme();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "50%",
    transform: "translate(-50%, -50%)",
    border: "10px solid #FF90BC",
    borderRadius: "1rem",
    padding: "1rem",
    height: "50%",
    width: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  };

  const outerStyle = {
    display: "flex",
    flexDirection: "row",
    alightItems: "center",
  };
  const [isOpen, setisOpen] = useState(false);
  const handleOpen = () => {
    setisOpen(true);
  };
  const handleClose = () => {
    setisOpen(false);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, cardNumber, expDate, ccv } = data;
    console.log("y");
    console.log(name, cardNumber, expDate, ccv);
  };

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
            <Box component={"form"} onSubmit={handleSubmit(onSubmit)}>
              <TextField
                id="name"
                name="name"
                label="Name on card"
                fullWidth
                required
                sx={{ backgroundColor: theme.palette.secondary.main }}
                margin="normal"
                {...register("name", { required: true, maxLength: 80 })}
              ></TextField>
              <TextField
                id="cardNumber"
                name="cardNumber"
                label="Card number"
                fullWidth
                required
                sx={{ backgroundColor: theme.palette.secondary.main }}
                margin="normal"
                inputProps={{ maxLength: 16 }}
                {...register("cardNumber", {
                  required: true,
                  maxLength: 80,
                  pattern: {
                    message: "Invalid card number, enter 16 digits",
                    value: /^\d{16}$/,
                  },
                })}
              ></TextField>
              <TextField
                id="expDate"
                name="expDate"
                label="Expiry date"
                fullWidth
                required
                sx={{ backgroundColor: theme.palette.secondary.main }}
                margin="normal"
                inputProps={{ maxLength: 5 }}
                {...register("expDate", {
                  required: true,
                  maxLength: 10,
                  pattern: {
                    message: "Invalid date",
                    value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                  },
                })}
              ></TextField>
              <TextField
                id="ccv"
                name="ccv"
                label="CCV number (3 digits on the back of the card)"
                fullWidth
                required
                sx={{ backgroundColor: theme.palette.secondary.main }}
                inputProps={{ maxLength: 3 }}
                margin="normal"
                {...register("ccv", {
                  required: true,
                  pattern: {
                    message: "Enter a valid CCV (3 digits)",
                    value: /^\d{3}$/,
                  },
                })}
              ></TextField>
              {errors.name && (
                <Typography color="error">{errors.name.message}</Typography>
              )}
              {errors.cardNumber && (
                <Typography color="error">
                  {errors.cardNumber.message}
                </Typography>
              )}
              {errors.expDate && (
                <Typography color="error">{errors.expDate.message}</Typography>
              )}
              {errors.ccv && (
                <Typography color="error">{errors.ccv.message}</Typography>
              )}

              <Button type="submit" variant="contained">
                Pay now
              </Button>
            </Box>
            <ItemSummary />
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
