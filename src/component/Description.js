import React, { useState, useEffect } from 'react';

const Description = (props) => {
    const [image, setImage] = useState({})


    // useEffect(()=>{
    //     fetch('props.url')
    //     .then(res=>res.json)
    //     .then(data=>setImage(data))
    //     .catch(err=>console.log(err.data))
    // })
    return (
        <div>
            <img src="{`https://picsum.photos/350/300?random=1`} "/>
            <h1>This is description page</h1>
        </div>
    )
}

export default Description;
