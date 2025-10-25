import React from "react";
import ContactOneForm from "./ContactOneForm";
import ContactOneInfoItem from "./ContactOneInfoItem";

const ContactOne = () => {
  const info_items = [
    {
      icon: "fa-envelope",
      content: <>info@afrogolddollar.com</>,
    },
    {
      icon: "fa-phone",
      content: (
        <>
          <a
            href="https://t.me/afrogolddollar"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://t.me/afrogolddollar
          </a>
        </>
      ),
    },
    {
      icon: "fa-map-marker-alt",
      content: (
        <>
          AFRO GOLD DOLLAR <br />
          Beta Building, Oficina 6, Próspera ZEDE, St. John's Bay, Roatán, Islas de Bahia 34101, Honduras
        </>
      ),
    },
  ];

  return (
    <section id="contact" className="contact-area pt-70 pb-110">
      <div className="container">
        {/* Section title */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-70">
              <span className="sub-title">Contact</span>
              <h2 className="title">
                <span>Contact</span> Afro Gold Dollar
              </h2>
              <p className="mt-3">
                Have questions about staking, redemption, or gold-backed
                tokenization? Reach out to our global team for partnership,
                investment, or media inquiries.
              </p>
            </div>
          </div>
        </div>

        {/* Section info */}
        <div className="contact-info-wrap">
          <div className="row justify-content-center">
            {info_items.map((x, index) => (
              <div key={index} className="col-lg-4 col-sm-6">
                <ContactOneInfoItem item={x} />
              </div>
            ))}
          </div>
        </div>

        {/* Contact form */}
        <ContactOneForm />
      </div>
    </section>
  );
};

export default ContactOne;

