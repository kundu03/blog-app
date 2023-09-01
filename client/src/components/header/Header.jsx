import "./header.css"

function Header() {
  return (
    <div className="header">
        <div className="headerTitle">
            <span className="headerTitleSm">TECH BLOG</span> 
            <span className="headerTitleLg">BLOG</span>
        </div>
        <img className="headerImg" src="https://images.pexels.com/photos/2382317/pexels-photo-2382317.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
    </div>
  )
}

export default Header
