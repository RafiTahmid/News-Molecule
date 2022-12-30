import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CR7 from "../../../assets/brands/CR7.jfif";
import Messi from "../../../assets/brands/Messi.jfif";

const BrandCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={CR7} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Messi} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BrandCarousel;
