import React from 'react'
import CardComponent from '../component/CardComponent';
import {useHistory} from 'react-router-dom';

const OwnerInformation = () => {
    const history = useHistory();
    return (
        <div style= {{display: "flex",marginLeft:"4rem  "}}>
        <div style={{minHeight: "100vh", display: "inline-block"}}>
            <button style={{color: "white", backgroundColor:"black", borderRadius: "1rem", margin:"1rem"}} onClick={()=>history.goBack()}>Go back</button>
            <CardComponent />
        </div>
        <div style= {{paddingTop: "3rem", margin: "0px auto"}}>
            
            <div style={{textAlign: "center"}}>
            <h1 style= {{color:"white"}}>Stephen Mascarenhas</h1>
            <h3 style= {{color:"#666666",marginLeft:"1px auto"}} >Founder and CEO</h3>
            </div>
            <p style = {{fontFamily:"serif",fontSize:"20px",color:"GrayText" ,width: "100%", textAlign:"center"}}>My Bonnie lies over the ocean. My Bonnie lies over the sea. <br />My Bonnie lies over the ocean. Oh, bring back my Bonnie to me.<br /> Note that the browser simply ignores the line breaks in the source code!</p>
            
        
        </div>
        </div>
    )
}

export default OwnerInformation;
