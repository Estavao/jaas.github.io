import type { NextPage } from "next";

const Service: NextPage = () => {
  return (
    <>
        <section className="service section" id="services">
  <div className="container">
    <div className="row">
      <div className="section-title padd-15">
        <h2>My Services</h2>
      </div>
    </div>
    <div className="row">
    
      {/* Service Item 1 End */}
      {/* Service Item 2: Web Design */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-laptop" /></div>
          <h4>Custom Web Design</h4>
          <p>Create a stunning online presence with our custom web design services. i will tailor a website that
            not only
            looks impressive but also delivers a seamless user experience, helping you achieve your online goals.
          </p>
        </div>
      </div>
      
      {/* Service Item 3 End */}
      {/* Service Item 4: Web Development */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-code" /></div>
          <h4>Web Development</h4>
          <p>Turn your digital ideas into reality with my web development solutions. We specialize in crafting
            robust
            and dynamic websites that are tailored to meet your specific business needs and objectives.</p>
        </div>
      </div>
    
      {/* Service Item 5 End */}
      {/* Service Item 6: SEO Optimization */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-rocket" /></div>
          <h4>Data Analytics</h4>
          <p>my data analytics skills will help provide insights that guide strategic decisions, helping companies allocate resources effectively and identify growth opportunities.
          </p>
        </div>
      </div>
      {/* Service Item 6 End */}
    </div>
  </div>
</section>


    </>
  );
};

export default Service;
