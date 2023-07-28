import * as types from "../types"
import { classNames } from "../utils"
import { languageColorMap } from "../constants"

type LanguageProps = {
  language: types.Language
}
const Language = ({ language }: LanguageProps) => {
  return (
    <li
      className={classNames(
        "uppercase font-bold text-left",
        languageColorMap[language]
      )}
    >
      {language}
    </li>
  )
}

type LanguagesProps = {
  languages: types.Language[]
}

const Languages = ({ languages }: LanguagesProps) => {
  return (
    <ul className="flex items-center gap-2">
      {languages.map((language, index) => (
        <Language key={index} language={language} />
      ))}
    </ul>
  )
}

export default Languages
