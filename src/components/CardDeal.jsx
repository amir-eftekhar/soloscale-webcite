import { card, magnet, time } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Discover Superior AI Solutions  <br className="sm:block hidden" /> in Simple Steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Effortlessly integrate AI automation into your workflows. Our intuitive platform guides you through optimizing processes, improving efficiency, and achieving excellence.
      </p>

      <Button styles={`mt-10`} />
    </div>

<div className={layout.sectionImg}>
  <img 
    src={time} 
    alt="billing" 
    className="w-[100%] h-[100%] relative z-[5] rounded-[20%] border-2 border-gray-300 shadow-2xl transform transition-all duration-500 ease-in-out hover:rotate-6" 
    style={{ boxShadow: '0 0 20px 10px darkblue' }}
  />
</div>
</section>
);

export default CardDeal;
