"use client";
import { useState } from "react";

import { frontendLogos, skillCategories } from "@/constans";
import rocket from "@/svg/136881055_2089dbc0-d6f2-43c5-86a8-109958648d9e.svg";
import Image from "next/image";
import SpaceBackground from "./StarBackground";

interface LogoCarouselProps {
  logos: typeof frontendLogos;
  direction?: "left" | "right";
}

function LogoCarousel({ logos, direction = "left" }: LogoCarouselProps) {
  const animationClass =
    direction === "right"
      ? "animate-[scroll_20s_linear_infinite_reverse]"
      : "animate-[scroll_20s_linear_infinite]";

  return (
    <div className="flex overflow-hidden w-full mb-12 mask-gradient">
      <div className={`flex gap-6 ${animationClass}`}>
        {logos.map((logo, index) => {
          const IconComponent = logo.icon;
          return (
            <div
              key={`first-${index}`}
              className="flex flex-col items-center justify-center min-w-[80px] h-16 bg-indigo-900/16 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 group flex-shrink-0"
            >
              <IconComponent
                className={`w-8 h-8 mb-1 ${logo.color} group-hover:scale-110 transition-transform`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="py-20 px-4 " id="skills">
      <div className=" mx-auto">
        <div className="text-start mb-16 ">
          <h2 className="w-64 text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-200 to-neutral-800 bg-clip-text text-transparent">
            My Skills
          </h2>
        </div>
        <div className="flex justify-center mb-12">
          <div className="flex bg-gray-800 rounded-full p-1">
            {skillCategories.map((category, index) => (
              <button
                key={category.title}
                onClick={() => setActiveCategory(index)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === index
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-blue-400"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
        <LogoCarousel
          logos={skillCategories[activeCategory].logos}
          direction={activeCategory === 0 ? "left" : "right"}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-200 to-neutral-600 bg-clip-text text-transparent">
            skills working on
          </h2>
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-700 animate-[fadeInUp_0.6s_ease-out] opacity-0 animate-fill-forwards"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-200">
                  {skill.name}
                </h3>
                <span className="text-sm font-medium text-gray-400">
                  {skill.level}%
                </span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-green-400 flex items-center justify-center text-lg  translate-y-5 z-20">
                    🌍
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-red-500 to-orange-400 flex items-center justify-center text-lg translate-y-5 z-20">
                    🔴
                  </div>
                </div>
              </div>
              <div className="relative w-full h-3 bg-gray-900/70 rounded-full border border-gray-600/50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900" />
                <div
                  className="h-full bg-gradient-to-r from-gray-600 via-gray-300 to-blue-600 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                  style={{ width: `${skill.level}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                </div>
              </div>
              <div
                className="absolute top-1/2   -translate-x-7 -translate-y-1 transition-all duration-1000 ease-out z-50"
                style={{ left: `${Math.max(0, skill.level - 1)}%` }}
              >
                <div className="text-xl">
                  <Image
                    src={rocket}
                    alt="Rocket"
                    className="w-10 h-10 rotate-90 animate-[bounce_2s_ease-in-out_infinite]"
                  />
                </div>
              </div>

              <div className="text-center mt-3 text-gray-500 text-s">
                {skill.name} Journey to end: {100 - skill.level}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
