import json5 from 'json5';
import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import CustomFile from '../component/CustomFile';
import img100 from '../images/img100.jpg';
import img101 from '../images/img101.jpg';
import img102 from '../images/img102.jpg';
import Carousel from '../component/Carousel';

const Projects = () => {
    

    return (
        <div id="projects" style={{minHeight: "100vh", width: "100vw", backgroundColor: "#111"}}>


            <h1 style={{textAlign: "center",  fontSize: "3.5rem", margin: 0, color: "#fff"}}>IN PROJECTS PAGE</h1>

            
            
            <Carousel />

             <div class="movie-container" style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>

                 <CustomFile />
                {/* <Pdt/>
                <Pdt/>
                <Pdt/>
                <Pdt/>
                <Pdt/>
                <Pdt/> */}
                {/* {
                    products.map(product => <Pdt key={product.id} product={product} /> )
                }  */}
            </div> 
            


        </div>
    )
}

export default Projects;
