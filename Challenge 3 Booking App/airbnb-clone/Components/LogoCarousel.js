import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
  ArrowLeftIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import { useRef, useState } from "react";
import logo from "./Images/Airbnb-logo.jpg";
const logos = [
  {
    src: "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
    alt: "Logo 1",
    name: "Swimming Pools",
  },
  {
    src: "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
    alt: "Logo 2",
    name: "OMG",
  },
  {
    src: "https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg",
    alt: "Logo 3",
    name: "Historical Homes",
  },
  {
    src: "https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg",
    alt: "Logo 4",
    name: "National Parks",
  },

  {
    src: "https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg",
    alt: "Logo 5",
    name: "A Frames",
  },
  {
    src: "https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg",
    alt: "Logo 6",
    name: "Private Rooms",
  },
  {
    src: "https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg",
    alt: "Logo 7",
    name: "Farms",
  },
  {
    src: "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
    alt: "Logo 8",
    name: "Amazing views",
  },
  {
    src: "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
    alt: "Logo 9",
    name: "Amazing pools",
  },
  {
    src: "https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg",
    alt: "Logo 10",
    name: "Beaches",
  },
  {
    src: "https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg",
    alt: "Logo 11",
    name: "Luxe",
  },
  {
    src: "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg",
    alt: "Logo 12",
    name: "Cabins",
  },
  {
    src: "https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg",
    alt: "Logo 13",
    name: "Castles",
  },
  {
    src: "https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg",
    alt: "Logo 14",
    name: "Tree Houses",
  },
  {
    src: "https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg",
    alt: "Logo 15",
    name: "Lakefront",
  },

  {
    src: "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg",
    alt: "Logo 17",
    name: "BeachFront",
  },
  {
    src: "https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg",
    alt: "Logo 18",
    name: "Island",
  },
  {
    src: "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
    alt: "Logo 19",
    name: "Trending",
  },
  {
    src: "https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg",
    alt: "Logo 20",
    name: "tiny Homes",
  },
  {
    src: "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg",
    alt: "Logo 21",
    name: "Earth Homes",
  },
  {
    src: "https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg",
    alt: "Logo 22",
    name: "Mansions",
  },
  {
    src: "https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg",
    alt: "Logo 23",
    name: "Tropical",
  },
  {
    src: "https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg",
    alt: "Logo 24",
    name: "Design",
  },
  {
    src: "https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg",
    alt: "Logo 25",
    name: "Iconic cities",
  },
  {
    src: "https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg",
    alt: "Logo 26",
    name: "Lake",
  },
];

function LogoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const itemsPerView = 13;

  const handleNextClick = () => {
    setCurrentIndex((prevPage) => prevPage + 1);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevPage) => prevPage - 1);
  };
  const startIndex = (currentIndex - 1) * itemsPerView;
  const endIndex = startIndex + itemsPerView;
  const itemsToDisplay = logos.slice(startIndex, endIndex);

  return (
    <div className="flex relative  h-[15vh]">
      {startIndex === 13 && (
        <button
          onClick={handlePrevClick}
          className="absolute hidden xl:block lg:left-14 top-[40%]"
        >
          <ArrowCircleLeftIcon className="h-8" />
        </button>
      )}

      <div className="overflow-x-scroll w-full md:overflow-x-auto no-scrollbar relative lg:w-[90%] mx-auto flex  lg:mt-5  gap-4 lg:gap-10  mt-2 text-xs transition-transform duration-500 ">
        {itemsToDisplay.map((item) => (
          <div
            className=" h-full p-2 flex flex-col items-center w-14 item-center text-center cursor-pointer"
            key={item.alt}
          >
            <div className="h-[2rem] w-[4rem] relative ">
              <Image
                src={item.src}
                alt="logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="hover:border-b-4 my-2 border-solid border-gray-400 w-full ">
              {item.name}
            </div>
          </div>
        ))}
      </div>
      {logos.length > endIndex && (
        <button
          className="absolute hidden xl:block lg:right-32 top-[30%]  "
          onClick={handleNextClick}
        >
          <ArrowCircleRightIcon className="h-8 " />
        </button>
      )}
    </div>
  );
}
export default LogoCarousel;
