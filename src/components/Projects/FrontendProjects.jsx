import Project3 from "../../assets/jewelrystore.PNG"
import Project4 from "../../assets/eduAssist.PNG"
import Backendsnipt from "../Slider/backendsnipt"
let Web = () => {

    return(
      <>
     <div className="projects-container">

<div className="project Project_content">
  <div className="project__description">
  <h3>EDU-ASSIST</h3>
  <p>
  LMS & Portal Website Builded with MERN Stack    <br /></p>
    <span>React</span> <span>Bootstrap</span><span>TailwindCss</span> <span>NodeJS</span> <span>MongoDB</span>  <span>expressJs</span> 
  <br />
  <a href="https://edu-assist-fyp.vercel.app/" className="button" target="_blank" rel="noreferrer">
  View Project <i class='bx bxs-right-arrow-alt'></i>
  </a>
  </div>
  <div className="project__img">
  <img className="image4" src={Project4} alt="Project Preview" />
  </div>
</div>


<div className="project Project_content">
  <div className="project__description">
  <h3>Jewelry</h3>
  <p>
  ReactJS Ecommerce Website  <br /></p>
  <span>React</span> <span>Tailwind</span> <span>Bootstrap </span> <span>NodeJS</span>  
  <a href="https://jewelry-ecommerce-store-git-main-mumarumt.vercel.app/" className="button" target="_blank" rel="noreferrer">
  View Project <i class='bx bxs-right-arrow-alt'></i>
  </a>
  </div>
  <div className="project__img">
  <img className="image4" src={Project3} alt="Project Preview" />
  </div>
</div>




<div className="project Project_content">
<div className="project__description">
<h3>Backend</h3>
<p> edu-assist Backend snippet  </p>  

  <span>NodeTS</span> <span>expressTS</span> <span>mangoDB</span>
  </div><Backendsnipt />
  </div>

</div>
    </>)
}

export default Web


