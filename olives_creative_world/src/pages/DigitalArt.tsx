import image2 from "../assets/digital-art/2.png";
import image37 from "../assets/digital-art/37.png";
import image38 from "../assets/digital-art/38.png";
import image39 from "../assets/digital-art/39.png";
import image40 from "../assets/digital-art/40.png";
import image41 from "../assets/digital-art/41.png";
import image42 from "../assets/digital-art/42.png";
import image43 from "../assets/digital-art/43.png";
import image44 from "../assets/digital-art/44.png";
import image45 from "../assets/digital-art/45.png";
import image46 from "../assets/digital-art/46.png";
import image47 from "../assets/digital-art/47.png";
import image48 from "../assets/digital-art/48.png";
import image49 from "../assets/digital-art/49.png";
import image50 from "../assets/digital-art/50.png";
import image51 from "../assets/digital-art/51.png";
import image52 from "../assets/digital-art/52.png";
import image53 from "../assets/digital-art/53.png";
import image98 from "../assets/digital-art/98.png";
import image99 from "../assets/digital-art/99.png";
import image100 from "../assets/digital-art/100.png";

const images = [
  { src: image2, alt: "" },
  { src: image98, alt: "" },
  { src: image38, alt: "" },
  { src: image39, alt: "" },
  { src: image43, alt: "" },
  { src: image44, alt: "" },
  { src: image53, alt: "" },
  { src: image45, alt: "" },
  { src: image99, alt: "" },
  { src: image40, alt: "" },
  { src: image46, alt: "" },
  { src: image47, alt: "" },
  { src: image48, alt: "" },
  { src: image49, alt: "" },
  { src: image50, alt: "" },
  { src: image51, alt: "" },
  { src: image52, alt: "" },
  { src: image42, alt: "" },
  { src: image37, alt: "" },
  { src: image41, alt: "" },
  { src: image100, alt: "" },
];

const DisplayImages = ({ src, alt }: { src: any; alt: string }) => {
  return (
    <>
      <img src={src} alt={alt} width={350} />
    </>
  );
};

const DigitalArt = () => {
  return (
    <>
      <section className="bg-pastel-petal text-burgandy h-full md:h-screen w-full font-kawaii-bubble text-2xl p-5 md:p-10 overflow-y-scroll">
        <h1 className=" text-6xl flex flex-row justify-center items-center mb-5">
          DigitalArt
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

export default DigitalArt;
