import "./about.css"
import imgurl from "../../kundu.jpg"

function About() {
  return (
    <div className="about">
        <img className="aboutImg" src={imgurl} alt="" />
        <div className="aboutContent">
            <div className="aboutTitle">About Author:</div>
            <p className="aboutContentP">
                Myself Sagar, currently pursuing Bachelor of Technology in Computer Science and Engineering 
                at National Institute of Technology Manipur, Imphal Manipur India. I am a competitive 
                programer at Codechef and Codeforces and specialised in Data Structures 
                and Algorithms using C++. I am a Full stack Web Developer specialised in MERN-Stack. I got
                a global rank of 675 at Google Kickstart 2022 (Round-E).
            </p>
            <div className="aboutTitle">About This Blog Application:</div>
            <p className="aboutContentP">
                It is a full Stack Web Application developed using MERN-stack. It is fully functional 
                blog application where you can write your own blogs, read someone's blog in which you 
                are interested. You can create your own account and login to your account. You can also 
                edit your own blogs, your own account, etc.
            </p>
            <div className="aboutTitle">Copyright:</div>
            <p className="aboutContentPc">
                Copyright of this web application are reserved to the author. Any type of activity related 
                to some wrong information or wrong intention may lead to ban of your account.
            </p>
            <h3 className="abouthead1">Thank You:</h3>
            <h4 className="abouthead2">Sagar</h4>
        </div>
    </div>
  )
}

export default About