import Fiverr from "../../assets/fiverr.png"
import Upwork from "../../assets/upwork.png"
import Linkedin from "../../assets/linkedin.png"
import "./Contact.css"

let Contact = () => {
    return (
        <section className="Contact__data" id="contact">
        <div className="contact__container">
          <h1 id="section_title">Let’s work together</h1>
          <p id="section__description">I work remotely or freelance with the power of the internet and am available on Upwork, LinkedIn, and Fiverr.</p>
          <div className="Contact_icons">
          <div>
            <a href="https://www.fiverr.com/fasih_shahbaz/develop-restful-api-using-nodejs-and-mongodb"  className="home__social-icon" >
          <img src={Fiverr} alt="Fiverr"/> </a>
          </div>
          <div>
          <a href="#" className="home__social-icon" >
          <img src={Upwork} alt="Upwork"/></a>
          </div><div>
          <a href="https://www.linkedin.com/in/fasih-shahbaz-78a079263/" className="home__social-icon" >
          <img src={Linkedin} alt="Linkedin"/></a>
          </div>
          </div>
          <p id="social"><span>Based In:</span> Lahore, Punjab, Pakistan.</p>
          <p id="social"><span>Email:</span> shahbazfasih1@gmail.com</p>
        </div>
      </section>
      
        )
}

export default Contact