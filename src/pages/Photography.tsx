import image84 from "../assets/photography/84.webp";
import image85 from "../assets/photography/85.webp";
import image86 from "../assets/photography/86.webp";
import image87 from "../assets/photography/87.webp";
import image88 from "../assets/photography/88.webp";
import image89 from "../assets/photography/89.webp";
import image90 from "../assets/photography/90.webp";
import image91 from "../assets/photography/91.webp";
import { CircleArrowLeft } from "lucide-react";
import Star2 from "../assets/star-2.svg";
import { NavLink } from "react-router";
import EndNote from "../components/EndNote";

const images = [
  { src: image84, alt: "Tundu Cat" },
  { src: image85, alt: "Sinatra" },
  { src: image86, alt: "Fadhumo" },
  { src: image87, alt: "Timmy" },
  { src: image88, alt: "Tundu Cat x Treat " },
  { src: image89, alt: "Tundu Once Again" },
  { src: image90, alt: "Tuluz" },
  { src: image91, alt: "KSPCA Visit" },
];

const DisplayImages = ({ src, alt }: { src: any; alt: string }) => {
  return (
    <>
      <div className="flex flex-col gap-2 ">
        <img src={src} alt={alt} width={350} loading="eager" />
        <p className="-translate-y-18 font-hangyaboly text-center h-auto w-auto ">
          {alt}
        </p>
      </div>
    </>
  );
};

const Photography = () => {
  return (
    <>
      <section className="bg-pastel-petal text-burgandy h-full md:h-screen w-full font-kawaii-bubble overflow-y-scroll">
        <div className="text-2xl p-5 md:p-10 ">
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
        </div>
        <EndNote />
      </section>
    </>
  );
};

export default Photography;
