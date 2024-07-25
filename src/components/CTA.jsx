import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={`${styles.heading2} text-center`}>
        Work with us today!
      </h2>
      <p className={`${styles.paragraph} max-w-[2000px] mt-5`}>
        Unlock your business’s potential by automating what’s unnecessary. Save your time and money by booking a free 15-minute discovery call below to see how you can add AI to your business!
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      {/* <Button />*/}
    </div>
  </section>
);

export default CTA;
