import Link from "next/link";
import {
  FaAngleDoubleDown,
  FaDownload,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { CosmicButton } from "./ui/customButton";
import { TbFileDownload } from "react-icons/tb";

export default function Hero() {
  return (
    <section className="flex items-center justify-center min-h-[80vh] px-4 z-10">
      <div className="text-center ">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-200 to-neutral-500 bg-clip-text text-transparent">
          Hi, Im Khattab
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
          <div className="loader flex justify-center">
            <div className="words text-gray-400">
              <span className="word">software engineer</span>
              <span className="word">full-stack</span>
              <span className="word">back-end engineer</span>
              <span className="word">computer science</span>
              <span className="word">software engineer</span>
            </div>
          </div>
        </p>
        <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
          I create beautiful, responsive web applications using modern
          technologies like React, Next.js, and Node.js. Lets build something
          amazing together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-around items-center">
          <div className="flex sm:flex-row gap-8 justify-center not-sm:mb-5 ">
            <Link href="https://github.com/khatab1324" className="group">
              <div className="relative flex items-center justify-center text-5xl text-gray-600 hover:text-gray-900">
                <div className="absolute w-14 h-14 rounded-full bg-white blur-xl opacity-0 group-hover:opacity-100 transition duration-300" />
                <FaGithub className="relative z-10" />
              </div>
            </Link>
            <Link
              href="https://linkedin.com/in/khattab-d"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative flex items-center justify-center text-5xl text-gray-600 hover:text-gray-900">
                <div className="absolute w-14 h-14 rounded-full bg-white blur-xl opacity-0 group-hover:opacity-100 transition duration-300" />
                <FaLinkedin className="relative z-10" />
              </div>
            </Link>
          </div>
          <div className="">
            <Link href={"#contact"}>
              <CosmicButton>
                <span className="flex items-center gap-2">
                  <FaAngleDoubleDown />
                  Contact me
                </span>
              </CosmicButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
