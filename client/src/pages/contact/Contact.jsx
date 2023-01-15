import "./contact.css"

function Contact() {
  return (
    <div className="contact">
        <h2 className="contacthead">Contact me:</h2>
        <div className="contactdetails">
            <div className="contactlistitem">Phone No : </div>
            <div className="contactlistitem">8930669861, 7206865990</div>
            <div className="contactlistitem">Email : </div>
            <div className="contactlistitem">Kundusagar468@gmail.com</div>
            <div className="contactlistitem">Linkedin : </div>
            <div className="contactlistitem"><a href="https://www.linkedin.com/in/sagar-sagar-5a1181222/"><i className="Icon link fa-brands fa-linkedin"></i></a></div>
            <div className="contactlistitem">Instagram : </div>
            <div className="contactlistitem"><a href="https://www.instagram.com/ig_kundu_/"><i className="Icon link fa-brands fa-square-instagram"></i></a></div>
            <div className="contactlistitem">Github : </div>
            <div className="contactlistitem"><a href="https://github.com/kundu03"><i className="Icon link fa-brands fa-square-github"></i></a></div>
            <div className="contactlistitem">Twitter : </div>
            <div className="contactlistitem"><a href="https://twitter.com/Sagar99122747"><i className="Icon link fa-brands fa-square-twitter"></i></a></div>
        </div>
        <h2 className="contactdetails">Happy to see you here. Contact me on above details for any information.</h2>
    </div>
  )
}

export default Contact