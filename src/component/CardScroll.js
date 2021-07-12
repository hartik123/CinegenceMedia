import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import Baaghi3 from '../about_posters/Baaghi3.jpg';
import Cats from '../about_posters/Cats.jpg';
import Crawl from '../about_posters/Crawl.jpg';
import EL_CID from '../about_posters/EL_CID.jpg';
import Gold from '../about_posters/Gold.jpg';
import Gunjan_Saxena from '../about_posters/Gunjan_Saxena.jpg';
import Kalank from '../about_posters/Kalank.jpg';
import Kesari from '../about_posters/Kesari.jpg';
import Leila from '../about_posters/Leila.jpg';
import Pailwaan from '../about_posters/Pailwaan.jpg';
import Prassthanam from '../about_posters/Prassthanam.jpg';
import SP_Faraar from '../about_posters/S&P_Faraar.jpg';
import SMJS from '../about_posters/SMJS.jpg';
import Snowfall from '../about_posters/Snowfall.jpg';
import Sonchiriya from '../about_posters/Sonchiriya.jpg';
import The_Boat from '../about_posters/The_Boat.jpg';
import Zero from '../about_posters/Zero.jpg';
import './CardScroll.css';

import Description from "./Description";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];



function CardScroll() {
    const [images, setImages] = useState([])
    const itemStyle = {
        display: "block",
        maxHeight: "100%",
        width: "auto",
        height: "auto"
    }
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos?_limit=5')
            .then(res => res.json())
            .then(images => setImages(images))
            .catch(err => err.data)
    }, [])


    return (
        <>
            <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1>
            <div className="CardScroll">
                <Carousel breakPoints={breakPoints}>
                    {/* {
                        images.map(image => {
                            return (
                                <Item><img key={image.id} src={`https://picsum.photos/350/300?random=${image.id}`} onClick={() => <Description />} /></Item>
                            )
                        })
                    } */}
                    {/* <Item><img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg" /></Item>
                    <Item><img src="https://www.nature.com/immersive/d41586-021-00095-y/assets/3TP4N718ac/2021-01-xx_jan-iom_tree-of-life_sh-1080x1440.jpeg" /></Item>
                    <Item><img src="https://images.ctfassets.net/hrltx12pl8hq/66lRNN2kfHcVSUMrmrcKxf/76b78071032586ff9766d8eb51592f21/free-nature-images.jpg?fit=fill&w=840&h=350" /></Item>
                    <Item><img src="https://images.unsplash.com/photo-1562979314-bee7453e911c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bXVtYmFpfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" /></Item>
                    <Item><img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" /></Item>
                    <Item><img src="https://static.toiimg.com/thumb/msid-31346025,width-1070,height-580,resizemode-75,imgsize-31346025,pt-32,y_pad-40/31346025.jpg" /></Item>
                    <Item><img src="https://www.technipages.com/wp-content/uploads/2019/07/Cover-600x371.jpg" /></Item> */}


                    <Item>
                        <div class="flip-box itemStyle">
                            <div class="flip-box-inner">
                                <div class="flip-box-front">
                                    <img src={Baaghi3} style={itemStyle} />
                                </div>
                                <div class="flip-box-back" style= {{paddingTop:"0.5rem"}}>
                                    <h1>Baaghi3</h1>
                                    <pre style={{ fontSize: "1rem" }}><strong>Director:</strong> LOREM IPSUM <br />
                                    <strong>Producer:</strong> LOREM IPSUM</pre>
                                </div>
                            </div>
                        </div></Item>
                    <Item><img src={Cats} style={itemStyle} alt="" /></Item>
                    <Item><img src={Crawl} style={itemStyle} alt="" /></Item>
                    <Item><img src={EL_CID} style={itemStyle} alt="" /></Item>
                    <Item><img src={Gold} style={itemStyle} alt="" /></Item>
                    <Item><img src={Gunjan_Saxena} style={itemStyle} alt="" /></Item>
                    <Item><img src={Kalank} style={itemStyle} alt="" /></Item>
                    <Item><img src={Kesari} style={itemStyle} alt="" /></Item>
                    <Item><img src={Leila} style={itemStyle} alt="" /></Item>
                    <Item><img src={Pailwaan} style={itemStyle} alt="" /></Item>
                    <Item><img src={Prassthanam} style={itemStyle} alt="" /></Item>
                    <Item><img src={SP_Faraar} style={itemStyle} alt="" /></Item>
                    <Item><img src={SMJS} style={itemStyle} alt="" /></Item>
                    <Item><img src={Snowfall} style={itemStyle} alt="" /></Item>
                    <Item><img src={Sonchiriya} style={itemStyle} alt="" /></Item>
                    <Item><img src={The_Boat} style={itemStyle} alt="" /></Item>
                    <Item><img src={Zero} style={itemStyle} alt="" /></Item>

                </Carousel>
            </div>
        </>
    );
}

export default CardScroll;