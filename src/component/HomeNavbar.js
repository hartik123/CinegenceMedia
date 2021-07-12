import React, { useState,useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import cine from '../images/cine.JPG';
import {animateScroll as scroll} from 'react-scroll';
import './HomeNavbar.css';
// import {UserContext} from '../App';


const HomeNavbar = () => {
    const [scrolled,setScrolled] = useState(false);

    // const prop = useContext(UserContext);

    const handleScroll=() =>{
        const offset = window.scrollY;
        if(offset>800){
            console.log('true',offset);
            setScrolled(true);
        }
        else{
            console.log('false',offset);
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        
    })

    const scrollToTop=()=>{
        scroll.scrollToTop();
    }

    let navbarClasses=['navbar'];
    if(scrolled){
        navbarClasses.push('scrolled')
    }


    return (
        <div>
            <nav className={navbarClasses.join(" ")} style={{ backgroundColor: "#fff", width: "100%", transition: "all .7s ease-in"}}>
                <ul style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    listStyleType: "none",
                    fontSize: "1.5rem",
                    marginTop: "1rem",
                    height: "4rem",

                    alignItems: "center",
                    fontWeight: "bold",
                    color: "black"
                }}>
                    <li><Link to="/" ><img src={cine} style={{width: "40px", height: "auto"}} onClick={()=>scrollToTop()} /></Link></li>
                    <li><Link to="/" >ABOUT</Link></li>
                    <li>  <Link to="/services" >SERVICES</Link></li>
                    <li>  <Link to="/reels" >REELS</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                    
                </ul>
            </nav>
        </div>
    )
}

export default HomeNavbar;








