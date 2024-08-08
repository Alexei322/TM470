import Modal from "@mui/material/Modal";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Fade from "@mui/material/Fade";
import { useTheme } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { useAuth } from "@/AuthContext";

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
    border: "10px solid #FF90BC",
    borderRadius: "1rem",
    padding: "1rem",
    zIndex: 1,
  };
  const [modalOpen, setModalOpen] = useState(false);
  const setOpen = () => setModalOpen(true);
  const setClose = () => setModalOpen(false);
  const [usernameTaken, setUsernameTaken] = useState(false);
  const [emailTaken, setEmailTaken] = useState(false);
  const [isRegister, setIsRegister] = useState(true);
  const changeRegisterMode = () => {
    setIsRegister(!isRegister);
    setUsernameTaken(false);
    setEmailTaken(false);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signIn } = useAuth();

  const signUpUser = async (firstName, lastName, email, username, password) => {
    const response = await fetch("/api/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, email, username, password }),
    });
    if (!response.ok) {
      const res = await response.json();
      console.log(res.message);
      if (res.message === "Username already taken") {
        setUsernameTaken(true);
      } else if (res.message === "Email already taken") {
        setEmailTaken(true);
      }
      throw new Error(res.message);
    }

    const data = await response.json();
    signIn(username, email);
    console.log(data);
  };
  const signinUser = async (username, password) => {
    const response = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    if (!response.ok) {
      const res = await response.json();
      console.log(res.message);
      throw new Error(res.message);
    }
    const data = await response.json();
    signIn(username, data.email);
    console.log(data);
  };

  const onSubmit = async (data) => {
    if (isRegister) {
      const { firstName, lastName, email, username, password } = data;
      try {
        await signUpUser(firstName, lastName, email, username, password);
        setModalOpen(false);
      } catch (error) {
        console.log(error);
      }
    } else {
      const { username, password } = data;
      try {
        await signinUser(username, password);
        setModalOpen(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <Button onClick={setOpen}>Sign in/register</Button>
      <Modal
        open={modalOpen}
        onClose={setClose}
        slotProps={{
          backdrop: { style: { backgroundColor: "rgba(0,0,0,1)" } },
        }}
      >
        <Fade in={modalOpen} timeout={500}>
          <Box
            style={style}
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            {isRegister ? (
              <>
                <TextField
                  id="First Name"
                  name="firstName"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  color="primary"
                  sx={{ backgroundColor: theme.palette.secondary.main }}
                  margin="normal"
                  {...register("firstName", { required: true, maxLength: 80 })}
                />
                <TextField
                  name="lastName"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  sx={{ backgroundColor: theme.palette.secondary.main }}
                  margin="normal"
                  {...register("lastName", { required: true, maxLength: 100 })}
                />
                <TextField
                  name="email"
                  label="Email address"
                  variant="outlined"
                  fullWidth
                  sx={{ backgroundColor: theme.palette.secondary.main }}
                  margin="normal"
                  {...register("email", {
                    required: true,
                    pattern: {
                      message: "Please enter a valid email address",
                      value: /^\S+@\S+$/i,
                    },
                  })}
                />
                <TextField
                  name="username"
                  label="Username"
                  variant="outlined"
                  fullWidth
                  sx={{ backgroundColor: theme.palette.secondary.main }}
                  margin="normal"
                  {...register("username", { required: true, max: 12, min: 4 })}
                />
                <TextField
                  name="password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  sx={{ backgroundColor: theme.palette.secondary.main }}
                  margin="normal"
                  {...register("password", {
                    required: true,
                    pattern: {
                      message:
                        "Password length minimum 8 characters, one special character and one upper case character",
                      value:
                        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/i,
                    },
                  })}
                />
              </>
            ) : (
              <Typography variant="h4" align="center">
                <TextField
                  name="username"
                  label="Username"
                  variant="outlined"
                  fullWidth
                  sx={{ backgroundColor: theme.palette.secondary.main }}
                  margin="normal"
                  {...register("username", { required: true, max: 12, min: 4 })}
                />
                <TextField
                  name="password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  sx={{ backgroundColor: theme.palette.secondary.main }}
                  margin="normal"
                  {...register("password", {
                    required: true,
                    pattern: {
                      message:
                        "Password length minimum 8 characters, one special character and one upper case character",
                      value:
                        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/i,
                    },
                  })}
                />
              </Typography>
            )}

            {errors.firstName && (
              <Typography color="error">{errors.firstName.message}</Typography>
            )}
            {errors.lastName && (
              <Typography color="error">{errors.lastName.message}</Typography>
            )}
            {errors.email && (
              <Typography color="error">{errors.email.message}</Typography>
            )}
            {errors.password && (
              <Typography color="error">{errors.password.message}</Typography>
            )}
            {usernameTaken && (
              <Typography color="error">Username already taken</Typography>
            )}
            {emailTaken && (
              <Typography color="error">Email already taken</Typography>
            )}
            <Button type="submit" variant="contained">
              {" "}
              Submit!
            </Button>
            {/* <input type="submit" value={"Submit"} /> */}
            <Button onClick={changeRegisterMode}>
              {isRegister
                ? "Have an account already? Sign in!"
                : "Don't have an account? Sign up!"}
            </Button>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
