import styles from "../style";
import { discount, robot , robot_hand, SoloScale} from "../assets";
import GetStarted from "./GetStarted";
import TypingAnimation from "./Type";


const Hero = () => {
  const words = ['Innovative', 'Powerful', 'Efficient', 'Reliable'];
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[42px] text-white ss:leading-[100.8px] leading-[75px]">
          Revolutionize Your Business with <br className="sm:block hidden" />{" "}
            {/*<span className="text-gradient">Generation</span>{" "}*/}
            <TypingAnimation 
  words={words}  
  textSize="text-6xl md:text-7xl" 
/>

          </h1>
          {/*<div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
*/}
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[40px] text-white ss:leading-[100.8px] leading-[75px] w-full">
         AI Automation.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our Team leverage advanced AI technologies to streamline your business operations, enhance productivity, and drive growth.
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative justify-start`}>
      <div className="flex justify-center sm:justify-start items-center w-full sm:pr-[10%]">
  <img 
    src={SoloScale} 
    alt="billing" 
    className="w-[90%] sm:w-[100%] h-auto max-w-[500px] sm:max-w-none relative z-[5] rounded-[10%] border-2 border-yellow-300 shadow-lg transform transition-all duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 sm:mr-[10%]"
    style={{ boxShadow: '0 0 20px 10px yellow' }}
  />
</div>

  {/* gradient start */}
  <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
  <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
  <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
  {/* gradient end */}
</div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
      { /* <GetStarted /> */}
      </div>
    </section>
  );
};

export default Hero;
