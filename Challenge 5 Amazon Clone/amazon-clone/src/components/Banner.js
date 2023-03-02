import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Banner = () => {
  const images = [
    "/src/components/Images/banner-image-1.jpg",
    "/src/components/Images/banner-image-2.jpg",
    "/src/components/Images/banner-image-3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const startAutoplay = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    };

    const stopAutoplay = () => {
      clearInterval(intervalRef.current);
    };

    startAutoplay();
    return () => {
      stopAutoplay();
    };
  }, [images.length]);

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative">
      <Image
        className="w-full h-96 object-cover"
        src={images[currentIndex]}
        width={100}
        height={100}
        alt=""
      />
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2"
        onClick={prevImage}
      >
        <AiFillCaretLeft className="h-6 w-6 text-gray-500" />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2"
        onClick={nextImage}
      >
        <AiFillCaretRight className="h-6 w-6 text-gray-500" />
      </button>
    </div>
  );
};

export default Banner;
