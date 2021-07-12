import React from 'react'

const ImageSlide = ({url}) => {
    const styles={
        width: '20%',
        // margin: '5px auto',
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        backgroundPosition: 'center',
        backgroundRepeat  : 'no-repeat',
    }
    return (
        <div className="image-slide" style={styles}>
            <img src={url} />
        </div>
    )
}

export default ImageSlide;
