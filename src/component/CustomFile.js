import React from 'react';
import image1 from './devdas.jfif';
import './CustomFile.css';

const CustomFile = () => {
    const card = {
        color: "white",
        border: "1px solid #ccc",
        padding: 10,
        margin: 50,
        backgroundColor: "#222",
        borderRadius: 10

    }

    const content = {
        color: "#bbb"
    }
    return (
        <a href="https://www.youtube.com/">
            <div style={card}>
                <img className="imgStyle" src={image1} />
                <div style={content}>
                    <h1>Devdas</h1>
                    <p>Rating: 6/10</p>
                    <p>Description: Story of spy</p>
                </div>
            </div>
        </a>
    )
}

export default CustomFile;
