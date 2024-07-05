import styles from "./style";
import { Billing, Business, CardDeal, CursorEffect, CTA, Footer, Navbar, Stats, Clients, ContactSection, Testimonials, Hero, Plans, Help, SampleServices} from "./components";
import { stanford, websize, buildspace, Alovie } from "./assets";
const App = () => {
  const partners = [
    { name: 'stanford', logo: stanford },
    { name: 'websize', logo: websize },
    { name: 'Alovie', logo: Alovie },
    {name: 'buildspace', logo: buildspace}
  ];
  return (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Help />
        <SampleServices/>
        <Clients partners={partners} />        
        <Testimonials />
        
        <CTA />
        <Plans />
        <ContactSection/>
        <Footer />
        {/*<CursorEffect/>*/}
      </div>
    </div>
  </div>
);
}
export default App;
