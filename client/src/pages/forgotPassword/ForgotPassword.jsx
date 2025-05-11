import "./forgotPassword.css";
import { Link } from "react-router-dom"
import { useRef, useState } from "react";
import axios from "axios";

function ForgotPassword() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error,setError] = useState(false) ;
  const [err, setErr] = useState("OOPS! Something went wrong...");
  const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/auth/changepassword",{
                email: emailRef.current.value,
                password: passwordRef.current.value
            });
            res.data && window.location.replace("/login");
        } catch (err) {
            setError(true);
            setErr(err.response.data);
        }
  }
  return (
    <div className="password">
        <span className="passwordTitle">Forgot Password</span>
        <form className="passwordForm" onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="text" className="passwordInput" placeholder="Enter your email..." ref={emailRef} required />
            <label>Password</label>
            <input type="password" className="passwordInput" placeholder="Enter new password..." ref={passwordRef} required />
            <button className="passwordButton" type="submit">Change Password</button>
        </form>
        <button className="registerLoginButton"><Link to="/login" className="link ">Login</Link></button>
        {error && <span style={{color: "red", marginTop: "10px"}}>{err}</span>}
    </div>
  )
}

export default ForgotPassword