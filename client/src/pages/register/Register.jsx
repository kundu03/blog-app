import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom"
import "./register.css"

function Register() {
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState(false);
  const [err, setErr] = useState("OOPS! Something went wrong...");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,email,password
      });
      res.data && window.location.replace("/login");
    } catch(err) {
      setError(true);
      setErr(err.response.data);
    }
  }
  return (
    <div className="register">
    <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" className="registerInput" placeholder="Enter your name..." 
                onChange={e => {setUsername(e.target.value)}} required />
            <label>Email</label>
            <input type="text" className="registerInput" placeholder="Enter your email..." 
                onChange={e => {setEmail(e.target.value)}} required />
            <label>Password</label>
            <input type="password" className="registerInput" placeholder="Enter your password..."
                onChange={e => {setPassword(e.target.value)}} required />
            <button className="registerButton" type="submit">Register</button>
        </form>
        <button className="registerLoginButton"><Link to="/login" className="link ">Login</Link></button>
        {error && <span style={{color: "red", marginTop: "10px"}}>{err}</span>}
    </div>
  )
}

export default Register