import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("QchsXjzBy8dpoBeVK");
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.sendForm('service_tw6qj9b', 'template_rdn2cds', e.target)
      .then((result) => {
        console.log(result.text);
        setFormData({ name: '', email: '', message: '' });
        setStatus("Thanks for your submission!");
      }, (error) => {
        console.log(error.text);
        setStatus("Oops! There was a problem submitting your form");
      });
  };

  return (
  <section className="w-full py-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-6xl font-bold text-white mb-6 text-gradient">Contact Us</h2>
      <p className="text-dimWhite mb-8">Get in touch with us for any inquiries or feedback.</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-dimWhite mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Name..."
            className="w-full px-4 py-3 bg-black-gradient rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dimWhite mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email..."
            className="w-full px-4 py-3 bg-black-gradient rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-dimWhite mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            placeholder="Message..."
            className="w-full px-4 py-3 bg-black-gradient rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-gradient text-black font-bold rounded-md hover:opacity-90 transition duration-300"
        >
          Send Message
        </button>
        {status && <p className="mt-4 text-center text-dimWhite">{status}</p>}
      </form>
    </div>
  </section>
);

};

export default ContactSection;