
type TitleProps = {
    href: string
    title: string
  }
  
  const Title = ({ href, title }: TitleProps) => {
    return (
      <a className="hover:underline" href={href} target="_blank" rel="noopener">
        <h1 className="font-medium text-2xl">{title}</h1>
      </a>
    )
  }

  export default Title