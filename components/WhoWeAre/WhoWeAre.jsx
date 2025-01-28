import React from "react";
import Link from "next/link";

const WhoWeAre = () => {
  return (
    <section id="about" className="about-area pt-130 pb-130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img wow fadeInLeft" data-wow-delay=".2s">
              <img src={"/img/ndeipicoin-logo-transparent.png"} alt="" />
              <img
                src={"/img/images/about_img02.png"}
                alt=""
                className="img-two"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content wow fadeInRight" data-wow-delay=".2s">
              <div className="section-title mb-30">
                <span className="sub-title">Who we are</span>
                <h2 className="title">
                  The community's <span>1st Utility Token</span> that's linked
                  to Ndeipi Ecosystem.
                </h2>
              </div>
              <p>
                NdeipiCoin is Ndeipi's native cryptocurrency. It is used for
                network operations, transactions, games or collectibles
                built on Ndeipi.
              </p>
              <Link
                href="https://uzx.com/#/exchange/ndeipi_usdt"
                className="btn"
              >
                Purchase Tokens
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
