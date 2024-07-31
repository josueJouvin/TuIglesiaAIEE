import { dummyDataList } from "../data/DummyData"
import Card from "./Card"

const ChurchListings = () => {
  return (
    <div className="flex flex-col gap-12">
        {dummyDataList.map(item => (
            <Card key={item.id} item={item}/>
        ))}
    </div>
  )
}

export default ChurchListings