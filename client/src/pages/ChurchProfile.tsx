import { MapPinIcon } from "@heroicons/react/24/outline"
import Slider from "../components/Slider"
import {singlePostData, userData} from "../data/DummyData"

const ChurchProfile = () => {
  return (
    <div className="flex h-full">
      <section className="flex-3 h-full overflow-y-scroll">
        <div className="pr-[50px]">
          <div className="lg:pr-5">
            <Slider images={singlePostData.images}/>
            <section className="mt-12">
              <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between lg:items-center">
                <div className="flex flex-col gap-5">
                  <h1 className="font-medium text-3xl">{singlePostData.title}</h1>
                  <div className="flex gap-1 items-center text-[#888] text-sm">
                    <MapPinIcon className="size-4"/>
                    <span>{singlePostData.address}</span>
                  </div>
                  <span className="text-xl font-light p-1 rounded bg-blue-100 w-max">Culto Principal: 18:00</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-5 py-5 px-12 lg:py-1 rounded-lg bg-blue-100/50">
                  <h3 className="text-lg font-semibold">Pastor:</h3>
                  <img className="size-12 rounded-[50%] object-cover" src={userData.img} alt="" />
                  <span>{userData.name}</span>
                </div>
              </div>
              <p className="mt-12 text-[#555] leading-5">{singlePostData.description}</p>
            </section>
          </div>
        </div>
      </section>
      <section className="flex-2 bg-blue-200 h-full">
        <div className="py-0 px-5 flex flex-col gap-5"></div>
      </section>

    </div>
  )
}

export default ChurchProfile