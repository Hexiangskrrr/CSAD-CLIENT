import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminAuth = ({ onAdminAuth }) => {
  const navigate = useNavigate();

  const [adminLoginData, setAdminLoginData] = useState({
    username: "",
    password: "",
  });

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (
      adminLoginData.username == "admin" &&
      adminLoginData.password == "123123"
    ) {
      onAdminAuth(); // Trigger authentication
      navigate("/adminconsole");
    } else {
      console.log("incorrect username or pw");
    }
  };

  return (
    <div>
      <h1>Admin Login</h1>
      <form onSubmit={handleAdminLogin}>
        Username:{" "}
        <input
          type="text"
          name="username"
          onChange={(e) =>
            setAdminLoginData({ ...adminLoginData, username: e.target.value })
          }
        ></input>
        <br />
        Password:{" "}
        <input
          type="password"
          name="password"
          onChange={(e) =>
            setAdminLoginData({ ...adminLoginData, password: e.target.value })
          }
        ></input>
        <br />
        <input type="submit" value={"Log In"}></input>
      </form>
    </div>
  );
};

export default AdminAuth;
