import styles from "./style";
import { Billing, Business, CardDeal, CursorEffect, Calendly, CTA, Footer, Navbar, Stats, Clients, Testimonials2, ContactSection, Testimonials, Hero, Plans, Help, SampleServices } from "./components";
import { stanford, websize, buildspace, Alovie } from "./assets";

const App = () => {
  const partners = [
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },{ name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace },
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    { name: 'buildspace', logo: buildspace }
  ];

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div id="home" className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} ${styles.marginbmd}`}>
          <Hero />
        </div>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          {/*<Stats />*/}
          <div id="process">
            <Business />
          </div>
          <Help />
          <div id="services" className={`${styles.marginbmd}`}>
            <SampleServices />
          </div>
          
          <div id="partners">
            <Clients partners={partners} />
          </div>
          
          <div id="testimonials">
            <Testimonials />
          </div>
          
          <CTA />
          
          <div id="get-started" className={`${styles.marginbmd}`}>
            <Calendly />
          </div>
          
          <div className={`${styles.marginbmd} md:${styles.marginblg}`}>
            <Plans />
          </div>
          
          <div id="contact" className={`${styles.marginbmd}`}>
            <ContactSection />
          </div>
          
          <Footer />
          {/*<CursorEffect/>*/}
        </div>
      </div>
    </div>
  );
}

export default App;