import Modal from "@mui/material/Modal";
import {
  Box,
  Button,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useState } from "react";
import theme from "@/theme";
export default function SignInModal() {
  const sx = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 900,
    height: 900,
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
  };
  const [modalOpen, setModalOpen] = useState(false);
  const setOpen = () => setModalOpen(true);
  const setClose = () => setModalOpen(false);

  const [formInfo, setFormInfo] = useState({
    username: "",
    email: "",
    password: "",
  });

  const setForm = (e) => {
    setFormInfo((prevState) => ({
      ...prevState,
    }));
  };
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Button onClick={setOpen}>Sign in/register</Button>
        <Modal style={sx} open={modalOpen} onClose={setClose}>
          <Box component="form" noValidate sx={{bgcolor: 'white'}}>
            <Typography variant="h5">Sign up</Typography>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            ></TextField>
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            ></TextField>
            <TextField
              label="Email address"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            ></TextField>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            ></TextField>
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            ></TextField>
            <TextField
              label="Repeat Password"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            ></TextField>
            <Button variant="contained" color="primary"> Submit</Button>
          </Box>
        </Modal>
      </div>
    </ThemeProvider>
  );
}
