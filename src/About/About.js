import './About.css'
import profile from './profile.jpg'
function About(){
    return (
        <div className="About">
            <div className="heading">
                <h1>About</h1>
            </div>
            <div className="About-Content">
                <div className="info">
                    <p>
                        Hey there, I'm Aditya Jaiswal, a student at Scaler
                        School of Technology. I really love learning about
                        tech—it's my thing. Besides that, I'm big on staying
                        healthy and fit. I hit the gym every day to keep my mind
                        and body in top shape.
                        <br></br>
                        <br></br>
                        When I'm not working out or studying, I enjoy reading
                        books. I'm into all sorts of stuff, like philosophy,
                        self-help, and finance. Learning about money matters is
                        pretty interesting to me. Oh, and I'm also a big fan of
                        movies. Whether it's a deep drama or a funny comedy, I'm
                        always down for a good flick.
                        <br></br>
                        <br></br>
                        So, yeah, I guess you could say I'm all about tech,
                        staying fit, reading, and catching movies whenever I
                        can.
                        <br></br>
                    </p>
                </div>
                <div className="Profile-pic">
                    <img src={profile} alt="Profile pick"></img>
                </div>
            </div>
        </div>
    );
}
export default About;