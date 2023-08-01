type TagsProps = {
  tags: string[]
}

const Tags = ({ tags }: TagsProps) => {
  return (
    <div className="flex gap-x-3 flex-wrap">
      {tags.map((tag, index) => (
        <div key={index}>
          <p className="text-tag">{"#" + tag}</p>
        </div>
      ))}
    </div>
  )
}

export default Tags
