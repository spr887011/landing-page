import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../img/image 4.png";
import img2 from "../img/image 6.png";
import img3 from "../img/image 7.png";
import img4 from "../img/image 8.png";
import img5 from "../img/image 9.png";
import img6 from "../img/image 6.png";

function UncontrolledExample() {
  const divStyle = {
    width: "500px",
    margin: "auto",
  };

  const imgStyle = {
    maxHeight: "180px",
    filter: "brightness(70%)",
  };

  return (
    <div className="container mt-4 d-flex justify-content-center">
      <div className="custom-container" style={divStyle}>
        <div className="overflow-hidden">
          <div
            className="rounded p-3 d-flex align-items-center justify-content-center"
            style={{ backgroundColor: "#E8BABA8A" }}
          >
            <Carousel interval={null}>
              <Carousel.Item>
                <img
                  src={img1}
                  alt=""
                  className=" mx-auto d-block"
                  style={imgStyle}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={img2}
                  alt=""
                  className=" mx-auto d-block"
                  style={imgStyle}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={img3}
                  alt=""
                  className=" mx-auto d-block"
                  style={imgStyle}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={img4}
                  alt=""
                  className=" mx-auto d-block"
                  style={imgStyle}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={img5}
                  alt=""
                  className=" mx-auto d-block"
                  style={imgStyle}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={img6}
                  alt=""
                  className=" mx-auto d-block"
                  style={imgStyle}
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UncontrolledExample;
