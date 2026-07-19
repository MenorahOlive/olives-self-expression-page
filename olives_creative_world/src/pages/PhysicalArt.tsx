import image9 from "../assets/physical-art/9.png";
import image10 from "../assets/physical-art/10.png";
import image11 from "../assets/physical-art/11.png";
import image12 from "../assets/physical-art/12.png";
import image13 from "../assets/physical-art/13.png";
import image16 from "../assets/physical-art/16.png";
import image19 from "../assets/physical-art/19.png";
import image20 from "../assets/physical-art/20.png";
import image21 from "../assets/physical-art/21.png";
import image25 from "../assets/physical-art/25.png";
import image29 from "../assets/physical-art/29.png";
import image30 from "../assets/physical-art/30.png";
import image32 from "../assets/physical-art/32.png";
import image33 from "../assets/physical-art/33.png";
import image35 from "../assets/physical-art/35.png";
import image36 from "../assets/physical-art/36.png";
import image55 from "../assets/physical-art/55.png";
import image56 from "../assets/physical-art/56.png";
import image58 from "../assets/physical-art/58.png";
import image59 from "../assets/physical-art/59.png";
import image63 from "../assets/physical-art/63.png";
import image72 from "../assets/physical-art/72.png";
import image74 from "../assets/physical-art/74.png";
import image75 from "../assets/physical-art/75.png";
import image76 from "../assets/physical-art/76.png";
import image78 from "../assets/physical-art/78.png";
import image80 from "../assets/physical-art/80.png";
import image92 from "../assets/physical-art/92.png";
import image93 from "../assets/physical-art/93.png";
import image94 from "../assets/physical-art/94.png";
import image95 from "../assets/physical-art/95.png";
import image107 from "../assets/physical-art/107.png";
import { CircleArrowLeft } from "lucide-react";
import Star2 from "../assets/star-2.svg";
import { NavLink } from "react-router";
import EndNote from "../components/EndNote";

const images = [
  { src: image9, alt: "" },
  { src: image107, alt: "" },
  { src: image29, alt: "" },
  { src: image92, alt: "" },
  { src: image76, alt: "" },
  { src: image93, alt: "" },
  { src: image20, alt: "" },
  { src: image75, alt: "" },
  { src: image56, alt: "" },
  { src: image95, alt: "" },
  { src: image10, alt: "" },
  { src: image25, alt: "" },
  { src: image11, alt: "" },
  { src: image58, alt: "" },
  { src: image55, alt: "" },
  { src: image94, alt: "" },
  { src: image12, alt: "" },
  { src: image13, alt: "" },
  { src: image16, alt: "" },
  { src: image80, alt: "" },
  { src: image19, alt: "" },
  { src: image21, alt: "" },
  { src: image30, alt: "" },
  { src: image32, alt: "" },
  { src: image33, alt: "" },
  { src: image35, alt: "" },
  { src: image36, alt: "" },
  { src: image59, alt: "" },
  { src: image63, alt: "" },
  { src: image72, alt: "" },
  { src: image74, alt: "" },
  { src: image78, alt: "" },
];

const DisplayImages = ({ src, alt }: { src: any; alt: string }) => {
  return (
    <>
      <img src={src} alt={alt} width={350} />
    </>
  );
};

const PhysicalArt = () => {
  return (
    <>
      <section className="bg-pastel-petal text-burgandy h-full md:h-screen w-full font-kawaii-bubble  overflow-y-scroll">
        <div className="text-2xl p-5 md:p-10">
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
