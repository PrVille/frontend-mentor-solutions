import * as types from "../types"

import Image from "./Image"
import Title from "./Title"
import Tags from "./Tags"
import Languages from "./Languages"
import Level from "./Level"

type ChallengeProps = {
  challenge: types.Challenge
}

const Challenge = ({ challenge }: ChallengeProps) => {
  return (
    <div className="bg-white flex flex-col w-[350px] rounded-xl border border-gray-100 shadow-md overflow-hidden gap-6 pb-6 text-ellipsis">
      <Image href={challenge.demoHref} src={challenge.imgSrc} />

      <div className="px-6 flex flex-col">
        <Title href={challenge.demoHref} title={challenge.title} />

        <div className="mt-2">
          {!!challenge.tags && (
            <div className="mb-2">
              <Tags tags={challenge.tags} />
            </div>
          )}

          <div className="flex justify-between">
            <Languages languages={challenge.languages} />
            <Level level={challenge.level} />
          </div>
        </div>

        <p className="mt-4 text-neutral-500">
          {challenge.description}
        </p>
      </div>
    </div>
  )
}

export default Challenge
