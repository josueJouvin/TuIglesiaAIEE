import Card from "../components/Card"
import Filter from "../components/Filter"
import Map from "../components/Map"
import { dummyDataList } from "../data/DummyData"

const ChurchExplorerMap = () => {
  return (
    <>
      <section className="flex-3">
        <div className="h-full xl:pr-[50px] flex flex-col gap-16 md:gap-12 xl:overflow-y-scroll pb-12">
          <Filter/>
          {
            dummyDataList.map(item => (
              <Card key={item.id} item={item}/>
            ))
          }
        </div>
      </section>
      <section className="xl:flex xl:h-full bg-blue-200 xl:flex-2">
        <Map data={dummyDataList}/>
      </section>
    </>
  )
}

export default ChurchExplorerMap