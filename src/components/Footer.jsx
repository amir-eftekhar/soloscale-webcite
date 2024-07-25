import React from 'react';
import styles from "../style";
import { soloscalel } from "../assets";
import { socialMedia } from "../constants";

const navLinks = [
  { id: "home", title: "Home" },
  { id: "process", title: "Our Process" },
  { id: "services", title: "Services" },
  { id: "partners", title: "Partners" },
  { id: "testimonials", title: "Testimonials" },
  { id: "get-started", title: "Get Started" },
  { id: "contact", title: "Contact Us" },
];

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={soloscalel}
          alt="SoloScale"
          className="w-[150px] h-[150px] object-contain rounded-full"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          Innovative AI automation solutions for reliable, efficient, and scalable business processes.
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        <div className="flex flex-col ss:my-0 my-4 min-w-[150px] mr-8">
          <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white mb-4">
            Useful Links
          </h4>
          <div className="flex flex-row">
            <ul className="list-none mr-4">
              {navLinks.slice(0, Math.ceil(navLinks.length / 2)).map((link) => (
                <li
                  key={link.id}
                  className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-yellow-400 cursor-pointer mb-4"
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
            <ul className="list-none">
              {navLinks.slice(Math.ceil(navLinks.length / 2)).map((link) => (
                <li
                  key={link.id}
                  className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-yellow-400 cursor-pointer mb-4"
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
          <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white mb-4">
            Community
          </h4>
          <ul className="list-none">
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-yellow-400 cursor-pointer mb-4">
              Help Center
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-yellow-400 cursor-pointer mb-4">
              Partners
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-yellow-400 cursor-pointer mb-4">
              Suggestions
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-yellow-400 cursor-pointer mb-4">
              Blog
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-yellow-400 cursor-pointer">
              Newsletters
            </li>
          </ul>
        </div>
        <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
          <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white mb-4">
            Contact Info
          </h4>
          <ul className="list-none">
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-yellow-400 cursor-pointer mb-4">
              Email: soloscalesolutions@gmail.com
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-yellow-400 cursor-pointer">
              Phone: +1 925-819-4040
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2024 SoloScale Solutions. All Rights Reserved.
      </p>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;