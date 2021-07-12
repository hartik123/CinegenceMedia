import React from 'react'
import stephen from '../images/stephen.jpg'

const CardComponent = () => {
    return (
        <div style={{backgroundColor: "#222", color: "#aaa",fontSize: "17px", width: "300px",margin: "20px", textAlign: "center", border: "3px solid #ccc", borderRadius: "10px"}}>
            <img src={stephen} alt="stephen" style={{padding: "10px"}}/>
            <p >My Bonnie lies over the ocean. My Bonnie lies over the sea. My Bonnie lies over the ocean. Oh, bring back my Bonnie to me.

Note that the browser simply ignores the line breaks in the source code!</p>
        </div>
    )
}

export default CardComponent;
