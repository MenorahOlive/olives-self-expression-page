import image2 from "../assets/digital-art/2.webp";
import image37 from "../assets/digital-art/37.webp";
import image38 from "../assets/digital-art/38.webp";
import image39 from "../assets/digital-art/39.webp";
import image40 from "../assets/digital-art/40.webp";
import image41 from "../assets/digital-art/41.webp";
import image42 from "../assets/digital-art/42.webp";
import image43 from "../assets/digital-art/43.webp";
import image44 from "../assets/digital-art/44.webp";
import image45 from "../assets/digital-art/45.webp";
import image46 from "../assets/digital-art/46.webp";
import image47 from "../assets/digital-art/47.webp";
import image48 from "../assets/digital-art/48.webp";
import image49 from "../assets/digital-art/49.webp";
import image50 from "../assets/digital-art/50.webp";
import image51 from "../assets/digital-art/51.webp";
import image52 from "../assets/digital-art/52.webp";
import image53 from "../assets/digital-art/53.webp";
import image98 from "../assets/digital-art/98.webp";
import image99 from "../assets/digital-art/99.webp";
import image100 from "../assets/digital-art/100.webp";
import { CircleArrowLeft } from "lucide-react";
import Star2 from "../assets/star-2.svg";
import { NavLink } from "react-router";
import EndNote from "../components/EndNote";

const images = [
  { src: image2, alt: "My #1" },
  { src: image98, alt: "Study in Hair" },
  { src: image38, alt: "Khalid" },
  { src: image39, alt: "Study in Fabric" },
  { src: image43, alt: "Self Portrait 2022" },
  { src: image44, alt: "Mary Keni" },
  { src: image53, alt: "Lynn Muchiri" },
  { src: image45, alt: "Portraiture Practice" },
  { src: image99, alt: "Portraiture Practice" },
  { src: image40, alt: "Halo" },
  { src: image46, alt: "Study in Hair" },
  { src: image47, alt: "Space Man" },
  { src: image48, alt: "Early Days" },
  { src: image49, alt: "Sketching" },
  { src: image50, alt: "First Piece" },
  { src: image51, alt: "Early Days" },
  { src: image52, alt: "Study in Hair" },
  { src: image42, alt: "Head in the Clouds" },
  { src: image37, alt: "Early Days" },
  { src: image41, alt: "The Bride" },
  { src: image100, alt: "Galaxy" },
];

const DisplayImages = ({ src, alt }: { src: any; alt: string }) => {
  return (
    <>
      <div className="flex flex-col gap-2 ">
        <img src={src} alt={alt} width={350} />
        <p className="-translate-y-18 font-hangyaboly text-center h-auto w-auto ">
          {alt}
        </p>
      </div>
    </>
  );
};

const DigitalArt = () => {
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
              <h1 className=" text-5xl md:text-6xl">DigitalArt</h1>
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

export default DigitalArt;
