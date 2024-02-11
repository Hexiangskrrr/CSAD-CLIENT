import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Container } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";

const KitchenAuth = ({ onKitchenAuth }) => {
  const navigate = useNavigate();
  const SERVER_URL = "http://localhost:5003";

  const [loginError, setLoginError] = useState(false);
  const [isUsernameEmpty, setUsernameState] = useState(false);
  const [isPasswordEmpty, setPasswordState] = useState(false);

  const [kitchenLoginData, setKitchenLoginData] = useState({
    username: "",
    password: "",
  });

  const validateUsername = () => {
    if (kitchenLoginData.username == "") {
      setUsernameState(true);
      return true;
    } else {
      setUsernameState(false);
      return false;
    }
  };

  const validatePassword = () => {
    if (kitchenLoginData.password == "") {
      setPasswordState(true);
      return true;
    } else {
      setPasswordState(false);
      return false;
    }
  };

  const handleKitchenLogin = (e) => {
    e.preventDefault();
    const isUsernameEmpty = validateUsername();
    const isPasswordEmpty = validatePassword();
    if (!isUsernameEmpty && !isPasswordEmpty) {
      axios
        .post(`${SERVER_URL}/kitchenlogin`, kitchenLoginData)
        .then((response) => {
          console.log("Authentication response:", response.data);
          if (response.data.authenticated) {
            onKitchenAuth(); // Trigger authentication
            navigate("/kitchenconsole");
          } else {
            console.error("Authentication failed");
            setLoginError(true);
          }
        })
        .catch((error) => {
          console.error("Error during authentication", error);
          setLoginError(true);
        });
    }
  };

  return (
    <Container
    component="main"
    maxWidth="xs"
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      height: "80vh",
      }}
    >
      <Typography variant="h5" align="center">
        Kitchen Login
      </Typography>
      <Box component="form" onSubmit={handleKitchenLogin}>
        <TextField
        margin="normal"
        fullWidth
          type="text"
          name="username"
          label="Username:"
          onChange={(e) =>
            setKitchenLoginData({
              ...kitchenLoginData,
              username: e.target.value,
            })
          }
        ></TextField>
        {isUsernameEmpty ? (
          <Typography color={'red'}>Username cannot be empty</Typography>
        ) : null}
        <TextField
        margin="normal"
        fullWidth
          type="password"
          name="password"
          label="Password:"
          onChange={(e) =>
            setKitchenLoginData({
              ...kitchenLoginData,
              password: e.target.value,
            })
          }
        ></TextField>
        {isPasswordEmpty ? (
          <Typography color={'red'}>Password cannot be empty</Typography>
        ) : null}
        <Button fullWidth
          variant="contained"
          sx={{ mt: 3 }}
          type="submit">Log In</Button>
      </Box>
      {loginError ? (
        <Typography color={'red'}>Incorrect username or password</Typography>
      ) : null}
    </Container>
  );
};

export default KitchenAuth;
