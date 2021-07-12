import React from 'react'
import {Link} from 'react-router-dom';
import './About.css';
import Image from 'react-bootstrap/Image';
import {Card, Button, Carousel } from 'react-bootstrap';
import Nav from '../component/Nav';
import sun from '../images/sun.jpg';
import CardComponent from '../component/CardComponent';
import CardScroll from '../component/CardScroll';

const About = () => {
  const container ={
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap"
  }

  return (
<>

    <div id="about" style={{ minHeight: "100vh", marginTop: "-0.97rem"}}>

    {/* {true && <Nav />} */}
      {/* <center>
      <p style={{fontSize: "2rem", width: "60%",padding: "2rem", textAlign: "center", color: "#bbb"}}>CINEGENCE MEDIA is a boutique studio located in Mumbai India the heart of Bollywood, and the centre for the best talent available across the world for visual effects with the experience of working on some of the biggest Hollywood Movies.</p>
      </center> */}

            <Card className="bg-dark text-white" style={{margin: 0,padding: 0}}>
                <Card.Img src={sun} style={{height: "500px"}} alt="Card image" />
                <Card.ImgOverlay style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
                    <center>
                    <Card.Title ><h1 style={{fontSize: "50px"}}>Cinegence Media</h1></Card.Title>
                    <Card.Text style={{fontSize: "1.5rem", width: "65%",padding: "2rem", textAlign: "center", color: "#bbb"}}>
                    CINEGENCE MEDIA is a boutique studio located in Mumbai India the heart of Bollywood, and the centre for the best talent available across the world for visual effects with the experience of working on some of the biggest Hollywood Movies.
                    </Card.Text>
                    </center>
                </Card.ImgOverlay>
            </Card>

        <div style={{display: "flex", justifyContent: "center", fontFamily: 'Quicksand, sans-serif', fontWeight: "bolder", marginTop: "2rem"}}>
      <div style={{width: "40%", margin: "1rem"}}>
      <div><span style={{fontSize: "1.3rem", color: "#ccc"}}>Our Vision:</span> “To become a
                              Premiere Visual Effects Service & Solution Provider for our
                              clients”.
      </div><br />
      <div>
      <span style={{fontSize: "1.3rem", color: "#ccc"}}>Our Mission:</span> To create a resource pool of task
                              specific industry relevant creative skilled talent across geographies and provide the best
                              in class and most effective creative solution for our clients in the shortest turnaround
                              times possible which is scalable as per needs.
      </div><br />

      <div>At CineGence we offer Visual Effects Pre-Production,
                            Production and Post-Production Services to the Indian and Overseas Film and Web Series
                            Visual Effects Clients. Since the first few months of our existence, we’ve been blessed with
                            the opportunity to work with a range of budgets and production scales.</div><br />
            <div>
            <span style={{fontSize: "1.3rem", color: "#ccc"}}>List of Movies:</span> Asura (Chinese Cinema), Robo 2.0, Zero, Sonchiriya, Student
                            of The Year - 2, India’s Most Wanted, Manikarnika, Made In China, Stree, Kesari, Kalank,
                            Prassthaanam, Gold, Housefull 4 (Bollywood Cinema) Antariksham 9000 KMPH, Pailwaan, Bigil,
                            Sye Raa Narasimha Reddy, Moothon (Tollywood / South Indian Cinema), Moghul, Leila, Forgotten
                            Army, Moon-N-Me & Snowfall Season – 1 (OTT Platforms).
                        
            </div>
            </div>
            <div style={{width: "40%", margin: "1rem"}}>
              <div>The most recent works being 30 Monedas Spanish Horror Series for HBO Spain & Portugal, EL CID for Amazon, Bollywood Feature Film "Toofaan" releasing on Amazon Prime and a Netflix series that is in production at the moment.</div><br />
              <div>
              Servicing our Indian & International client base, we are all about building long term relationships. Our production pipeline is constantly being evolved, reshaped and customised to manage client production needs and our production teams are involved in every step of the process, fitting the very best of customized solutions into our client’s budgets and schedules.
              </div><br />

              <div>With a rock solid team CineGence primarily operates its VFX Studio from Mumbai by engaging the best creative resources across India. We also have our local presence at Madrid in Spain fronted by Gabriel Lopez, to help manage different levels of services that we offer to our Spanish and Latin American clients from India.</div><br />

            <div>
            If you have any Visual Effects requirements, we look forward to an opportunity to meet with you and explore ways in which we could come on board and help you unearth every creative possibility to see your stories, visions, concepts and ideas come alive. </div>
            </div>
            </div>



<br />
<div style={{backgroundColor: "#111"}}>
<hr style={{border: "0.1px solid #ccc", backgroundColor: "#ccc"}}/>            <div>
              <p style={{fontSize: "3rem", textAlign: "center", color: "#eee"}}>OUR WORK</p>
            </div>
            <CardScroll />
          
            
<br />
</div>
<div style={{backgroundColor: "#666", color: "#666"}}>
            <hr style={{border: "0.1px solid #ccc", backgroundColor: "#ccc"}}/>
            <div>
              <p style={{fontSize: "3rem", textAlign: "center", color: "white"}}>OUR TEAM</p>
            </div>
            <div style={container}>
            <Link to="/ownerinformation"><CardComponent /></Link>
            <Link to="/ownerinformation"><CardComponent /></Link>
            <Link to="/ownerinformation"><CardComponent /></Link>
            
            </div>
            </div>



    
    </div>
</>
  )
}

export default About;
































