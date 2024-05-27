
import "./HomePage.css"
import Transition from "./Transition.js"
import linkdin from "./linkedin.svg";
import github from "./github.svg";
import mail from "./mail.svg";


function HomePage(){
    return (
        <div className="Home-page">
            <div className="name">
                <h1>Aditya Jaiswal</h1>
            </div>
          
                    <Transition />
            
            <div className="social">
                <img src={linkdin} alt="linkdin"></img>
                <img src={github} alt="github"></img>
                <img src={mail} alt="mail"></img>
            </div>
        </div>
    );
}
export default HomePage;
