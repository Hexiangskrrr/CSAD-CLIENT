import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from "axios";
import './Login.css';



const Login = () => {
  const navigate = useNavigate();

  const [userType, setUserType] = useState()
  
  const [signInError, setSignInError] = useState(false)
  const [signUpError, setSignUpError] = useState(false)
  

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

  const SERVER_URL = 'http://localhost:5003'

  const handleSignIn = (e) => {
    e.preventDefault()
    axios.post(`${SERVER_URL}/signin`, signInData)
      .then(response => {
        if (response.data.authenticated) {
          navigate("/menu");
        } else {
          console.error("Authentication failed")
          setSignInError(true)
        }
      })
      .catch(error => {
        console.error("Error during authentication", error)
        setSignInError(true)
      });
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    axios.post(`${SERVER_URL}/signup`, signUpData)
      .then(response => {
        if (response.data.authenticated) {
          navigate("/menu");
        } else {
          console.error("Authentication failed")
          setSignUpError(true)
        }
      })
      .catch(error => {
        console.error("Error during authentication", error)
        setSignUpError(true)
      });
  }


  return (
    <div>
      <div>
        <button onClick={() => setUserType('existing')}>Sign In</button>
        <button onClick={() => setUserType('new')}>Sign Up</button>
        <button onClick={continueAsGuest}>Continue As Guest</button>
      </div>

      {userType === 'existing' && (
        <form onSubmit={handleSignIn}>
          <div>
            Email: <input type="email" name="email" onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}></input>
          </div>
          <div>
            Password: <input type="password" name="password" onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}></input>
          </div>
          <input type="submit" value={"Sign In"}></input>
          {signInError && <p>Incorrect email or password</p>}
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
          {signUpError && <p>email already in use</p>}
        </form>
      )}
    </div>
  );
};

export default Login;
