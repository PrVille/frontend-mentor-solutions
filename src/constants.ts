import { Challenge, Language, Level } from "./types"

import qrCodeComponentImg from "../thumbnails/qr-code-component.jpg"
import nftPreviewCardComponentImg from "../thumbnails/nft-preview-card-component.jpg"
import newsletterSignUpFormWithSuccessMessageImg from "../thumbnails/newsletter-sign-up-form-with-success-message.jpg"
import adviceGeneratorAppImg from "../thumbnails/advice-generator-app.jpg"
import calculatorAppImg from "../thumbnails/calculator-app.jpg"
import rockPaperScissorsGameImg from "../thumbnails/rock-paper-scissors-game.jpg"

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
    title: "Rock, Paper, Scissors game",
    languages: [Language.Html, Language.Css, Language.Js],
    level: Level.Advanced,
    description:
      "This challenge will test your HTML, CSS and JavaScript skills. There's even a Rock, Paper, Scissors, Lizard, Spock version if you really want to challenge yourself.",
    demoHref: "https://frontend-mentor-rock-paper-scissors-self.vercel.app/",
    imgSrc: rockPaperScissorsGameImg,
    tags: ["react", "tailwind-css", "typescript", "vite", "jest"],
  },
  {
    title: "Calculator app",
    languages: [Language.Html, Language.Css, Language.Js],
    level: Level.Intermediate,
    description:
      "This calculator app will be a great test of your CSS and JS skills especially. If you're wanting to practice using Grid, this challenge will be perfect for you!",
    demoHref: "https://frontend-mentor-calculator-app-rouge.vercel.app/",
    imgSrc: calculatorAppImg,
    tags: ["react", "tailwind-css", "typescript", "vite"],
  },
  {
    title: "Advice generator app",
    languages: [Language.Html, Language.Css, Language.Js, Language.Api],
    level: Level.Junior,
    description:
      "The perfect project if you're learning how to interact with 3rd-party APIs. This challenge uses the Advice Slip API to generate random quotes of advice.",
    demoHref: "https://frontendmentor-advice-generator-app-tau.vercel.app/",
    imgSrc: adviceGeneratorAppImg,
    tags: ["react", "tailwind-css", "typescript", "vite"],
  },
  {
    title: "Newsletter sign-up form with success message",
    languages: [Language.Html, Language.Css, Language.Js],
    level: Level.Junior,
    description:
      "This will test your skills with basic form structure, validation, and submission. The success state will also be an excellent opportunity to work with DOM manipulation.",
    demoHref:
      "https://newsletter-sign-up-with-success-message-self.vercel.app/",
    imgSrc: newsletterSignUpFormWithSuccessMessageImg,
    tags: ["react", "tailwind-css", "typescript", "vite"],
  },
  {
    title: "NFT preview card component",
    languages: [Language.Html, Language.Css],
    level: Level.Newbie,
    description:
      "This HTML & CSS only challenge is perfect for anyone just starting out or anyone wanting a small project to play around with.",
    demoHref:
      "https://frontendmentor-nft-preview-card-component-pi.vercel.app/",
    imgSrc: nftPreviewCardComponentImg,
  },
  {
    title: "QR code component",
    languages: [Language.Html, Language.Css],
    level: Level.Newbie,
    description:
      "A perfect first challenge if you're new to HTML and CSS. The card layout doesn't shift, so it's ideal if you haven't learned about building responsive layouts yet.",
    demoHref: "https://frontendmentor-prville-qr-code-component.vercel.app/",
    imgSrc: qrCodeComponentImg,
  },
]
