import { mobile, backend, creator, web, starbucks, tesla } from "../assets"

interface Section {
  id: string
  title: string
}

const sections: Array<string> = ["Apidocs", "Team", "Roadmap", "Pricing"]

const roadmap = [
  {
    date: "25 mars 2023",
    title: "Business Case",
    company_name: "Business",
    icon: starbucks,
    iconBg: "#383E56",
    points: [
      "Analyse de la concurance",
      "Mise en place du nusiness model",
      "Envois du dossier aux Jury du Hackathon Tezos",
    ],
  },
  {
    date: "31 mars 2023 - 2 avril 2023",
    title: "Proof of concept",
    company_name: "Hackathon Tezos",
    icon: tesla,
    iconBg: "#E6DEDD",
    points: [
      "Mise en place de l'api",
      "6 premières fonctions créé",
      "mise en place d'un indexeur et d'une base de donnée pour stocker tous les attributs nft d'une collection",
      "landing page",
      "présentation du poc aux Jury du Hackathon Tezos x Sia Partners",
    ],
  },
  {
    date: "15 avril 2023",
    title: "Mise en ligne de la nouvelle landing",
    company_name: "FrontEnd",
    icon: tesla,
    iconBg: "#E6DEDD",
    points: ["Nouveau design", "Présentation du projet"],
  },
  {
    date: "5 mai 2023",
    title: "Mise en ligne de l'api",
    company_name: "To the moon",
    icon: tesla,
    iconBg: "#E6DEDD",
    points: [
      "Mise en prod de l'api",
      "20 fonctions disponibles",
      "Mise en ligne de la documentation",
    ],
  },
  {
    date: "1 Juin 2023",
    title: "Sdk",
    company_name: "Easier to dev",
    icon: tesla,
    iconBg: "#E6DEDD",
    points: [
      "Mise en place d'un sdk Typescript + Javascript",
      "Fonctions utilitaire pour faire un call api en une ligne",
      "Composant React personalisable pour afficher la data",
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
    pricingTag: "INDUSTRY LEADING",
    title: "Free",
    pricingDescription: "The most powerful free tier in blockchain.",
    price: 0,
    textSize: "Up to 300,000,000 compute units/mo",
    textButton: "Get started",
    planTitle: "Plan includes",
    planText: [
      "Supernode, Build, Monitor, and Notify",
      "Enhanced APIs",
      "Multichain mainnets and testnets",
      "No daily request limits",
      "Full archive data",
      "5 apps",
      "24/7 Discord support",
    ],
    lastText: "No credit card required, start building for free.",
  },
  {
    pricingTag: "INDUSTRY LEADING",
    title: "Free",
    pricingDescription: "The most powerful free tier in blockchain.",
    price: 0,
    textSize: "Up to 300,000,000 compute units/mo",
    textButton: "Get started",
    planTitle: "Plan includes",
    planText: [
      "Supernode, Build, Monitor, and Notify",
      "Enhanced APIs",
      "Multichain mainnets and testnets",
      "No daily request limits",
      "Full archive data",
      "5 apps",
      "24/7 Discord support",
    ],
    lastText: "No credit card required, start building for free.",
  },
  {
    pricingTag: "INDUSTRY LEADING",
    title: "Free",
    pricingDescription: "The most powerful free tier in blockchain.",
    price: 0,
    textSize: "Up to 300,000,000 compute units/mo",
    textButton: "Get started",
    planTitle: "Plan includes",
    planText: [
      "Supernode, Build, Monitor, and Notify",
      "Enhanced APIs",
      "Multichain mainnets and testnets",
      "No daily request limits",
      "Full archive data",
      "5 apps",
      "24/7 Discord support",
    ],
    lastText: "No credit card required, start building for free.",
  },
]

export { sections, roadmap, team, pricing }
