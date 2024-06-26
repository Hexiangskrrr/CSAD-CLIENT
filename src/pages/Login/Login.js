import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ButtonGroup } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();

  const [userType, setUserType] = useState();

  const [signInError, setSignInError] = useState(false);
  const [signUpError, setSignUpError] = useState(false);

  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const continueAsGuest = () => {
    navigate("/menu");
  };

  const SERVER_URL = "http://localhost:5003";

  const handleSignIn = (e) => {
    e.preventDefault();
    axios
      .post(`${SERVER_URL}/signin`, signInData)
      .then((response) => {
        if (response.data.authenticated) {
          navigate("/menu");
        } else {
          console.error("Authentication failed");
          setSignInError(true);
        }
      })
      .catch((error) => {
        console.error("Error during authentication", error);
        setSignInError(true);
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    axios
      .post(`${SERVER_URL}/signup`, signUpData)
      .then((response) => {
        if (response.data.authenticated) {
          navigate("/menu");
        } else {
          console.error("Authentication failed");
          setSignUpError(true);
        }
      })
      .catch((error) => {
        console.error("Error during authentication", error);
        setSignUpError(true);
      });
  };

  return (
    <div>
      {!userType ? (
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "90vh",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", padding: "20px" }}>
            <img src="/favicon-32x32.png" style={{ marginRight: "8px" }} />
            <Typography>Delicious Food</Typography>
          </Box>
          <ButtonGroup
            orientation="vertical"
            aria-label="Vertical button group"
          >
            <Button onClick={() => setUserType("existing")}>Sign In</Button>
            <Button onClick={() => setUserType("new")}>Sign Up</Button>
            <Button onClick={continueAsGuest}>Continue As Guest</Button>
          </ButtonGroup>
        </Container>
      ) : null}

      {userType === "existing" && (
        <Container component="main" maxWidth="xs" sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '80vh'}}>
          <Typography variant="h5" align="center">
            Sign In
          </Typography>
          <Box component="form" onSubmit={handleSignIn}>
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              type="Email"
              name="email"
              onChange={(e) =>
                setSignInData({ ...signInData, email: e.target.value })
              }
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e) =>
                setSignInData({ ...signInData, password: e.target.value })
              }
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
              Sign In
            </Button>
          </Box>

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" onClick={continueAsGuest}>
                Log in as Guest
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" onClick={() => setUserType("new")}>
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
          {signInError && <p>Incorrect email or password</p>}
        </Container>
      )}

      {userType === "new" && (
        <Container component="main" maxWidth="xs" sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '80vh'}}>
          <Typography variant="h5" align="center">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSignUp}>
            <TextField
              margin="normal"
              fullWidth
              id="Name"
              label="Name"
              name="Name"
              onChange={(e) =>
                setSignUpData({ ...signUpData, name: e.target.value })
              }
            />
            <TextField
              margin="normal"
              fullWidth
              label="Email Address"
              name="email"
              id="email"
              onChange={(e) =>
                setSignUpData({ ...signUpData, email: e.target.value })
              }
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e) =>
                setSignUpData({ ...signUpData, password: e.target.value })
              }
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
              Sign Up
            </Button>
          </Box>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" onClick={continueAsGuest}>
                Log in as Guest
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="#"
                variant="body2"
                onClick={() => setUserType("existing")}
              >
                Don't have an account? Sign In
              </Link>
            </Grid>
          </Grid>
          {signUpError && <p>Incorrect or password</p>}
        </Container>
      )}
      <Box sx={{ position: "fixed", bottom: 0, left: 0 }}>
        <Typography sx={{ml:"5px"}}>Delicious Food Pte Ltd</Typography>
        <ButtonGroup>
        <Button href="http://localhost:3000/about">about</Button>
        <Button href="http://localhost:3000/admin">admin</Button>
        <Button href="http://localhost:3000/kitchen">kitchen</Button>
        </ButtonGroup>
      </Box>
    </div>
  );
};

export default Login;
