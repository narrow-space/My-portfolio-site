import React from "react";
import img from "../../images/imran.jpg";
import "../Menubar/Menubar"
import "./Banner.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Menubar from "../Menubar/Menubar";
import Typical from 'react-typical'
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
// ..
AOS.init({
  duration: 1000,
});

const Banner = () => {
  return (
    
<div className="banner-section">
  <Menubar/>
<Container>
<Row>
  <Col data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="mt-5" sm={12} md={6}>
      <div className="text-1">Hellow,my name is</div>
      <div className="text-2">Imran Hasan</div>
      <div className="text-3">And I'm a 
      <span id="typical">
      <Typical className=""
        steps={[
          'Frontend Devoloper',2000,
          'Web Designer',2000,
          'React Devoloper',2000,
          'You can hire me',2000
        ]}
        loop={Infinity}
        wrapper="b"
      />
      </span>

      </div>
    </Col>
  <Col sm={12} md={6}>
    <div  data-aos="fade-up"
     data-aos-duration="3000">
    <img className="my-img img-fluid  " src={img} alt="" />
    </div>
  </Col>
</Row>

</Container>
</div>
  );
};

export default Banner;
