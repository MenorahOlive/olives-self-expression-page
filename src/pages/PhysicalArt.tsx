import image9 from "../assets/physical-art/9.webp";
import image10 from "../assets/physical-art/10.webp";
import image11 from "../assets/physical-art/11.webp";
import image12 from "../assets/physical-art/12.webp";
import image13 from "../assets/physical-art/13.webp";
import image16 from "../assets/physical-art/16.webp";
import image19 from "../assets/physical-art/19.webp";
import image20 from "../assets/physical-art/20.webp";
import image21 from "../assets/physical-art/21.webp";
import image25 from "../assets/physical-art/25.webp";
import image29 from "../assets/physical-art/29.webp";
import image30 from "../assets/physical-art/30.webp";
import image32 from "../assets/physical-art/32.webp";
import image33 from "../assets/physical-art/33.webp";
import image35 from "../assets/physical-art/35.webp";
import image36 from "../assets/physical-art/36.webp";
import image55 from "../assets/physical-art/55.webp";
import image56 from "../assets/physical-art/56.webp";
import image58 from "../assets/physical-art/58.webp";
import image59 from "../assets/physical-art/59.webp";
import image63 from "../assets/physical-art/63.webp";
import image72 from "../assets/physical-art/72.webp";
import image74 from "../assets/physical-art/74.webp";
import image75 from "../assets/physical-art/75.webp";
import image76 from "../assets/physical-art/76.webp";
import image78 from "../assets/physical-art/78.webp";
import image80 from "../assets/physical-art/80.webp";
import image92 from "../assets/physical-art/92.webp";
import image93 from "../assets/physical-art/93.webp";
import image94 from "../assets/physical-art/94.webp";
import image95 from "../assets/physical-art/95.webp";
import image107 from "../assets/physical-art/107.webp";
import { CircleArrowLeft } from "lucide-react";
import Star2 from "../assets/star-2.svg";
import { NavLink } from "react-router";
import EndNote from "../components/EndNote";

const images = [
  { src: image9, alt: "Wedding Backdrop" },
  { src: image107, alt: "Starry Night" },
  { src: image29, alt: "Butterfly Oil Pastels" },
  { src: image92, alt: "Turtle Bottle Painting" },
  { src: image76, alt: "Butterflies Water Colour" },
  { src: image93, alt: "Kitty Love" },
  { src: image20, alt: "Butterfly Sticker" },
  { src: image75, alt: "Starry Night pt2" },
  { src: image56, alt: "Portraiture Detailed Study" },
  { src: image95, alt: "Sharp Winged Liner" },
  { src: image10, alt: "Oil Pastels Freestyle" },
  { src: image25, alt: "Minus Training Wheels" },
  { src: image11, alt: "Oil Pastels Freestyle" },
  { src: image58, alt: "Man's Best friend" },
  { src: image55, alt: "Snapchat Filters" },
  { src: image94, alt: "Marylin Monroe" },
  { src: image12, alt: "Oil Pastels Freestyle" },
  { src: image13, alt: "Colouring Exploration" },
  { src: image16, alt: "Minimalist Art" },
  { src: image80, alt: "TV Girl" },
  { src: image19, alt: "Fox" },
  { src: image21, alt: "Starry Night Pt3" },
  { src: image30, alt: "Kindle Decor" },
  { src: image32, alt: "Colouring Exploration" },
  { src: image33, alt: "Colouring Exploration" },
  { src: image35, alt: "Pottery" },
  { src: image36, alt: "Oil Pastels" },
  { src: image59, alt: "Coloured Pencils Portraiture" },
  { src: image63, alt: "Grid Lines Portraiture" },
  { src: image72, alt: "Lana Del Rey" },
  { src: image74, alt: "Fox" },
  { src: image78, alt: "Women from the Market" },
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

const PhysicalArt = () => {
  return (
    <>
      <section className="bg-pastel-petal text-burgandy h-full md:h-screen w-full font-kawaii-bubble  overflow-y-scroll">
        <div className="text-2xl p-5 md:p-10 min-h-screen">
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
              <h1 className=" text-5xl md:text-6xl ">PhysicalArt</h1>
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

export default PhysicalArt;
