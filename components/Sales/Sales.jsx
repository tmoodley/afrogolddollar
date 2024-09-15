import React from "react";
import SalesTabButton from "./SalesTabButton";
import SalesTabContent from "./SalesTabContent";

const Sales = () => {
  const chart_info_list = [
    "Bitcoin: 70%",
    "Gold: 30%"
  ];

  return (
    <section id="sales" className="chart-area chart-bg ">
      <div className="container">
        <div className="chart-inner">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10 order-0 order-lg-2">
              <div className="chart-wrap wow fadeInRight" data-wow-delay=".2s">
                <img src={"/img/images/chart.png"} alt="" />
                <ul>
                  {chart_info_list.map((x, index) => (
                    <li key={index}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-10">
              <div
                className="chart-content wow fadeInLeft"
                data-wow-delay=".2s"
              >
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <SalesTabButton
                    title="Funding Allocation"
                    className="active"
                    id="funding-tab"
                    target="#funding"
                    ariaControls="funding"
                    ariaSelected={true}
                  />

                  <SalesTabButton
                    title="Token Allocation"
                    className=""
                    id="token-tab"
                    target="#token"
                    ariaControls="token"
                    ariaSelected={false}
                  />
                </ul>

                <div className="tab-content" id="myTabContent">
                  <SalesTabContent
                    className={"show active"}
                    id="funding"
                    ariaLabel="funding-tab"
                    title="1 NdeipiCoin = 1 Ndeipi Share"
                    description=" Backed by 70% Bitcoin : 30% Gold pegged to the Ndeipi Stock on several African Stock Exchanges listing soon."
                    link="https://opensea.io/ndeipi"
                  />

                  <SalesTabContent
                    className={""}
                    id="token"
                    ariaLabel="token-tab"
                    title="1 NdeipiCoin = $7.95"
                    description=" Our Pre-Token Sale starting at $7.95"
                    link="https://opensea.io/ndeipi"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sales;
