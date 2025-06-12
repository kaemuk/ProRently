import React, { useState } from 'react';
import "../styles/Login.scss"
import { setLogin } from '../redux/state';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const loggedIn = await response.json();
  
      if (response.ok) { // Check for a successful response
        console.log("Login successful", loggedIn);
        dispatch(
          setLogin({
            user: loggedIn.user,
            token: loggedIn.token,
          })
        );
        navigate("/"); // Redirect to homepage
      } else {
        // Handle errors from the server
        console.log("Login failed", loggedIn.message);
        alert(loggedIn.message); // Show the error message returned by the backend
      }
    } catch (err) {
      console.log("Login failed", err.message);
      alert("An error occurred, please try again.");
    }
  };
  
  return (
    <div className='login'>
      <div className='login_content'>
        <form className="login_content_form" onSubmit={handleSubmit}>
          <input type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail (e.target.value)}
            required
          />
          <input type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type='submit'>Нэвтрэх</button>
        </form>

        <a href="/register" className="login_content_form_link">Don't have an account? Бүртгүүлэх</a>
      </div>
    </div>
  )
}

export default LoginPage