import React from "react";
import Link from "next/link";

const WhitePaper = () => {
  return (
    <section className="document-area pt-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 order-2 order-lg-0">
            <div
              className="document-img text-center wow fadeInUp"
              data-wow-delay=".2s"
            >
              <img src={"/img/images/afrogolddollar-coin.png"} alt="Afro Gold Dollar Whitepaper" />
            </div>
          </div>

          <div className="col-lg-5 col-md-7">
            <div
              className="document-content mt-50 wow fadeInRight"
              data-wow-delay=".2s"
            >
              <div className="section-title mb-35">
                <span className="sub-title">Whitepaper</span>
                <h2 className="title">
                  Read Afro Gold Dollar <span>Documents</span>
                </h2>
              </div>

              <p className="mb-3">
                The <strong>Afro Gold Dollar</strong> represents a new financial standard for Africa — 
                a tokenized, gold-backed digital currency built on <strong>Polygon</strong> and powered by 
                <strong> Nethereum</strong>. Each token is tied to audited gold reserves in Africa and redeemable 
                through the <strong>Ndeipi ecosystem</strong>. Learn how Afro Gold Dollar connects 
                blockchain, gold, and inclusive finance in the official documents below.
              </p>

              <ul className="document-list">
                <li>Afro Gold Dollar Whitepaper</li>
                <li>Gold Reserve & Redemption Policy</li>
                <li>Tokenomics & Staking Overview</li>
                <li>Regulatory & Compliance Framework</li>
                <li>One Pager Summary</li>
              </ul>

              <Link href="/AfroGoldDollar_Whitepaper.pdf" className="btn">
                Download Whitepaper
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhitePaper;

