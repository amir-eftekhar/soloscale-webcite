import React from 'react';
import styles from "../style";
import { Button1 } from "./Button";

const ServiceCard = ({ title, description }) => (
  <div className="flex flex-col p-6 rounded-[20px] feature-card">
    <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
      {title}
    </h4>
    <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
      {description}
    </p>
  </div>
);

const SampleServices = () => {
  const services = [
    {
      title: "Intelligent Lead Generation",
      description: "Our AI-powered lead generation system identifies and engages high-quality prospects, significantly increasing your conversion rates."
    },
    {
      title: "24/7 AI Customer Service",
      description: "Provide instant, accurate responses to customer inquiries around the clock with our advanced AI chatbot, improving customer satisfaction and retention."
    },
    {
      title: "Automatic Onboarding",
      description: "Have a hassle-free onboarding process that allows you to get clients on board in minutes effectively"
    }
  ];

  return (
    <section id="services" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          Discover Our AI-Powered <br className="sm:block hidden" /> Services
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Revolutionize your business with our cutting-edge AI solutions. From lead generation to customer service, we've got you covered.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      <div className="mt-10">
        <Button1 styles="mt-10" text="Get Started" />
      </div>
    </section>
  );
};

export default SampleServices;