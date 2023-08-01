type TagsProps = {
  tags: string[]
}

const Tags = ({ tags }: TagsProps) => {
  return (
    <div className="flex py-2 gap-x-3 flex-wrap mb-2">
      {tags.map((tag, index) => (
        <div key={index}>
          <p className="text-tag">{"#" + tag}</p>
        </div>
      ))}
    </div>
  )
}

export default Tags
