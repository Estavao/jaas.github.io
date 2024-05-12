import type { NextPage } from "next";

const Contact: NextPage = () => {
  return (
    <>
      <section className="contact section" id="contact">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Contact Me</h2>
            </div>
          </div>
          <div className="row">
            {/* contact-info-item */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-map-marker" />
              </div>
              <h4>Address</h4>
              <p>38 munster Cres Crown Gardens</p>
            </div>
            {/* contact-info-item Ended */}
            {/* contact-info-item */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-phone" />
              </div>
              <h4>Call me On</h4>
              <p>0621167891</p>
            </div>
            {/* contact-info-item Ended */}
            {/* contact-info-item */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-envelope" />
              </div>
              <h4>Email</h4>
              <p>sayensusteven68@email.com</p>
            </div>
            {/* contact-info-item Ended */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
