import image84 from "../assets/photography/84.png";
import image85 from "../assets/photography/85.png";
import image86 from "../assets/photography/86.png";
import image87 from "../assets/photography/87.png";
import image88 from "../assets/photography/88.png";
import image89 from "../assets/photography/89.png";
import image90 from "../assets/photography/90.png";
import image91 from "../assets/photography/91.png";
import { CircleArrowLeft } from "lucide-react";
import Star2 from "../assets/star-2.svg";
import { NavLink } from "react-router";

const images = [
  { src: image84, alt: "" },
  { src: image85, alt: "" },
  { src: image86, alt: "" },
  { src: image87, alt: "" },
  { src: image88, alt: "" },
  { src: image89, alt: "" },
  { src: image90, alt: "" },
  { src: image91, alt: "" },
];

const DisplayImages = ({ src, alt }: { src: any; alt: string }) => {
  return (
    <>
      <img src={src} alt={alt} width={350} />
    </>
  );
};

const Photography = () => {
  return (
    <>
      <section className="bg-pastel-petal text-burgandy h-full md:h-screen w-full font-kawaii-bubble text-2xl p-5 md:p-10 overflow-y-scroll">
        <div className="flex  flex-col md:flex-row justify-between">
          {" "}
          <NavLink to="/">
            <CircleArrowLeft className="size-10 hover:scale-105 transition duration-200 cursor-pointer ease-in-out mb-5" />
          </NavLink>
          <div className="flex flex-row justify-center items-center mb-5">
            <img
              src={Star2}
              width={100}
              alt=""
              className="animate-wiggle rotate-90 w-16 md:w-20"
            />
            <h1 className=" text-5xl md:text-6xl">Photography</h1>
            <img
              src={Star2}
              width={100}
              alt=""
              className="animate-wiggle w-16 md:w-20"
            />
          </div>
          <div className="w-5"></div>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center ">
          {images.map((img, index) => (
            <DisplayImages key={index} src={img.src} alt={img.alt} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Photography;
