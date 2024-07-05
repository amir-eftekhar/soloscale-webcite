import React from 'react';
import styles from "../style";
import { Button1 } from "./Button";

const PlanCard = ({ title, features, price }) => (
  <div className="border border-yellow-400 hover:border-yellow-600 mr-4 rounded-xl overflow-hidden relative bg-yellow-gradient shadow-lg flex flex-col items-center p-6 w-full hover:-translate-y-4 transform transition duration-300 hover:shadow-2xl mb-4 sm:mb-0" style={{ boxShadow: '0 0 20px 10px rgba(253, 216, 53, 0.5)' }}>
    <h3 className={`${styles.heading2} text-gray-800 mb-4 text-center`}>
      {title}
    </h3>
    <h4 className="text-gray-800 text-5xl font-bold mb-4">
      {price}
    </h4>
    <Button1 className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 w-1/2 h-full mb-4" text="Select"/>
    <ul className="list-none w-full">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center border-b border-yellow-200 py-2">
          <div className="bg-yellow-500 rounded-full p-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-gray-800 ml-2">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Plans = () => (
  <section className="flex flex-col sm:flex-row justify-between">
    <PlanCard title="Basic Plan" features={['Feature 1', 'Feature 2', 'Feature 3']} price="$10" />
    <PlanCard title="Premium Plan" features={['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']} price="$100" />
    <PlanCard title="Enterprise Plan" features={['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5']} price="Custom" />
  </section>
);

export default Plans;