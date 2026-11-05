import react from 'react';
import { FiArrowDown } from 'react-icons/fi';

function Navbar() {
    return (
        <header className="navbar">
            <nav className="nav-links">
                <ul className="nav-list">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skill">Skill</a></li>
                     <li><a href="#project">Project</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <a href="#contact" className="hire-me-button">
                    Hire Me <FiArrowDown />
                </a>
            </nav>
        </header>
    )
}

export default Navbar;