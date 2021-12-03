import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Typical from "react-typical";

import "./styles.css";
import img1 from "../../images/projects/11.png";
import img2 from "../../images/projects/12.png";
import img3 from "../../images/projects/9.png";
import img4 from "../../images/projects/8.png";
import img5 from "../../images/projects/7.png";
import img6 from "../../images/projects/6.png";

import "./styles.css";
// install Swiper modules

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  duration: 2000,
});

const Newprojects = () => {
  // install Swiper modules
  SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);
  return (
    <div className="swiper-container">
      <h1
        data-aos="zoom-in"
        id="Projects"
        style={{ "font-family": "'Roboto Mono', monospace" }}
        className="text-center mt-5"
      >
        My-<span style={{ color: "red" }}>Projects</span>
      </h1>

      <>
        <Swiper
           autoplay={{ delay: 3000 }} 
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          className="mySwiper"
        >
          <SwiperSlide className="m-3">
            <div className="card">
              <img src={img1} className="card-img-top img-fluid" alt="..." />

              <div className="card-body">
                <button className="react-button">React</button>
                <button className="reactrouter-button">React Router</button>
                <button className="bootstrap-button">Bootstrap</button>
                <button className="Mongodb-button">Mongo Db</button>
              </div>
              <div className="d-flex justify-content-center align-items-center my-2">
                <a
                  target="_Blank"
                  className="link text-decoration-none m-3 text-dark"
                  href="https://assingment-11-4623d.web.app/"
                >
                  <i class="fas fa-link me-2"></i>Live link
                </a>
                <a
                  target="_Blank"
                  className="link text-decoration-none text-dark"
                  href="https://github.com/narrow-space/royal-hotel-frontend"
                >
                  <i class="fab fa-github me-2"></i>Cleint Code
                </a>
                <a
                  target="_Blank"
                  className="link text-decoration-none text-dark"
                  href="https://github.com/narrow-space/royal-hotel-backend"
                >
                  <i class="fab fa-github mx-1"></i>Backend Code
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="m-3">
            <div className="swipercard">
              <img src={img2} className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <button className="react-button">React</button>
                <button className="reactrouter-button">React Router</button>
                <button className="bootstrap-button">Bootstrap</button>
                <button className="Mongodb-button">Mongo Db</button>
              </div>
              <div className="d-flex justify-content-center align-items-center my-2">
                <a
                  target="_Blank"
                  className="link text-decoration-none m-3 text-dark"
                  href="https://assingment-12-2b1f1.web.app/"
                >
                  <i class="fas fa-link me-2"></i>Live link
                </a>
                <a
                  target="_Blank"
                  className="link text-decoration-none m-3 text-dark"
                  href="https://github.com/narrow-space/Key-moto-Frontend"
                >
                  <i class="fab fa-github me-2"></i>Cleint Code
                </a>
                <a
                  target="_Blank"
                  className="link text-decoration-none text-dark"
                  href="https://github.com/narrow-space/Key-moto-backend"
                >
                  <i class="fab fa-github mx-1"></i>Backend Code
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="m-3">
            <div className="card" style={{ width: "18rem;" }}>
              <img src={img3} className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <button className="react-button">React</button>
                <button className="reactrouter-button">React Router</button>
                <button className="bootstrap-button">Bootstrap</button>
                <button className="Mongodb-button">Firebase</button>
              </div>
              <div className="d-flex justify-content-center align-items-center my-2">
                <a
                  target="_Blank"
                  className="link text-decoration-none m-3 text-dark"
                  href="https://gymaster-firebase.web.app/"
                >
                  <i class="fas fa-link me-2"></i>Live link
                </a>
                <a
                  target="_Blank"
                  className="link text-decoration-none text-dark"
                  href="https://github.com/narrow-space/gym-master"
                >
                  <i class="fab fa-github me-2"></i>Cleint Code
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="m-3">
            <div className="card" style={{ width: "18rem;" }}>
              <img src={img4} className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <button className="react-button">React</button>
                <button className="reactrouter-button">React Router</button>
                <button className="bootstrap-button">Bootstrap</button>
              </div>
              <div className="d-flex justify-content-center align-items-center my-2">
                <a
                  target="_Blank"
                  className="link text-decoration-none m-3 text-dark"
                  href="https://uddemy.netlify.app/home"
                >
                  <i class="fas fa-link me-2"></i>Live link
                </a>
                <a
                  target="_Blank"
                  className="link text-decoration-none text-dark"
                  href="https://github.com/narrow-space/uddemy"
                >
                  <i class="fab fa-github me-2"></i>Cleint Code
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="m-3">
            <div className="card" style={{ width: "18rem;" }}>
              <img src={img5} className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <button className="react-button">Html</button>
                <button className="reactrouter-button">Css</button>
                <button className="bootstrap-button">Netlify</button>
              </div>
              <div className="d-flex justify-content-center align-items-center my-2">
                <a
                  className="link text-decoration-none m-3 text-dark"
                  href="https://amazing-neumann-51d84f.netlify.app/"
                >
                  <i class="fas fa-link me-2"></i>Live link
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="m-3">
            <div className="card" style={{ width: "28rem;" }}>
              <img src={img6} className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <button className="react-button">HTML</button>
                <button className="reactrouter-button">CSS</button>
                <button className="bootstrap-button">Javascript</button>
              </div>
              <div className="d-flex justify-content-center align-items-center my-2">
                <a
                  target="_Blank"
                  className="link text-decoration-none m-3 text-dark"
                  href="https://objective-hermann-32afe7.netlify.app/"
                >
                  <i class="fas fa-link me-2"></i>Live link
                </a>
                <a
                  target="_Blank"
                  className="link text-decoration-none text-dark"
                  href="https://github.com/narrow-space/ranga-store/tree/main/ranga-store-fix-narrow-space"
                >
                  <i class="fab fa-github me-2"></i>Cleint Code
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Newprojects;
