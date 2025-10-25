import React from "react";
import SalesTabButton from "./SalesTabButton";
import SalesTabContent from "./SalesTabContent";

const Sales = () => {
  const chart_info_list = ["Gold-Backed: 100% Verified Reserves"];

  return (
    <section id="sales" className="chart-area chart-bg">
      <div className="container">
        <div className="chart-inner">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10 order-0 order-lg-2">
              <div className="wow fadeInRight" data-wow-delay=".2s">
                <img
                  src={"/img/afrogolddollar-logo.png"}
                  alt="Afro Gold Dollar"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-10">
              <div
                className="chart-content wow fadeInLeft"
                data-wow-delay=".2s"
              >
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <SalesTabButton
                    title="Token Allocation"
                    className="active"
                    id="token-tab"
                    target="#token"
                    ariaControls="token"
                    ariaSelected={true}
                  />
                </ul>

                <div className="tab-content" id="myTabContent">
                  <SalesTabContent
                    className={"show active"}
                    id="token"
                    ariaLabel="token-tab"
                    title="Starting at 1 Afro Gold Dollar = 10g of 24K Gold"
                    description="Each Afro Gold Dollar token is backed by real, verifiable gold stored in audited vaults. Redeem physical gold coins or stake to earn NdeipiCoin rewards. The tokenization is secured by Polygon and powered by Nethereum for enterprise-grade reliability."
                    link="https://afrogolddollar.com"
                  />
                </div>

                <ul className="chart-info-list">
                  {chart_info_list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sales;

