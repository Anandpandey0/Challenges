import Image from "next/image";
import banner from "./Images/banner.jpeg";

const Banner = () => {
  return (
    <div className="relative h-[50vh] md:h-[89vh] w-full">
      <Image
        src={banner}
        alt="banner-image"
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="content absolute top-1/2  w-full text-center">
        <p className="text-black font-bold text-xl">
          Not sure where to go? Perfect
        </p>
        <button
          className="text-purple-500 font-bold px-8 py-2 md:px-10 md:py-4
         bg-white rounded-full mt-4 hover:shadow-xl"
        >
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
