import Card from "../components/Card"
import Filter from "../components/Filter"
import Map from "../components/Map"
import { dummyDataList } from "../data/DummyData"

const ChurchExplorerMap = () => {
  return (
    <div className="flex h-full">
      <section className="flex-3 h-full">
        <div className="h-full lg:pr-[50px] flex flex-col gap-16 md:gap-12 lg:overflow-y-scroll pb-12">
          <Filter/>
          {
            dummyDataList.map(item => (
              <Card key={item.id} item={item}/>
            ))
          }
        </div>
      </section>
      <section className="hidden lg:flex lg:h-full bg-blue-200 lg:flex-2">
        <Map data={dummyDataList}/>
      </section>
    </div>
  )
}

export default ChurchExplorerMap