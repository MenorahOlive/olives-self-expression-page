import image15 from "../assets/teaching/15.webp";
import image61 from "../assets/teaching/61.webp";
import image62 from "../assets/teaching/62.webp";
import image65 from "../assets/teaching/65.webp";
import image66 from "../assets/teaching/66.webp";
import image67 from "../assets/teaching/67.webp";
import image68 from "../assets/teaching/68.webp";
import image71 from "../assets/teaching/71.webp";
import image79 from "../assets/teaching/79.webp";
import { CircleArrowLeft } from "lucide-react";
import Star2 from "../assets/star-2.svg";
import { NavLink } from "react-router";
import EndNote from "../components/EndNote";

const images = [
  { src: image65, alt: "Greetings Chart" },
  { src: image15, alt: "Children's Home Visit" },
  { src: image61, alt: "Drawing Tutorial" },
  { src: image62, alt: "Shading Tutorial" },
  { src: image66, alt: "Present Tense Chart" },
  { src: image67, alt: "Past Tense Chart" },
  { src: image68, alt: "Future Tense Chart" },
  { src: image71, alt: "Farewell Letters (6 Blue)" },
  { src: image79, alt: "Art Club Awards" },
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

const Teaching = () => {
  return (
    <>
      <section className="bg-pastel-petal text-burgandy h-full md:h-screen w-full font-kawaii-bubble  overflow-y-scroll">
        <div className="text-2xl p-5 md:p-10">
          {" "}
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
              <h1 className=" text-5xl md:text-6xl ">Teaching</h1>
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

export default Teaching;
