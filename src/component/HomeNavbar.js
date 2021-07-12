import React, { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import cine from '../images/cine.JPG';
import './HomeNavbar.css';


const HomeNavbar = () => {
    const [scrolled,setScrolled] = useState(false);
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
                    <li><Link to="/" onClick={()=> window.location.reload(false)}><img src={cine} style={{width: "40px", height: "auto"}}/></Link></li>
                    <li><Link to="/" >ABOUT</Link></li>
                    <li>  <Link to="/services">SERVICES</Link></li>
                    <li>  <Link to="/reels" >REELS</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                    
                </ul>
            </nav>
        </div>
    )
}

export default HomeNavbar;







