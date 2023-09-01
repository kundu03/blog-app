import "./topbar.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

function Topbar() {
    const {user, dispatch} = useContext(Context);
    const PF = "http://localhost:4000/images/";
    const handleLogout = async () => {
        dispatch({type:"LOGOUT"});
    }
    return (
        <div className="top">
            <div className="topLeft">
                <a href="https://www.linkedin.com/in/sagar-sagar-5a1181222/"><i className="topIcon fa-brands fa-linkedin"></i></a>
                <a href="https://www.instagram.com/ig_kundu_/"><i className="topIcon fa-brands fa-square-instagram"></i></a>
                <a href="https://github.com/kundu03"><i className="topIcon fa-brands fa-square-github"></i></a>
                <a href="https://twitter.com/Sagar99122747"><i className="topIcon fa-brands fa-square-twitter"></i></a>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link to="/" className="link">HOME</Link></li>
                    <li className="topListItem"><Link to="/about" className="link">ABOUT</Link></li>
                    <li className="topListItem"><Link to="/contact" className="link">CONTACT</Link></li>
                    <li className="topListItem"><Link to="/write" className="link">WRITE</Link></li>
                    <li className="topListItem" onClick={handleLogout}>{user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className="topRight">
                { user ? (<Link to="/settings"><img className="topImage" src={PF+user.profilepic} alt="" /></Link>)
                    : ( <ul className="topList">
                            <li className="topListItem"><Link to="/login" className="link">LOGIN</Link></li>
                            <li className="topListItem"><Link to="/register" className="link">REGISTER</Link></li>
                        </ul>
                    )
                } 
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}

export default Topbar