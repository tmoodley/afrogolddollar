import React from "react";

const DownloadArea = () => {
  return (
    <section className="download-area pt-150 pb-140">
      <div className="container custom-container-four">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
            <div
              className="download-img text-center wow fadeInRight"
              data-wow-delay=".2s"
            >
              <img src={"/img/images/download_img.png"} alt="" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div
              className="download-content wow fadeInLeft"
              data-wow-delay=".2s"
            >
              <div className="section-title section-title-two mb-20">
                <span className="sub-title">Download Gold backed Utility Token App</span>
                <h2 className="title">
                  You can buy and sell from your mobile device
                </h2>
              </div>
              <p>
                Africa’s 1st Gold Backed Utility Token That Offers a 12% APY and The
                platform helps investors to make easy
              </p>
              <div className="download-btn">
                <a href="#">
                  <img src={"/img/images/download_btn01.png"} alt="" />
                </a>
                <a href="#">
                  <img src={"/img/images/download_btn02.png"} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadArea;
