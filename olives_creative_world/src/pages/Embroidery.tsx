import image6 from "../assets/embroidery/6.png";
import image7 from "../assets/embroidery/7.png";
import image8 from "../assets/embroidery/8.png";
import image83 from "../assets/embroidery/83.png";
import { CircleArrowLeft } from "lucide-react";
import Star2 from "../assets/star-2.svg";
import { NavLink } from "react-router";

const images = [
  { src: image6, alt: "" },
  { src: image7, alt: "" },
  { src: image8, alt: "" },
  { src: image83, alt: "" },
];

const DisplayImages = ({ src, alt }: { src: any; alt: string }) => {
  return (
    <>
      <img src={src} alt={alt} width={350} />
    </>
  );
};

const Embroidery = () => {
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
            <h1 className=" text-5xl md:text-6xl ">Embroidery</h1>
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

export default Embroidery;
