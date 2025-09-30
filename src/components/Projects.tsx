import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";

type Props = {
  badge?: string;
  title: string;
  blurb: string;
  screenshotSrc: StaticImageData | string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  className?: string;
  isRight?: boolean;
  src: string;
};

export default function Projects({
  badge = "Featured Project",
  title,
  blurb,
  screenshotSrc,
  ctaLabel = "View Project",
  onCtaClick,
  className = "",
  isRight = true,
  src,
}: Props) {
  return (
    <section className="w-full">
      <div
        className={`flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-10 my-8 sm:my-12 lg:my-20 ${className}`}
      >
        <div
          className={`w-full lg:w-2/3 z-10 order-1 ${
            isRight ? "lg:order-2 " : "lg:order-1 "
          }`}
        >
          <div className="mb-4 ">
            <div className={`w-full flex  ${!isRight && "justify-end"} mb-2`}>
              <h3
                className={` text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-200 to-gray-600 bg-clip-text text-transparent mb-4 sm:mb-6 lg:mb-10 sm:text-start ${
                  isRight ? "text-start lg:text-start" : " text-end lg:text-end"
                }`}
              >
                {title}
              </h3>
            </div>
            <div className="p-4 sm:p-6 lg:p-10 rounded-xl bg-gradient-to-r from-gray-800 to-neutral-900 to-90% opacity-70 shadow-lg ">
              <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed">
                {blurb}
              </p>
            </div>

            <div
              className={` flex items-center justify-center ${
                isRight ? "lg:justify-start" : "lg:justify-end"
              } lg:ml-auto p-4 sm:p-6 gap-4 sm:gap-6 text-white/70 mt-4`}
            >
              <span className="text-lg sm:text-xl hover:text-white transition-colors cursor-pointer ">
                <Link href={src} target="_blank" rel="noopener noreferrer">
                  <FaGithub
                    size={32}
                    className="sm:w-8 sm:h-8 lg:w-10 lg:h-10"
                  />
                </Link>
              </span>
              <span className="text-lg sm:text-xl hover:text-white transition-colors cursor-pointer">
                <GrDeploy size={32} className="sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
              </span>
            </div>
          </div>
        </div>

        <div
          className={`sm:h-[400px] sm:w-[400px] lg:w-[600px]  ${
            isRight
              ? "lg:order-2 xl:-translate-x-28"
              : "lg:order-0 xl:translate-x-28"
          }  z-0`}
        >
          <div
            className={`rounded-lg shadow-lg gradient-to-br from-black to-gray-900/60 ${
              isRight ? "bg-gradient-to-r" : "bg-gradient-to-l"
            }  hover:scale-105 transition-transform duration-300`}
          >
            <div className="flex gap-1 sm:gap-2 px-3 py-4 mt-6  ">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
            </div>

            <div className="w-full overflow-hidden rounded-lg">
              <Image
                src={screenshotSrc || "/placeholder.svg"}
                alt={`${title} Screenshot`}
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg  hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
