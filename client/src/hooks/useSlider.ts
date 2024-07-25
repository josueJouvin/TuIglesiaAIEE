import { useState } from "react";

type Direction = "left" | "right";

export const useSlider = (imagesLength: number) => {
  const [image, setImage] = useState<number | null>(null);

  const changeSlide = (direction: Direction) => {
    if (image === null) return;

    setImage((prevImage) => {
      if (prevImage === null) return 0;

      if (direction === "left") {
        return prevImage === 0 ? imagesLength - 1 : prevImage - 1;
      } else {
        return prevImage === imagesLength - 1 ? 0 : prevImage + 1;
      }
    });
  };

  const openSlider = (index: number) => {
    setImage(index);
  };

  const closeSlider = () => {
    setImage(null);
  };

  return {
    image,
    changeSlide,
    openSlider,
    closeSlider,
  };
};
