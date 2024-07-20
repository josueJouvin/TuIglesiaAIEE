import Card from "../components/Card"
import Filter from "../components/Filter"
import { dummyDataList } from "../data/DummyData"

const ChurchExplorerMap = () => {
  return (
    <div className="flex h-full">
      <section className="flex-3 h-full">
        <div className="h-full pr-[50px] flex flex-col gap-12 overflow-y-scroll pb-12">
          <Filter/>
          {
            dummyDataList.map(item => (
              <Card key={item.id} item={item}/>
            ))
          }
        </div>
      </section>
      <section className="hidden h-full bg-blue-200 lg:flex-2"></section>
    </div>
  )
}

export default ChurchExplorerMap