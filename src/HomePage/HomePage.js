import "./HomePage.css"
import Transition from "./Transition.js"
import linkdin from "./linkedin.svg";
import github from "./github.svg";
import mail from "./mail.svg";


function HomePage(){
    return (
        <div className="Home-page">
            <div className="name">
                <h1 className="name-heading">Aditya Jaiswal</h1>
            </div>

            <Transition />

            <div className="social">
                <a href="https://www.linkedin.com/in/aditya-jaiswal-27ab1b286/">
                    <img
                        src={linkdin}
                        alt="linkdin "
                        className="home-page-img"
                    ></img>
                </a>
                <a href="https://github.com/Adityajaiswal03">
                    <img
                        src={github}
                        alt="github"
                        className="home-page-img"
                    ></img>
                </a>
                <a href="mailto:aditya.jaiswal031103@gmail.com">
                    <img src={mail} alt="mail" className="home-page-img"></img>
                </a>
            </div>
        </div>
    );
}
export default HomePage;
