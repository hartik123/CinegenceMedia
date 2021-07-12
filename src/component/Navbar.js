import React, { Component } from 'react';
import './Navbar.css';
import { Link, animateScroll as scroll } from 'react-scroll';
import sample from './new_logo.mp4';
import { BsChevronCompactDown } from 'react-icons/bs';
import { useCallback } from 'react';
// import { FullScreen, useFullScreenHandle } from "react-full-screen";
// import {fullWidthClassName} from 'react-remove-scroll-bar';

const Navbar = () => {

    const textStyle = {
        color: "#fff",
        fontSize: "1.5rem",
        fontWeight: "bold",
        position: "absolute",
        left: "40%",
        top: "86%",
        cursor: "pointer",
    }
    const downIcon = {
        color: "#fff",
        fontSize: "3rem",
        fontWeight: "bold",
        position: "absolute",
        left: "50%",
        top: "90%",
        cursor: "pointer",
    }

    return (

        <div style={{ height: "100vh" }}>






            {/* <div style={{backgroundColor: "black"}}> */}
            <video style={{ backgroundColor: "black" }} className="videoTag" autoPlay loop muted>
                <source src={sample} type='video/mp4' />
            </video>
            <div >
                <Link to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={300}>
                    {/* <p style={textStyle}>Click below to explore more!!!</p> */}
                    {/* <BsChevronCompactDown style={downIcon} /> */}
                    <div class="arrow">
                        {/* <span></span>
                        <span></span> */}
                        <span></span>

                    </div>
                </Link>
            </div>

            {/* </div> */}

        </div>
    );
}


export default Navbar;
































// import React, { Component } from "react";
// import { Link, animateScroll as scroll } from "react-scroll";

// export default class Navbar extends Component {

//   render() {
//     return (
//       <nav className="nav" id="navbar">
//         <div className="nav-content">

//           <ul className="nav-items">
//             <li className="nav-item">
//               <Link
//                 activeClass="active"
//                 to="section1"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//               >
//                 Section 1
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 activeClass="active"
//                 to="section2"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//               >
//                 Section 2
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 activeClass="active"
//                 to="section3"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//               >
//                 Section 3
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 activeClass="active"
//                 to="section4"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//               >
//                 Section 4
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 activeClass="active"
//                 to="section5"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//               >
//                 Section 5
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 activeClass="active"
//                 to="contact"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//               >
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     );
//   }
// }
