import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from "axios";
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const [userType, setUserType] = useState();

  const [signInData, setSignInData] = useState({
    email: '',
    password: ''
  })

  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    password: ''
  })


  const continueAsGuest = () => {
    navigate("/menu")
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    axios.post('/signin', signInData)
      .then(response => {
        if (response.data.authenticated) {
          navigate("/menu");
        } else {
          console.error("Authentication failed")
        }
      })
      .catch(error => {
        console.error("Error during authentication", error)
      });
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    axios.post('/signup', signUpData)
      .then(response => {
        if (response.data.authenticated) {
          navigate("/menu");
        } else {
          console.error("Authentication failed")
        }
      })
      .catch(error => {
        console.error("Error during authentication", error)
      });
  }


  return (
    <div>
      <div onSubmit={handleSignIn}>
        <button onClick={() => setUserType('existing')}>Sign In</button>
        <button onClick={() => setUserType('new')}>Sign Up</button>
        <button onClick={continueAsGuest}>Continue As Guest</button>
      </div>

      {userType === 'existing' && (
        <form>
          <div>
            Email: <input type="email" name="email" onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}></input>
          </div>
          <div>
            Password: <input type="password" name="password" onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}></input>
          </div>
          <input type="submit" value={"Sign In"}></input>
        </form>
      )}

      {userType === 'new' && (
        <form onSubmit={handleSignUp}>
          <div>
            Name: <input type="text" name="name" onChange={(e) => setSignUpData({ ...signUpData, name: e.target.value })}></input>
          </div>
          <div>
            Email: <input type="email" name="email" onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}></input>
          </div>
          <div>
            Password: <input type="password" name="password" onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}></input>
          </div>
          <input type="submit" value={"Sign Up"}></input>
        </form>
      )}
    </div>
  );
};

export default Login;
