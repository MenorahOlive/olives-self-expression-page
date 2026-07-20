import image3 from "../assets/crotchet/3.webp";
import image4 from "../assets/crotchet/4.webp";
import image5 from "../assets/crotchet/5.webp";
import image22 from "../assets/crotchet/22.webp";
import image23 from "../assets/crotchet/23.webp";
import image26 from "../assets/crotchet/26.webp";
import image28 from "../assets/crotchet/28.webp";
import image31 from "../assets/crotchet/31.webp";
import image34 from "../assets/crotchet/34.webp";
import image54 from "../assets/crotchet/54.webp";
import image106 from "../assets/crotchet/106.webp";
import { CircleArrowLeft } from "lucide-react";
import Star2 from "../assets/star-2.svg";
import { NavLink } from "react-router";
import EndNote from "../components/EndNote";

const images = [
  { src: image3, alt: "Charger Cable " },
  { src: image4, alt: "Frog Hat" },
  { src: image5, alt: "Plant Display" },
  { src: image22, alt: "Coaster Bouquet" },
  { src: image23, alt: "Kitty the Pooh" },
  { src: image26, alt: "Flower Bouquet" },
  { src: image28, alt: "Birthday Love" },
  { src: image31, alt: "Jewellery Holder" },
  { src: image34, alt: "Cozy Beanie " },
  { src: image54, alt: "Granny Square Tote" },
  { src: image106, alt: "Ribbon Pencil Pouch" },
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

const Crotchet = () => {
  return (
    <section className="bg-pastel-petal text-burgandy h-full md:h-screen w-full font-kawaii-bubble   overflow-y-scroll">
      <div className="p-5 md:p-10 text-2xl">
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
            <h1 className="text-5xl md:text-6xl ">Crotchet</h1>
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
  );
};

export default Crotchet;
