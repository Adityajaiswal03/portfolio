import './Navbar.css';

function Navbar(){

    return (
        <div className="nav-bar">
            <div className="logo">Logo</div>
            <div className="nav-menu">
                <ul className="nav-list">
                    <li>
                        <a href="/home">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/education">Education</a>
                    </li>
                    <li>
                        <a href="/projects">Projects</a>
                    </li>
                    <li>
                        <a href="/resume.">Resume</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Navbar;