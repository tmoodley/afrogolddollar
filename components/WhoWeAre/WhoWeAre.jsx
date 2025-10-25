import React from "react";
import Link from "next/link";

const WhoWeAre = () => {
  return (
    <section id="about" className="about-area pt-130 pb-130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img wow fadeInLeft" data-wow-delay=".2s">
              <img src={"/img/afrogolddollar-logo.png"} alt="Afro Gold Dollar Logo" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content wow fadeInRight" data-wow-delay=".2s">
              <div className="section-title mb-30">
                <span className="sub-title">Who We Are</span>
                <h2 className="title">
                  Africa’s <span>Gold-Backed Digital Currency</span>
                </h2>
              </div>
              <p>
                The <strong>Afro Gold Dollar</strong> is a tokenized gold-backed currency 
                built on Polygon, bridging real-world value and blockchain liquidity. 
                Each coin represents verifiable gold reserves sourced from African mines, 
                empowering holders to stake, trade, or redeem physical gold directly 
                through the Ndeipi ecosystem.
              </p>
              <p>
                Stake your gold and earn <strong>NdeipiCoin</strong> — turning your 
                wealth into a yield-generating digital asset, redefining 
                Africa’s role in the global financial renaissance.
              </p>
              <Link href="https://afrogolddollar.com" className="btn">
                Buy Afro Gold Dollar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

