import React from 'react';
import './Navbar.css';
import { Link, animateScroll as scroll } from 'react-scroll';
import { RiMovie2Fill } from 'react-icons/ri';


const Nav = () => {
    return (
        <div>
            <nav>



<div class="overlay" style={{ backgroundColor: "black", color: "#fff"}}>



    <ul>
        <li><Link activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}><RiMovie2Fill style={{ fontSize: "3rem",marginTop: "1rem", textAlign: "center" }} /></Link></li>

        <li><Link activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>Projects</Link></li>
        <li><Link activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}>About</Link></li>
        <li><Link activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>Contact</Link></li>
    </ul>
</div>
</nav>
        </div>
    )
}

export default Nav
