import { mobile, backend, creator, web } from "../assets"

interface Section {
  id: string
  title: string
}

const sections: Array<string> = ["Solution", "Team", "Roadmap", "Pricing"]

const roadmap = [
  {
    date: "March 23",
    title: "Business Case NFTez",
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
    points: [
      "More comprehensive management of new use cases",
      "New function to enable creation of analytic dashboards",
      "Hosting and optimization of metadata (image, video, etc.)",
    ],
  },
  {
    date: "September 23",
    title: "Support for use cases outside of NFTs",
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
    post: "Product",
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
    title: "Free*",
    pricingDescription: "The most powerful free tier in blockchain.",
    price: 0,
    textSize: "Up to 10,000 requests per month*",
    textButton: "Get started",
    planText: [
      "Limited access to API and SDK",
      "In mainnets and testnets",
      "No daily request limits",
      "Open source code",
    ],
  },
  {
    title: "Growth",
    pricingDescription: "To empower scaling project",
    price: 99,
    textSize: "Up to 100,000 requests per month",
    textButton: "Get started",
    planText: [
      "Everything free and plus",
      "Access to all API and SDK features",
      "2x higher throughput",
      "24/7 Discord support",
    ],
  },
  {
    title: "Enterprise",
    pricingDescription: `Volume pricing & enterprise support `,
    textSize: "Custom plan",
    textButton: "Get started",
    planText: [
      "Everything Growth and plus",
      "Customized features and integrations to suit your requirements",
      "Onboarding and mission support",
    ],
  },
]

export { sections, roadmap, team, pricing }
