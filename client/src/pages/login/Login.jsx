import "./login.css"
import { Link } from "react-router-dom"
import { useContext, useRef, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

function Login() {
  const userRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [email, setEmail] = useState(false);
  const {dispatch, isFetching} = useContext(Context);
  const [error,setError] = useState(false) ;
  const [err, setErr] = useState("OOPS! Something went wrong...");
  const handleSubmit = async (e) => {
      e.preventDefault();
      dispatch({type:"LOGIN_START"});
      try {
          if(email) {
            const res = await axios.post("/auth/login/email",{
              email: emailRef.current.value,
              password: passwordRef.current.value
            });
            dispatch({type:"LOGIN_SUCCESS",payload: res.data});
          } else {
            const res = await axios.post("/auth/login/username",{
              username: userRef.current.value,
              password: passwordRef.current.value
            });
            dispatch({type:"LOGIN_SUCCESS",payload: res.data});
          }
      } catch (err) {
          dispatch({type:"LOGIN_FAILURE"});
          setError(true);
          setErr(err.response.data);
      }
  }
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <span>
            <button className="button" onClick={() => setEmail(false)} style={{backgroundColor : !email ? 'black' : 'white', color : !email ? 'white' : 'black'}}>Username</button>
            <button className="button" onClick={() => setEmail(true)} style={{backgroundColor : email ? 'black' : 'white', color : email ? 'white' : 'black'}}>Email</button>
        </span>
        <form className="loginForm" onSubmit={handleSubmit}>
            {!email ? 
              (<>
                  <label>Username</label>
                  <input type="text" className="loginInput" placeholder="Enter your username..." ref={userRef} required />
              </> ) : 
              (<>
                  <label>Email</label>
                  <input type="text" className="loginInput" placeholder="Enter your email..." ref={emailRef} required />
              </>)
            }
            <label>Password</label>
            <input type="password" className="loginInput" placeholder="Enter your password..." ref={passwordRef} required />
            <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
        </form>
        <button className="loginRegisterButton"><Link to="/register" className="link">Register</Link></button>
        {error && (
            <div className="error">
                <span style={{color: "red"}}>{err}</span>
                {err === "Wrong Password" && (
                  <button className="handleForgotPassword">
                      <Link to="/forgotpassword" className="link">Forgot Password</Link>
                  </button>
                )}
            </div>
        )}
    </div>
  )
}

export default Login