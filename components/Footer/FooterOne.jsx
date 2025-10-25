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
              aria-label="Scroll to top"
            >
              <i className="fas fa-arrow-up"></i>
            </button>
          </div>

          <div className="footer-top">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="footer-widget wow fadeInUp" data-wow-delay=".2s">
                  <Link href="/" className="f-logo" aria-label="Afro Gold Dollar Home">
                    <img
                      src={"/img/afrogolddollar-logo.png"}
                      alt="Afro Gold Dollar Logo"
                      height="100"
                      width="100"
                    />
                  </Link>
                  <div className="footer-content">
                    <p>
                      <strong>Afro Gold Dollar (AGD)</strong> is a gold-backed
                      digital currency on Polygon. Redeem 10g/20g/50g coins or
                      stake your gold to earn <strong>NdeipiCoin</strong>.
                      Proof-of-reserves and enterprise-grade rails via Nethereum.
                    </p>
                    {/* Optional socials
                    <ul className="footer-social">
                      <li><a href="https://t.me/afrogolddollar" aria-label="Telegram"><i className="fab fa-telegram"></i></a></li>
                      <li><a href="https://x.com/afrogolddollar" aria-label="X (Twitter)"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="https://youtube.com/@afrogolddollar" aria-label="YouTube"><i className="fab fa-youtube"></i></a></li>
                    </ul>
                    */}
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-5 col-sm-6">
                <div className="footer-widget wow fadeInUp" data-wow-delay=".4s">
                  {/* Reserved for useful links / product */}
                </div>
              </div>

              <div className="col-xl-2 col-lg-3 col-sm-6">
                <div className="footer-widget wow fadeInUp" data-wow-delay=".6s">
                  {/* Reserved for community / resources */}
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="footer-widget wow fadeInUp" data-wow-delay=".8s">
                  <h4 className="fw-title">Subscribe Newsletter</h4>
                  <div className="footer-newsletter">
                    <p>
                      Get updates on redemption, staking rewards, and new vault locations.
                    </p>
                    <form action="#" onSubmit={(e) => e.preventDefault()}>
                      <input
                        type="email"
                        placeholder="info@afrogolddollar.com"
                        required
                        aria-label="Email address"
                      />
                      <button type="submit" aria-label="Subscribe">
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
                  <p>Copyright &copy; 2025. All Rights Reserved • Afro Gold Dollar</p>
                </div>
              </div>
              <div className="col-lg-6 d-none d-sm-block">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <Link href="https://afrogolddollar.com/terms" target="_blank">
                        Terms &amp; Conditions
                      </Link>
                    </li>
                    <li>
                      <Link href="https://afrogolddollar.com/privacy" target="_blank">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="https://afrogolddollar.com/buy" target="_blank">
                        Buy AGD
                      </Link>
                    </li>
                    <li>
                      <Link href="https://afrogolddollar.com/stake" target="_blank">
                        Stake &amp; Earn NdeipiCoin
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

