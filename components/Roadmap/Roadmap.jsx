import { useHorizontalScroll } from "@/lib/hooks/useHorizontalScroll";
import React from "react";
import RoadmapItem from "./RoadmapItem";

const Roadmap = () => {
  const roadmap_items = [
    {
      roadmapTitle: "Q4 2023",
      title: "Concept Development",
      info: [
        "Finalize NdeipiCoin's tokenomics",
        "Secure partnerships with Dandelion Blockchain",
        "Outline integration with Ndeipi App and stock exchange",
      ],
    },
    {
      roadmapTitle: "Q4 2023",
      title: "Initial Research and Partnerships",
      info: [
        "Establish strategic partnerships with CoinChange.io for staking",
        "Integrate with Ark Holding's banking services",
        "Secure licensing and regulatory compliance for NdeipiCoin",
      ],
    },
    {
      roadmapTitle: "Q1 2024",
      title: "Platform Development and Testing",
      info: [
        "Launch private beta of Ndeipi App with NdeipiCoin support",
        "Start NdeipiCoin pre-token sale for early investors",
        "Develop staking mechanism and rewards system",
      ],
    },
    {
      roadmapTitle: "Q1 2024",
      title: "Public Beta Launch",
      info: [
        "Launch NdeipiCoin public sale on exchange",
        "Introduce tokenized shares of Ndeipi stock",
        "Enable borrowing against NdeipiCoin holdings via Ark Holding",
      ],
    },
    {
      roadmapTitle: "Q2 2024",
      title: "Expansion and User Acquisition",
      info: [
        "Expand NdeipiCoin adoption across Zimbabwe, South Africa, and Zambia",
        "Launch major marketing campaign to drive user growth",
        "Roll out full NdeipiCoin features, including P2P transfers",
      ],
    },
    {
      roadmapTitle: "Q3 2024",
      title: "Global Expansion",
      info: [
        "Integrate NdeipiCoin with more global exchanges",
        "Enable cross-border remittances using NdeipiCoin",
        "Expand partnership network to include international banks and businesses",
      ],
    },
    {
      roadmapTitle: "Q4 2024",
      title: "Halal-Compliant Financial Services",
      info: [
        "Launch NdeipiCoin halal-friendly investment features",
        "Offer 5% interest halal loans across Africa",
        "Establish Sharia-compliant financial products with NdeipiCoin",
      ],
    },
    {
      roadmapTitle: "2025 and Beyond",
      title: "Full Ecosystem Development",
      info: [
        "Introduce NdeipiCoin collateralized loans for small businesses",
        "Launch NdeipiCoin staking rewards in Ndeipi App",
        "Develop NdeipiCoin use cases in smart cities and infrastructure",
      ],
    },
  ];

  const scrollRef = useHorizontalScroll();

  return (
    <section id="roadmap" className="roadmap-area pt-130 pb-130">
      <div className="container custom-container-two">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-8">
            <div className="section-title text-center mb-60">
              <span className="sub-title">Our Roadmap</span>
              <h2 className="title">
                NdeipiCoin Strategy and <br /> Project <span>Plan</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div
              className="bt-roadmap_x bt-roadmap-scrollbar"
              ref={scrollRef}
              style={{ overflow: "auto" }}
            >
              <div className="bt-roadmap-wrap">
                {roadmap_items.map((x, index) => (
                  <RoadmapItem key={index} item={x} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Roadmap;
