"use client";
import Headers from "@/components/Header";
import Hero from "@/components/Hero";
import MyTerminal, { CommandType } from "@/components/MyTerminal";
import "@/app/globals.css";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

import { TracingBeam } from "@/components/ui/tracing-beam";
import Contact from "@/components/Contact";
import SpaceBackground from "@/components/StarBackground";
import { projectsList } from "@/constans";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black ">
      <div className="min-h-screen w-3/3 sm:w-3/4">
        <SpaceBackground />

        <Headers />

        <div className="absolute inset-0 -z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/12 rounded-full blur-3xl animate-pulse  " />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-500/8 rounded-full blur-2xl" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10 ">
          <Hero />
          <MyTerminal
            commands={[
              {
                type: CommandType.COMMAND,
                content: "npm install myportfolio -g",
              },
            ]}
          />
        </div>
        <div className="">
          <section className="py-20 lg:py-32  relative">
            <Skills />
          </section>
        </div>
        <TracingBeam>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-200 to-neutral-600 bg-clip-text text-transparent text-center sm:text-left">
            My Projects
          </h2>
          <div className="w-full flex justify-center">
            <div className="not-sm:w-3/4">
              {projectsList.map((project, index) => (
                <Projects key={index} {...project} />
              ))}
            </div>
          </div>
        </TracingBeam>

        <Contact />
      </div>
    </div>
  );
}
