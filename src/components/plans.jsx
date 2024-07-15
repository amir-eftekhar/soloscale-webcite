import React from 'react';
import styles from "../style";
import { Button1 } from "./Button";

const PlanCard = ({ title, content }) => (
  <div className="border border-yellow-400 hover:border-yellow-600 mr-4 rounded-xl overflow-hidden relative bg-yellow-gradient shadow-lg flex flex-col items-center p-6 w-full hover:-translate-y-4 transform transition duration-300 hover:shadow-2xl mb-4 sm:mb-0" style={{ boxShadow: '0 0 20px 10px rgba(253, 216, 53, 0.5)' }}>
    <h3 className={`${styles.heading3} text-gray-800 mb-4 text-center`}>
      {title}
    </h3>
    <p className="text-gray-400 text-lg mb-4 flex-grow">
      {content}
    </p>
    {/*<Button1 className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 w-1/2 h-full mt-4" text="Select"/>*/}
  </div>
);

const Plans = () => (
  <section className="flex flex-col sm:flex-row justify-between">
    <PlanCard 
      title="One time installation fee" 
      content="We'll handle everything to get our AI up and running in your business. It's a one-time fee that covers you for life. We'll make sure your systems are ready for whatever the future throws at them and running at their absolute best."
    />
    <PlanCard 
      title="Monthly Maintenance fee" 
      content="Don't worry about keeping your AI systems in top shape - we've got you covered. Our team will keep an eye on things, push out updates, and be there if you need a hand. We'll make sure everything's humming along smoothly so you can focus on what you do best."
    />
    <PlanCard 
      title="3rd Party Service Costs" 
      content="We know it takes more than just our AI to get the job done. That's why we've bundled in all the extras you'll need - subscriptions, licenses, you name it. We use tools from the best in the business to make sure you've got all the tools to succeed."
    />
  </section>
);

export default Plans;