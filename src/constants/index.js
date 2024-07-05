import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "clients",
    title: "Clients",
  },
  {
    id: "contact",
    title: "Contact Us", // new link
  },
  {
    id: "plans",
    title: "Plans", // new link
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Smart Automation",
    content:
      "Experience unparalleled efficiency with our advanced AI-driven automation solutions.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Fully Secured",
    content:
      "We implement top-tier security measures to ensure your data and processes remain safe.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Seamless Integrationr",
    content:
      "Our AI automation integrates effortlessly with your existing systems, enhancing productivity.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "AI automation is a powerful tool that can transform your business, making it more efficient and effective.",
    name: "client one",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Integrating AI automation has significantly streamlined our operations and boosted our productivity.",
    name: "Client two",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "AI automation is revolutionizing the industry, driving efficiency and innovation.",
    name: "Client three",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Active Users",
    value: "5000+",
  },
  {
    id: "stats-2",
    title: "Trusted by Businesses",
    value: "300+",
  },
  {
    id: "stats-3",
    title: "Automation Processes",
    value: "1M+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Services",
        link: "/",
      },
      {
        name: "Capabilities",
        link: "/",
      },
      {
        name: "Case Studies",
        link: "/",
      },
      {
        name: "Explore",
        link: "/",
      },
      {
        name: "Terms & Services",
        link: "/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "/",
      },
      {
        name: "Partners",
        link: "/",
      },
      {
        name: "Suggestions",
        link: "/",
      },
      {
        name: "Blog",
        link: "/",
      },
      {
        name: "Newsletters",
        link: "/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "/",
      },
      {
        name: "Become a Partner",
        link: "/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];