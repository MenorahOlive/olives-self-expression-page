import Avatar from "../assets/avatar.svg";
import Wiliv from "../assets/profile.svg";
import Star from "../assets/star.svg";
import Star2 from "../assets/star-2.svg";
import { NavLink } from "react-router";

const Hero = () => {
  return (
    <div>
      <section className="bg-pastel-petal text-burgandy h-full md:h-screen w-full font-kawaii-bubble text-2xl p-5 md:p-10  overflow-x-hidden flex flex-col items-center justify-center">
        <div className="flex flex-col items-center  justify-center">
          {" "}
          <p className="font-super-adorable text-6xl flex flex-row justify-center items-center">
            Hi, my name is Olive
            <img src={Avatar} width={150} alt="" />
          </p>
          <div className="flex flex-row">
            <img
              src={Star}
              width={100}
              alt=""
              className="animate-wiggle rotate-90 w-20 md:w-28"
            />
            <img src={Wiliv} width={350} alt="" className="w-52 md:w-80" />
            <img
              src={Star2}
              width={100}
              alt=""
              className="animate-wiggle w-20 md:w-28"
            />
          </div>
          <p className="  text-center">
            I am an educator, a creative, a multidisciplinary artist and a
            passionate soul. <br />
            My craft is made with heart, love, and passion. <br />
            Welcome to my world!
          </p>
        </div>

        <div className="flex flex-row items-center justify-center gap-10 flex-wrap pt-5">
          <NavLink to="/digital-art">
            {" "}
            <div className="flex items-center justify-center flex-col hover:scale-105 transition duration-200 cursor-pointer ease-in-out ">
              <p className="text-7xl ">📁 </p>
              <p>Digital Art</p>
            </div>
          </NavLink>
          <NavLink to="/physical-art">
            <div className="flex items-center justify-center flex-col hover:scale-105 transition duration-200 cursor-pointer ease-in-out">
              <p className="text-7xl">📁 </p>
              <p>Physical Art</p>
            </div>
          </NavLink>
          <NavLink to="/crotchet">
            <div className="flex items-center justify-center flex-col hover:scale-105 transition duration-200 cursor-pointer ease-in-out">
              <p className="text-7xl">📁 </p>
              <p>Crotchet</p>
            </div>
          </NavLink>
          <NavLink to="/embroidery">
            <div className="flex items-center justify-center flex-col hover:scale-105 transition duration-200 cursor-pointer ease-in-out">
              <p className="text-7xl">📁 </p>
              <p>Embroidery</p>
            </div>
          </NavLink>
          <NavLink to="/stem">
            <div className="flex items-center justify-center flex-col hover:scale-105 transition duration-200 cursor-pointer ease-in-out">
              <p className="text-7xl">📁 </p>
              <p>STEM</p>
            </div>
          </NavLink>
          <NavLink to="/teaching">
            <div className="flex items-center justify-center flex-col hover:scale-105 transition duration-200 cursor-pointer ease-in-out">
              <p className="text-7xl">📁 </p>
              <p>Teaching</p>
            </div>
          </NavLink>
          <NavLink to="/photography">
            <div className="flex items-center justify-center flex-col hover:scale-105 transition duration-200 cursor-pointer ease-in-out">
              <p className="text-7xl">📁 </p>
              <p>Photography</p>
            </div>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Hero;
