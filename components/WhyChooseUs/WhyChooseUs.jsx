import React, { useEffect, useState } from "react";
import SlickSlider from "../SlickSlider/SlickSlider";
import WhyChooseUsItem from "./WhyChooseUsItem";

const WhyChooseUs = () => {
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true } },
      { breakpoint: 992,  settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 767,  settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false } },
      { breakpoint: 575,  settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false } },
    ],
  };

  // Updated feature cards for Afro Gold Dollar
  const slider_items = [
    {
      src: "/img/icon/choose_icon01.svg",
      alt: "Gold-backed",
      link: "/",
      title: "Gold-Backed, Redeemable",
      description:
        "Each token maps to audited grams of physical gold with 10g / 20g / 50g redemption options.",
    },
    {
      src: "/img/icon/choose_icon02.svg",
      alt: "Polygon",
      link: "/",
      title: "Built on Polygon + Nethereum",
      description:
        "Fast, low-fee settlement secured by Polygon; .NET/Nethereum stack for enterprise reliability.",
    },
    {
      src: "/img/icon/choose_icon03.svg",
      alt: "Staking",
      link: "/",
      title: <>Stake Gold, Earn NdeipiCoin</>,
      description:
        "Lock Afro Gold Dollars and earn on-chain rewards that power the Ndeipi ecosystem.",
    },
    {
      src: "/img/icon/choose_icon04.svg",
      alt: "Security",
      link: "/",
      title: "Security & Self-Custody",
      description:
        "Hardware-wallet support, role-based controls, and transparent proof-of-reserves.",
    },
    {
      src: "/img/icon/choose_icon01.svg",
      alt: "Multi-tenant",
      link: "/",
      title: "Multi-Tenant RWA Engine",
      description:
        "Launch branded marketplaces with isolated data, tokens, and compliance policies.",
    },
    {
      src: "/img/icon/choose_icon03.svg",
      alt: "Compliance",
      link: "/",
      title: "Compliance-Ready APIs",
      description:
        "KYC/AML hooks, web2 REST bridge, and audit trails for institutions and regulators.",
    },
    {
      src: "/img/icon/choose_icon04.svg",
      alt: "Fees",
      link: "/",
      title: "Low Fees, Instant Settlement",
      description:
        "Near-instant transfers with predictable costs—optimized for payments and treasury.",
    },
  ];

  const initialState = 0;
  const [count, setCount] = useState(initialState);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((old) => (old === slider_items.length - 1 ? 0 : old + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toMultiply = 100 / slider_items.length;

  return (
    <section className="choose-area pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-50">
              <span className="sub-title">Why Choose Us</span>
              <h2 className="title">
                Why choose the <span>Afro Gold Dollar</span>?
              </h2>
            </div>
          </div>
        </div>

        <div className="row choose-active">
          <SlickSlider settings={slickSettings}>
            {slider_items.map((item, index) => (
              <div key={index} className="col-lg-3">
                <WhyChooseUsItem item={item} />
              </div>
            ))}
          </SlickSlider>
        </div>

        <div className="slide-progressbar">
          <div
            style={{ backgroundSize: `${count * toMultiply}% 100%` }}
            className="slide-filler"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

