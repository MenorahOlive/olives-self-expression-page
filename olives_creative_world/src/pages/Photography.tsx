import image84 from "../assets/photography/84.png";
import image85 from "../assets/photography/85.png";
import image86 from "../assets/photography/86.png";
import image87 from "../assets/photography/87.png";
import image88 from "../assets/photography/88.png";
import image89 from "../assets/photography/89.png";
import image90 from "../assets/photography/90.png";
import image91 from "../assets/photography/91.png";

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
        <h1 className=" text-6xl flex flex-row justify-center items-center mb-5">
          Photography
        </h1>
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
