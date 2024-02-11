import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import { TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

const AdminAuth = ({ onAdminAuth }) => {
  const navigate = useNavigate();
  const SERVER_URL = "http://localhost:5003";

  const [loginError, setLoginError] = useState(false);
  const [isUsernameEmpty, setUsernameState] = useState(false);
  const [isPasswordEmpty, setPasswordState] = useState(false);

  const [adminLoginData, setAdminLoginData] = useState({
    username: "",
    password: "",
  });

  const validateUsername = () => {
    if (adminLoginData.username == "") {
      setUsernameState(true);
      return true;
    } else {
      setUsernameState(false);
      return false;
    }
  };

  const validatePassword = () => {
    if (adminLoginData.password == "") {
      setPasswordState(true);
      return true;
    } else {
      setPasswordState(false);
      return false;
    }
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    const isUsernameEmpty = validateUsername();
    const isPasswordEmpty = validatePassword();
    if (!isUsernameEmpty && !isPasswordEmpty) {
      axios
        .post(`${SERVER_URL}/adminlogin`, adminLoginData)
        .then((response) => {
          console.log("Authentication response:", response.data);
          if (response.data.authenticated) {
            onAdminAuth(); // Trigger authentication
            navigate("/adminconsole");
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
        Admin Login
      </Typography>
      <Box component="form" onSubmit={handleAdminLogin}>
        <TextField
          margin="normal"
          fullWidth
          type="text"
          name="username"
          label="Username:"
          onChange={(e) =>
            setAdminLoginData({ ...adminLoginData, username: e.target.value })
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
            setAdminLoginData({ ...adminLoginData, password: e.target.value })
          }
        ></TextField>
        {isPasswordEmpty ? (
          <Typography color={'red'}>Password cannot be empty</Typography>
        ) : null}
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3 }}
          type="submit"
        >
          Log In
        </Button>
      </Box>
      {loginError ? (
        <Typography color={'red'}>Incorrect username or password</Typography>
      ) : null}
    </Container>
  );
};

export default AdminAuth;
