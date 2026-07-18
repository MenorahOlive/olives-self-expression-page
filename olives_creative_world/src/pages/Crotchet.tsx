import image3 from "../assets/crotchet/3.png";
import image4 from "../assets/crotchet/4.png";
import image5 from "../assets/crotchet/5.png";
import image22 from "../assets/crotchet/22.png";
import image23 from "../assets/crotchet/23.png";
import image26 from "../assets/crotchet/26.png";
import image28 from "../assets/crotchet/28.png";
import image31 from "../assets/crotchet/31.png";
import image34 from "../assets/crotchet/34.png";
import image54 from "../assets/crotchet/54.png";
import image106 from "../assets/crotchet/106.png";

const images = [
  { src: image3, alt: "" },
  { src: image4, alt: "" },
  { src: image5, alt: "" },
  { src: image22, alt: "" },
  { src: image23, alt: "" },
  { src: image26, alt: "" },
  { src: image28, alt: "" },
  { src: image31, alt: "" },
  { src: image34, alt: "" },
  { src: image54, alt: "" },
  { src: image106, alt: "" },
];

const DisplayImages = ({ src, alt }: { src: any; alt: string }) => {
  return (
    <>
      <img src={src} alt={alt} width={350} />
    </>
  );
};

const Crotchet = () => {
  return (
    <>
      <section className="bg-pastel-petal text-burgandy h-full md:h-screen w-full font-kawaii-bubble text-2xl p-5 md:p-10 overflow-y-scroll">
        <h1 className=" text-6xl flex flex-row justify-center items-center mb-5">
          Crotchet
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

export default Crotchet;
