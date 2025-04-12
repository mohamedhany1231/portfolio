import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="    min-h-full  flex lg:flex-row   flex-col   py-[5%] gap-[10%]       ">
      <div className="mb-8  lg:h-[90%] relative shrink-0  ">
        <img
          className="   mx-auto lg:mx-0 lg:!ml-auto w-[80%] sm:w-[23rem]    lg:h-full !aspect-square object-cover object-top rounded-full
          shadow-[0_0_5px_#fff,inset_0_0_5px_#fff,0_0_25px_#06b6d4,0_0_25px_#06b6d4,0_0_100px_#06b6d4]"
          src="./hero.webp"
        />
      </div>

      <div className="   space-y-2  py-[5%]  mx-auto flex flex-col lg:h-[75%]  2xl:h-[90%]  ">
        <h1 className=" font-bold uppercase !text-4xl/8 sm:!text-6xl/12 lg:!text-7xl/14 2xl:!text-8xl/20 tracking-tighter ">
          hello i'm
          <br />
          mohamed
        </h1>
        <h2 className=" font-bold uppercase text-2xl sm:text-4xl sm:w-[24ch] text-nowrap tracking-tight ">
          i'm a{" "}
          <span className=" block w-fit mx-auto sm:inline    text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-purple-500 from-60% to-cyan-500/40 to-90%  p-2 ">
            <TypeAnimation
              sequence={[
                "software engineer",
                1000,
                "problem solver",
                1000,
                "mern expert ",
                1000,
              ]}
              wrapper="span"
              repeat={Infinity}
            />{" "}
          </span>
        </h2>

        <p className=" mt-8 pl-2 font-semibold text-neutral-300 sm:text-lg max-w-[60ch] w-full ">
          I can handle different kinds of coding challenges and enjoy creating
          digital tools that are easy and efficient to use.{" "}
        </p>

        <div className="    grow  flex  items-end mt-20  ">
          <HeroIcons />
        </div>
      </div>
    </section>
  );
}

function HeroIcons() {
  return (
    <div className=" w-full flex items-center justify-evenly text-4xl sm:text-5xl text-white ">
      <a href="https://github.com/mohamedhany1231" target="_blank">
        <FaGithub className=" text-white transition-colors  hover:text-cyan-500/80" />
      </a>
      <a href="https://www.linkedin.com/in/mohamedhanyy/" target="_blank">
        <FaLinkedin className=" text-white transition-colors  hover:text-cyan-500/80" />
      </a>
      <a href="mailto:mohamedhany61@gmail.com" target="_blank">
        <IoMdMail className=" text-white transition-colors  hover:text-cyan-500/80" />
      </a>
    </div>
  );
}
