import { DummyData } from "../types"

type itemData = {
    item : DummyData
}

const Card = ({item} : itemData) => {
  return (
    <div>{item.title}</div>
  )
}

export default Card