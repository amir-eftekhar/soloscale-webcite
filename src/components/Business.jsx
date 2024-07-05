import React from "react";
import styles from "../style";

const ProcessStep = ({ icon, title, content }) => (
  <div className="flex items-center mb-4">
    <div className="w-12 h-12 mr-4 flex-shrink-0 rounded-full bg-yellow-400 flex items-center justify-center">
      {icon}
    </div>
    <div>
      <h4 className="font-poppins font-semibold text-white text-[16px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[14px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section className="relative my-8">
    <div className="absolute inset-0 bg-gray-900 opacity-50 rounded-lg"></div>
    <div className="relative z-10 p-6 rounded-lg border-2 border-yellow-400 shadow-lg" style={{ boxShadow: '0 0 15px 5px rgba(255, 215, 0, 0.3)' }}>
      <h2 className={`${styles.heading2} mb-6 text-center`}>
        Our Process
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProcessStep
          icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-900">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>}
          title="Ideate"
          content="Work with our clients to brainstorm solutions"
        />
        <ProcessStep
          icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-900">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>}
          title="Develop"
          content="Create solution, receive feedback, make changes"
        />
        <ProcessStep
          icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-900">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>}
          title="Execute"
          content="Publish service and post-maintenance"
        />
      </div>
    </div>
  </section>
);

export default Business;