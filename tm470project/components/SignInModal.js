import Modal from "@mui/material/Modal";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Fade from "@mui/material/Fade";
import { useTheme } from "@mui/material/styles";

export default function SignInModal() {
  const theme = useTheme();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "800",
    minHeight: 580,
    height: "auto",
    transform: "translate(-50%, -50%)",
    // backgroundColor: "background.paper",
    border: "10px solid #FF90BC",
    borderRadius: "1rem",
    padding: "1rem",
    zIndex: 100,
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
    <div>
      <Button onClick={setOpen}>Sign in/register</Button>
      <Modal
        open={modalOpen}
        onClose={setClose}
        slotProps={{
          backdrop: { style: { backgroundColor: "rgba(0,0,0,0.9)" } },
        }}
      >
        <Fade in={modalOpen} timeout={500}>
        <Box style={style} component="form" noValidate>
          <Typography variant="h5" color={"primary"}>Sign up</Typography>
          <TextField
            id="First Name"
            label="First Name"
            variant="outlined"
            fullWidth
            color="primary"
            sx={{ backgroundColor: theme.palette.secondary.main}}
            margin="normal"
            required
          ></TextField>
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            sx={{ backgroundColor: theme.palette.secondary.main}}
            margin="normal"
            required
          ></TextField>
          <TextField
            label="Email address"
            variant="outlined"
            fullWidth
            sx={{ backgroundColor: theme.palette.secondary.main}}
            margin="normal"
            required
          ></TextField>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            sx={{ backgroundColor: theme.palette.secondary.main}}
            margin="normal"
            required
          ></TextField>
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            sx={{ backgroundColor: theme.palette.secondary.main}}
            margin="normal"
            required
          ></TextField>
          <TextField
            label="Repeat Password"
            variant="outlined"
            fullWidth
            sx={{ backgroundColor: theme.palette.secondary.main}}
            margin="normal"
            required
          ></TextField>
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Box>
        </Fade>
      </Modal>
    </div>
  );
}
