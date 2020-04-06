import React, {useState} from 'react'
import {Carousel} from 'react-bootstrap';
import image1 from './recipe1.jpg';
import image2 from './recipe.jpg';
import './index.css';

function CarouselSlider() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
              <img
                className="d-block w-100"
                src={image1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide</h3>
                <p>First</p>
              </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
              <img
                className="d-block w-100"
                src={image2}
                alt="Second"
              />
              <Carousel.Caption>
                <h3>Second slide</h3>
                <p>second</p>
              </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
      );
  }

  export default CarouselSlider;