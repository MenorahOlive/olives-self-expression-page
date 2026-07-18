import image15 from "../assets/teaching/15.png";
import image61 from "../assets/teaching/61.png";
import image62 from "../assets/teaching/62.png";
import image65 from "../assets/teaching/65.png";
import image66 from "../assets/teaching/66.png";
import image67 from "../assets/teaching/67.png";
import image68 from "../assets/teaching/68.png";
import image71 from "../assets/teaching/71.png";
import image79 from "../assets/teaching/79.png";

const images = [
  { src: image65, alt: "" },
  { src: image15, alt: "" },
  { src: image61, alt: "" },
  { src: image62, alt: "" },
  { src: image66, alt: "" },
  { src: image67, alt: "" },
  { src: image68, alt: "" },
  { src: image71, alt: "" },
  { src: image79, alt: "" },
];

const DisplayImages = ({ src, alt }: { src: any; alt: string }) => {
  return (
    <>
      <img src={src} alt={alt} width={350} />
    </>
  );
};

const Teaching = () => {
  return (
    <>
      <section className="bg-pastel-petal text-burgandy h-full md:h-screen w-full font-kawaii-bubble text-2xl p-5 md:p-10 overflow-y-scroll">
        <h1 className=" text-6xl flex flex-row justify-center items-center mb-5">
          Teaching
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

export default Teaching;
