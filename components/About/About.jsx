import React from "react";

const About = () => {
  return (
    <section id="about" className="about-area-two">
      <div className="container custom-container-four">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              className="about-img-two text-center wow fadeInLeft"
              data-wow-delay=".2s"
            >
              <img src={"/img/images/h2_about_img.png"} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="about-content-two wow fadeInRight"
              data-wow-delay=".2s"
            >
              <div className="section-title section-title-two mb-15">
                <span className="sub-title">ABOUT Gold Backed Utility Token</span>
                <h2 className="title">
                  NdeipiCoin is the best for your Utilty Token
                </h2>
              </div>
              <p>
                Africa’s 1st Gold Backed Utility Token That Offers a 12% APY.
              </p>
              <div className="about-list">
                <ul>
                  <li>
                    <i className="fas fa-check"></i>Earn 12% APY by investing in AfroDollars
                  </li>
                  <li>
                    <i className="fas fa-check"></i>Simply invest USDC and start earning!
                  </li>
                </ul>
              </div>

              <a
                href={"/img/images/h2_about_img.png"}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-two"
              >
                Download Document
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="about-shape-wrap">
        <img
          src={"/img/images/about_shape01.png"}
          alt=""
          className="shape-one"
        />
        <img
          src={"/img/images/about_shape02.png"}
          alt=""
          className="shape-two rotateme"
        />
      </div>
    </section>
  );
};

export default About;
