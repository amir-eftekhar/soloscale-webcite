import React from 'react';
import styles from "../style";

const ProblemSolution = ({ problem, solution }) => (
  <div className="flex justify-between items-center mb-4 bg-discount-gradient p-4 rounded-md">
    <div className="flex-1">
      <span className="text-white">✕</span>
      <span className="text-dimWhite ml-2">{problem}</span>
    </div>
    <div className="flex-1 text-right">
      <span className="text-primary-yellow">✓</span>
      <span className="text-white ml-2">{solution}</span>
    </div>
  </div>
);

const Help = () => {
  const problems_solutions = [
    { problem: "Minimal lead generation from website tracking", solution: "Engage customers immediately upon visit" },
    { problem: "Customers fail to get questions answered immediately", solution: "Automated customer service agent to answer accurately" },
    { problem: "Companies lack data on their target market", solution: "Various mediums to engage and gather data" },
    { problem: "Scheduling client appointments quickly", solution: "Appointment-setting for clients" },
    { problem: "Email and text messaging curation for customers", solution: "AI-powered content curation and scheduling" },
    { problem: "Employee onboarding can be tedious and lack clarity", solution: "WhatsApp-integrated onboarding agent guides process" },
  ];

  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex flex-col w-full">
        <h2 className={styles.heading2}>How We Can Help</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-10`}>
          Transform your business operations with our customized solutions. Optimize lead generation and elevate customer engagement for sustainable growth.
        </p>
        {problems_solutions.map((item, index) => (
          <ProblemSolution key={index} problem={item.problem} solution={item.solution} />
        ))}
      </div>
    </section>
  );
};

export default Help;