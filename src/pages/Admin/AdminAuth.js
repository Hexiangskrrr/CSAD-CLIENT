import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
    <div>
      <h1>Admin Login</h1>
      <form onSubmit={handleAdminLogin}>
        Username:
        <input
          type="text"
          name="username"
          onChange={(e) =>
            setAdminLoginData({ ...adminLoginData, username: e.target.value })
          }
        ></input>
        {isUsernameEmpty ? <span>Username cannot be empty</span> : null}
        <br />
        Password:
        <input
          type="password"
          name="password"
          onChange={(e) =>
            setAdminLoginData({ ...adminLoginData, password: e.target.value })
          }
        ></input>
        {isPasswordEmpty ? <span>Password cannot be empty</span> : null}
        <br />
        <input type="submit" value={"Log In"}></input>
      </form>
      {loginError ? <p>Incorrect username or password</p> : null}
    </div>
  );
};

export default AdminAuth;
