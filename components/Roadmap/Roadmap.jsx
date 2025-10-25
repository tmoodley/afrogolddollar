import { useHorizontalScroll } from "@/lib/hooks/useHorizontalScroll";
import React from "react";
import RoadmapItem from "./RoadmapItem";

const Roadmap = () => {
  const roadmap_items = [
    {
      roadmapTitle: "Q4 2025",
      title: "Productization & Compliance",
      info: [
        "Finalize Afro Gold Dollar specs: 10g / 20g / 50g (24K) + 1oz Afro Silver Dollar",
        "MOUs with vaults/refineries in Lusaka, Harare, Johannesburg, Dubai",
        "Proof-of-Reserves oracle MVP on Polygon (attestations + serial/QR mapping)",
        "Security review + smart-contract audit (Nethereum stack)",
      ],
    },
    {
      roadmapTitle: "Q1 2026",
      title: "Beta & Redemption Pilot",
      info: [
        "Limited mint run with engraved serial + QR → on-chain certificate",
        "Redemption Desk pilot: scan-to-redeem coins/bars via Ndeipi App",
        "KYC/AML onboarding flows & qualified custody agreements",
        "Staking module: Stake Gold → earn NdeipiCoin rewards",
      ],
    },
    {
      roadmapTitle: "Q2 2026",
      title: "Public Launch",
      info: [
        "Public sale with market-maker liquidity (DEX + CEX) and fiat on-ramps",
        "Merchant SDK & POS QR payments (invoice in AGD, settle in stablecoin/fiat)",
        "Logistics SLAs for insured shipping, buyback & instant quotes",
      ],
    },
    {
      roadmapTitle: "Q3 2026",
      title: "Scale & Integrations",
      info: [
        "Cross-border remittances corridors (ZM • ZW • ZA • NG → global)",
        "Institutional treasury tools: bulk mint/redeem, statements, APIs",
        "Expanded Proof-of-Reserves: continuous attestations + public dashboards",
      ],
    },
    {
      roadmapTitle: "Q4 2026",
      title: "Ecosystem Expansion",
      info: [
        "Afro Platinum Dollar (10g) pilot & Afro Copper Dollar (100g) industrial line",
        "Halal-compliant savings plans & profit-share structures",
        "Secondary markets/OTC desk for large redemptions and liquidity blocks",
      ],
    },
    {
      roadmapTitle: "2027 and Beyond",
      title: "Network Effects & Sovereign Rails",
      info: [
        "Smart-city pilots: payroll, vendor settlement, and municipal treasuries in AGD",
        "Reserve hedging: options/forwards for gold inventory & basis risk",
        "Regional vault network + L2 scaling for micro-payments",
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
                Afro Gold Dollar Strategy and <br /> Project <span>Plan</span>
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

