export enum Language {
  Html = "HTML",
  Css = "CSS",
  Js = "JS",
  Api = "API",
}

export enum Level {
  Newbie = "NEWBIE",
  Junior = "JUNIOR",
  Intermediate = "INTERMEDIATE",
  Advanced = "ADVANCED",
  Guru = "Guru"
}

export interface Challenge {
  title: string
  languages: Language[]
  level: Level
  description: string
  demoHref: string
  imgSrc: string
  tags?: string[]
}
