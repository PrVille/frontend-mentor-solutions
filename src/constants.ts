import { Challenge, Language, Level } from "./types"

export const languageColorMap = {
  [Language.Html]: "text-html",
  [Language.Css]: "text-css",
  [Language.Js]: "text-js",
  [Language.Api]: "text-api",
}

export const levelMap = {
  [Level.Newbie]: {
    text: "text-newbie",
    border: "border-newbie",
    bg: "bg-newbie",
    number: 1,
  },
  [Level.Junior]: {
    text: "text-junior",
    border: "border-junior",
    bg: "bg-junior",
    number: 2,
  },
  [Level.Intermediate]: {
    text: "text-intermediate",
    border: "border-intermediate",
    bg: "bg-intermediate",
    number: 3,
  },
  [Level.Advanced]: {
    text: "text-advanced",
    border: "border-advanced",
    bg: "bg-advanced",
    number: 4,
  },
  [Level.Guru]: {
    text: "text-guru",
    border: "border-guru",
    bg: "bg-guru",
    number: 5,
  },
}

export const challenges: Challenge[] = [
  {
    title: "NFT preview card component",
    languages: [Language.Html, Language.Css],
    level: Level.Newbie,
    description:
      "This HTML & CSS only challenge is perfect for anyone just starting out or anyone wanting a small project to play around with.",
    demoHref:
      "https://frontendmentor-nft-preview-card-component-pi.vercel.app/",
    imgSrc: "./src/images/nft-preview-card-component.jpg",
  },
  {
    title: "QR code component",
    languages: [Language.Html, Language.Css],
    level: Level.Newbie,
    description:
      "A perfect first challenge if you're new to HTML and CSS. The card layout doesn't shift, so it's ideal if you haven't learned about building responsive layouts yet.",
    demoHref: "https://frontendmentor-prville-qr-code-component.vercel.app/",
    imgSrc: "./src/images/qr-code-component.jpg",
  },
]
