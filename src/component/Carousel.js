import React from 'react';
import Arrow from './Arrow';
import ImageSlide from './ImageSlide';

const name= 'hartik'
const imgUrls = ['https://www.holidify.com/images/bgImages/MUMBAI.jpg', 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg', 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__340.jpg']

class Carousel extends React.Component{
    constructor(props)
    {
        super(props);
       

        this.state={
            currentImageIndex: 0,
            
        };
        
        
        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }
    

    previousSlide(){
        const lastIndex = imgUrls.length-1;
        const {currentImageIndex} = this.state;
        const shouldResetIndex = currentImageIndex ===0;
        const index = shouldResetIndex? lastIndex: currentImageIndex-1;

        this.setState({
            currentImageIndex: index,
            
        })
    }

    nextSlide(){
        const lastIndex = imgUrls.length-1;
        const {currentImageIndex} = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex? 0: currentImageIndex+1;

        this.setState({
            currentImageIndex: index,
            imgUrls: []
            
        })
    }
     
  

    render(){
        return(
            <div className="carousel">
                
                <Arrow
                    direction="left"
                    clickFunction={this.previousSlide}
                    glyph="&#9964;" />

                <ImageSlide url={imgUrls[this.state.currentImageIndex]} />

                <Arrow
                    direction="right"
                    clickFunction={this.nextSlide}
                    glyph="&#9964;" />

            </div>
        )
    }
}

export default  Carousel;