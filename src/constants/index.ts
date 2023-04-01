import { mobile, backend, creator, web, starbucks, tesla } from "../assets"

interface Section {
  id: string
  title: string
}

const sections: Array<string> = ["Apidocs", "Team", "Roadmap", "Pricing"]

const roadmap = [
  {
    date: "March 23",
    title: "Business Case NFTez",
    // company_name: "Market analysis",
    icon: starbucks,
    iconBg: "#383E56",
    points: [
      "Market analysis",
      "Definition of the solution",
      "Mise en place du business model",
      "Definition of the business model",
    ],
  },
  {
    date: "April 23",
    title: "Hackathon Tezos x Sia Partners",
    // company_name: "Definition of our proof of concept",
    icon: tesla,
    iconBg: "#E6DEDD",
    points: [
      "Definition of our proof of concept",
      "Development of a v0 of our API via SDK",
      "Landing page and development of demo dApp",
      "Presentation of NFTez to the hackathon jury",
    ],
  },
  {
    date: "June 23",
    title: "Support for new NFT use cases",
    company_name: "FrontEnd",
    icon: tesla,
    iconBg: "#E6DEDD",
    points: [
      "More comprehensive management of new use cases",
      "New function to enable creation of analytic dashboards",
      "Hosting and optimization of metadata (image, video, etc.)",
    ],
  },
  {
    date: "September 23",
    title: "Support for use cases outside of NFTs",
    // company_name: "To the moon",
    icon: tesla,
    iconBg: "#E6DEDD",
    points: [
      "Other assets including DeFi assets",
      "Creation of new services for our clients by leveraging our infrastructure",
    ],
  },
]

const team = [
  {
    name: "Adrien",
    post: "Business",
    icon: creator,
  },
  {
    name: "Bastien",
    post: "Business",
    icon: creator,
  },
  {
    name: "Hicham",
    post: "Finance",
    icon: creator,
  },
  {
    name: "Mehdi",
    post: "Front End Developer",
    icon: web,
  },
  {
    name: "Sinane",
    post: "Back End Developer",
    icon: mobile,
  },
  {
    name: "Wassim",
    post: "Back End Developer",
    icon: mobile,
  },
  {
    name: "Julien",
    post: "Blockchain Developer",
    icon: backend,
  },
]

const pricing = [
  {
    title: "Free",
    pricingDescription: "The most powerful free tier in blockchain.",
    price: 0,
    textSize: "Up to 300,000,000 compute units/mo",
    textButton: "Get started",
    planText: [
      "Supernode, Build, Monitor, and Notify",
      "Enhanced APIs",
      "Multichain mainnets and testnets",
      "No daily request limits",
      "Full archive data",
      "5 apps",
      "24/7 Discord support",
    ],
  },
  {
    title: "Free",
    pricingDescription: "The most powerful free tier in blockchain.",
    price: 0,
    textSize: "Up to 300,000,000 compute units/mo",
    textButton: "Get started",
    planText: [
      "Supernode, Build, Monitor, and Notify",
      "Enhanced APIs",
      "Multichain mainnets and testnets",
      "No daily request limits",
      "Full archive data",
      "5 apps",
      "24/7 Discord support",
    ],
  },
  {
    title: "Free",
    pricingDescription: "The most powerful free tier in blockchain.",
    price: 0,
    textSize: "Up to 300,000,000 compute units/mo",
    textButton: "Get started",
    planText: [
      "Supernode, Build, Monitor, and Notify",
      "Enhanced APIs",
      "Multichain mainnets and testnets",
      "No daily request limits",
      "Full archive data",
      "5 apps",
      "24/7 Discord support",
    ],
  },
]

export { sections, roadmap, team, pricing }
