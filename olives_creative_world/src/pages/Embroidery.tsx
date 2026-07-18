import image6 from "../assets/embroidery/6.png";
import image7 from "../assets/embroidery/7.png";
import image8 from "../assets/embroidery/8.png";
import image83 from "../assets/embroidery/83.png";

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
        <h1 className=" text-6xl flex flex-row justify-center items-center mb-5">
          Embroidery
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

export default Embroidery;
