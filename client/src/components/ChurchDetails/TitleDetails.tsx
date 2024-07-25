
type titleProps = {
  title: string
}
const TitleDetails = ({title} : titleProps) => {
  return (
    <p className="font-bold text-lg mb-3">{title}</p>
  )
}

export default TitleDetails