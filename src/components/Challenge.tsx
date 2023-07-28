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
    <div className="bg-white flex flex-col w-[350px] h-[550px] rounded-xl border border-gray-100 shadow-md overflow-hidden gap-6 pb-6 text-ellipsis">
      <Image href={challenge.demoHref} src={challenge.imgSrc} />

      <div className="px-6 flex flex-col gap-4">
        <Title href={challenge.demoHref} title={challenge.title} />

        <div>
          {!!challenge.tags && <Tags tags={challenge.tags} />}
          <div className="flex justify-between">
            <Languages languages={challenge.languages} />
            <Level level={challenge.level} />
          </div>
        </div>

        <p className="text-neutral-500">
          This HTML & CSS only challenge is perfect for anyone just starting out
          or anyone wanting a small project to play around with.
        </p>
      </div>
    </div>
  )
}

export default Challenge
