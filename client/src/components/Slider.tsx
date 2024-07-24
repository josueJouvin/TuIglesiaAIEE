import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { DummySingleData } from "../types";
import { useState } from "react";

type SliderProps = {
  images: DummySingleData["images"];
};

const Slider = ({ images }: SliderProps) => {
  const [image, setImage] = useState<number | null>(null);

  const changeSlide = (direction: string) => {
    if (image === null) return;

    if (direction === "left") {
      setImage((prevImage) => (prevImage === 0 || prevImage === null ? images.length - 1 : prevImage - 1));
    } else {
      setImage((prevImage) => (prevImage === images.length - 1 || prevImage === null ? 0 : prevImage + 1));
    }
  };

  return (
    <section className="w-full h-96 flex gap-5">
      {image !== null && images.length > 0 && (
      <div className="absolute w-screen h-screen top-0 left-0 bg-black/90 flex justify-between items-center z-50 overflow-hidden">
        {/* Left */}
        <button type="button" className="flex flex-1 items-center justify-center" onClick={() => (changeSlide("left"))}>
          <ChevronLeftIcon className="w-10 text-white" />
        </button>

        {/*Image*/}
        <div className="flex-10">
          <img className="size-full object-cover" src={images[image]} alt="" />
        </div>

        {/*Right*/}
        <button className="flex-1 flex items-center justify-center" onClick={() => changeSlide("right")}>
          <ChevronRightIcon className="w-10 text-white" />
        </button>

        {/*Close*/}
        <button className="absolute top-0 right-0 text-white  p-12 cursor-pointer" onClick={() => setImage(null)}>
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
          onClick={() => setImage(0)}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-5">
        {images.slice(1).map((image, index) => (
          <img
            className="w-full object-cover rounded-xl cursor-pointer h-[100px]"
            src={image}
            key={index}
            alt=""
            onClick={() => setImage(index + 1)}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;
