type ImageProps = {
  href: string
  src: string
}

const Image = ({ href, src }: ImageProps) => {
  return (
    <div className="overflow-hidden">
      <a href={href} target="_blank" rel="noopener">
        <img
          src={src}
          className="object-cover hover:scale-110 transition-all"
        />
      </a>
    </div>
  )
}

export default Image
