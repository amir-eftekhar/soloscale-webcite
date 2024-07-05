import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Start Your AI Automation Journey Today!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Unlock the full potential of AI automation to revolutionize your business operations and achieve unprecedented growth.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
     {/* <Button />*/}
    </div>
  </section>
);

export default CTA;
