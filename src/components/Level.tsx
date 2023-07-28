import { levelMap } from "../constants"
import * as types from "../types"
import { classNames } from "../utils"
type LevelProps = {
  level: types.Level
}

const Level = ({ level }: LevelProps) => {
  const { text, border, bg, number } = levelMap[level]
  return (
    <div
      className={classNames(
        "flex uppercase font-semibold items-center border rounded-md overflow-hidden text-sm",
        text,
        border
      )}
    >
      <h4 className={classNames("px-2 py-1 text-white", bg)}>{number}</h4>
      <h4 className="px-2 py-1 ">{level}</h4>
    </div>
  )
}

export default Level
