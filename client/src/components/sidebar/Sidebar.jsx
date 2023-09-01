import "./sidebar.css"
import imgurl from "../../kundu.jpg"
import { useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";

function Sidebar() {
    const [cats,setCats] = useState([]);
    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories");
            setCats(res.data);
        }
        getCats();
    },[])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src={imgurl} alt="" />
                <p>Btech CSE student at NIT Manipur, DSA in C++, MERN-stack Web Developer, Competitive Programmer.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidbarList">
                    {cats.map((c) => (
                        <Link key={c._id} to={`/?cat=${c.name}`} className="link">
                            <li key={c._id} className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW ME</span>
                <div className="sidebarSocial">
                    <a href="https://www.linkedin.com/in/sagar-sagar-5a1181222/"><i className="sidebarIcon link fa-brands fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/ig_kundu_/"><i className="sidebarIcon link fa-brands fa-square-instagram"></i></a>
                    <a href="https://github.com/kundu03"><i className="sidebarIcon link fa-brands fa-square-github"></i></a>
                    <a href="https://twitter.com/Sagar99122747"><i className="sidebarIcon link fa-brands fa-square-twitter"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar