import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.png';
function Navbar(){

    return (
        <div className="nav-bar">
            <div className="logo">
                <img  src={logo}></img>
            </div>
            <div className="nav-menu">
                <ul className="nav-list">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Education">Education</Link>
                    </li>
                    <li>
                        <Link to="/Projects">Projects</Link>
                    </li>
                    <li>
                        <a href="https://www.google.com" target="_blank" className="navbar-anchor">
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Navbar;