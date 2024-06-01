import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(){

    return (
        <div className="nav-bar">
            <div className="logo">Logo</div>
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
                        <Link to="/Resume">Resume</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Navbar;