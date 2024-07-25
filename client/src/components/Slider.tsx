import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { DummySingleData } from "../types";
import { useSlider } from "../hooks/useSlider";

type SliderProps = {
  images: DummySingleData["images"];
};

const Slider = ({ images }: SliderProps) => {
  const {image,changeSlide,closeSlider,openSlider} = useSlider(images.length)

  return (
    <section className="w-full lg:h-96 flex flex-col lg:flex-row gap-5">
      {image !== null && images.length > 0 &&  (
      <div className="fixed w-screen h-screen top-0 left-0 bg-black/90 flex justify-between items-center z-[99999] overflow-hidden">
        {/* Left */}
        <button type="button" className="flex flex-1 items-center justify-center" onClick={() => (changeSlide("left"))}>
          <ChevronLeftIcon className="w-10 text-white" />
        </button>

        {/*Image*/}
        <div className="flex-10 ">
          <img className="size-full object-cover" src={images[image]} alt="" />
        </div>

        {/*Right*/}
        <button className="flex-1 flex items-center justify-center" onClick={() => changeSlide("right")}>
          <ChevronRightIcon className="w-10 text-white" />
        </button>

        {/*Close*/}
        <button className="absolute top-0 right-0 text-white  p-12 cursor-pointer" onClick={() => closeSlider()}>
          <XMarkIcon className="size-12"/>
        </button>
      </div>
      )}

      {/**Grid de Imagenes */}
      <div className="flex-3">
        <img
          className="w-full h-full object-cover rounded-xl cursor-pointer"
          src={images[0]}
          alt=""
          onClick={() => openSlider(0)}
        />
      </div>
      <div className="flex flex-1 flex-wrap sm:flex-nowrap lg:flex-col justify-between gap-5 ">
        {images.slice(1).map((image, index) => (
          <img
            className="w-full object-cover rounded-xl cursor-pointer h-[100px]"
            src={image}
            key={index}
            alt=""
            onClick={() => openSlider(index + 1)}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;
