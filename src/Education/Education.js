
import './Education.css';

function Education(){
    return (
        <div className="education">
            <div className="education-header">
                <h1>Education</h1>
            </div>
            <div className="timeline">
                <div className="timeline-component">
                    <div className="timeline-date timeline-date-right">
                        2027
                    </div>
                </div>
                <div className="timeline-middle">
                    <div className="timeline-dot"></div>
                </div>
                <div className="timeline-component timeline-component-bg">
                    <h2 className="timeline-title">B.Sc in Computer Science</h2>
                    <p className="timeline-subtitle">
                        Scaler School of Technology,Bangalore
                    </p>
                </div>
                <div className="timeline-component timeline-component-end timeline-component-bg">
                    <h2 className="timeline-title">Senior Secondary</h2>
                    <p className="timeline-subtitle">
                        D.A.V Public School,Sector-14,Gurgaon
                        
                    </p>
                    <p className="timeline-subtitle-marks">
                        Marks: 93.4%
                    </p>
                </div>
                <div className="timeline-middle">
                    <div className="timeline-dot"></div>
                    <div className="timeline-dot timeline-dot-end"></div>
                </div>
                <div className="timeline-component timeline-component-end">
                    <div className="timeline-date ">2022</div>
                </div>
            </div>
        </div>
    );
}
export default Education;
