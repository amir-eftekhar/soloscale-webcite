import { apple, bill, google, magnet, Mac, Windows } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
  <img 
    src={magnet} 
    alt="billing" 
    className="w-[80%] h-[80%] relative z-[5] rounded-[20%] border-2 border-gray-300 shadow-lg transform transition-all duration-500 ease-in-out hover:-translate-y-5" 
    style={{ boxShadow: '0 0 10px 5px lightpink' }}
  />
  {/* gradient start */}
  <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
  <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
  {/* gradient end */}
</div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Seamlessly Manage Your  <br className="sm:block hidden" /> AI Automations
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Experience the ultimate control over your AI automation processes. Our platform ensures efficient, reliable, and scalable automation for all your needs
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="app store" className="w-[128.86px] h-[44.05px] object-contain mr-5 cursor-pointer border border-gray-500 rounded" />
<img src={google} alt="google_play" className="w-[144.17px] h-[45.08px] object-contain cursor-pointer border border-gray-500 rounded" />
        {/*<img src={Mac} alt="Mac" className=" ml-4 mt-3 mr-3 w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
        <img src={Windows} alt="Windows" className=" ml-2 mt-3 w-[144.17px] h-[43.08px] object-contain cursor-pointer" />*/}
      </div>
    </div>
  </section>
);

export default Billing;
