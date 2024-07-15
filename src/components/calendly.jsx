import React, { useEffect } from "react";

const Calendly = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section>
      <div>
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/soloscalesolutions/30min?hide_gdpr_banner=1"
          style={{ minWidth: '320px', height: '700px' }}
        />
      </div>
    </section>
  );
};

export default Calendly;
