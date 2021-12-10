import React from "react";
import Particles from "react-tsparticles";

import img from "../../images/imran.jpg";

import "../Menubar/Menubar";
import "./Banner.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Menubar from "../Menubar/Menubar";
import Typical from "react-typical";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

// ..
AOS.init({
  duration:2000
});

const Banner = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="banner-section">
      <Container>
        <div className="row">
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              background: {
                color: {
                  value: "",
                },
              },
              fpsLimit: 60,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                  },
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 100,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#DC143C",
                },
                links: {
                  color: "#DC143C",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 1,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    value_area: 1200,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  random: true,
                  value: 5,
                },
              },
              detectRetina: true,
            }}
          />
          <div style={{"marginTop":"150px"}} className="col-lg-6 col-md-12"
           data-aos="fade-right"
           data-aos-offset="300"
           data-aos-easing="ease-in-sine"
           
          >
            <div className="text-1">Hellow,my name is</div>
            <div className="text-2">Imran Hasan</div>
            <div className="text-3">
              And I'm a
              <span id="typical">
                <Typical
                  className=""
                  steps={[
                    "Frontend DevoloPer",
                    2000,
                    "Web DesiGner",
                    2000,
                    "React DevoloPer",
                    2000,
                    "You can hire me!!",
                    2000,
                  ]}
                  loop={Infinity}
                  wrapper="b"
                />
              </span>
            </div>
            <div className="site-button mt-5">
              <div className="d-flex flex-row flex-wrap">
                <a href="https://drive.google.com/uc?export=download&id=1cGDK_SWScm3Um7xSD6_yKtc2cn-wnumi"className="btn button-1">
                  Download Resume
                </a>
                <a className="btn button-2" href="">
                  Hire Me
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div
            style={{"marginTop":"100px"}}
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
            <img className="my-img img-fluid img-thumbnail" src={img} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
