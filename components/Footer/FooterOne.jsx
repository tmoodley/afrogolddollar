import { scrollToTop } from "@/lib/helpers";
import Link from "next/link";
import React from "react";

const FooterOne = () => {
  return (
    <footer>
      <div className="footer-area">
        <div className="container">
          <div className="footer-scroll-wrap">
            <button
              className="scroll-to-target"
              data-target="html"
              onClick={scrollToTop}
            >
              <i className="fas fa-arrow-up"></i>
            </button>
          </div>
          <div className="footer-top">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="footer-widget wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <Link href="/" className="f-logo">
                    <img
                      src={"/img/ndeipicoin-logo-transparent.png"}
                      alt="NdeipiCoin Logo"
                      height={"100px"}
                      width={"100px"}
                    />
                  </Link>
                  <div className="footer-content">
                    <p>
                      NdeipiCoin is Ndeipi's native cryptocurrency. It is used
                      for network operations, transactions, games or
                      collectibles built on Ndeipi.
                    </p>
                    {/* <ul className="footer-social">
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-skype"></i>
                        </a>
                      </li>
                    </ul> */}
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-5 col-sm-6">
                <div
                  className="footer-widget  wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  {/* <h4 className="fw-title">Useful Links</h4>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link href="/">Contact us</Link>
                      </li>
                      <li>
                        <Link href="/">How it Works</Link>
                      </li>
                      <li>
                        <Link href="/">Create</Link>
                      </li>
                      <li>
                        <Link href="/">Explore</Link>
                      </li>
                      <li>
                        <Link href="/">Terms & Services</Link>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-sm-6">
                <div
                  className="footer-widget wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  {/* <h4 className="fw-title">Community</h4>
                  <div className="footer-link">
                     <ul>
                      <li>
                        <Link href="/">Help Center</Link>
                      </li>
                      <li>
                        <Link href="/">Partners</Link>
                      </li>
                      <li>
                        <Link href="/">Suggestions</Link>
                      </li>
                      <li>
                        <Link href="/">Blog</Link>
                      </li>
                      <li>
                        <Link href="/">Newsletters</Link>
                      </li>
                    </ul> 
                  </div>*/}
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div
                  className="footer-widget wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <h4 className="fw-title">Subscribe Newsletter</h4>
                  <div className="footer-newsletter">
                    <p>
                      Subscribe to our newsletter and receive the latest updates
                      immediately.
                    </p>
                    <form action="#">
                      <input
                        type="email"
                        placeholder="Info@ndeipicoin.com"
                        required
                      />
                      <button type="submit">
                        <i className="fas fa-paper-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="copyright-text">
                  <p>Copyright &copy; 2025. All Rights Reserved NdeipiCoin</p>
                </div>
              </div>
              <div className="col-lg-6 d-none d-sm-block">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <Link href="https://ndeipi.com/terms" _target="blank">
                        Terms and conditions
                      </Link>
                    </li>
                    <li>
                      <Link href="https://ndeipi.com/privacy" _target="blank">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://uzx.com/#/exchange/ndeipi_usdt"
                        _target="blank"
                      >
                        Buy Now
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
