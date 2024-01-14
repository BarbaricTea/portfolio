"use client";

import Image from "next/image";
import me from "../assets/me.jpeg";
import React from "react";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28 z-11">
      <div className="flex items-center justify-center ">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={me}
              alt="Image of me"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            ></Image>
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <p className="mt-10 mb-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
        <span className="font-bold">Wassup, I'm Sofia.</span> I'm a{" "}
          <span className="font-bold">full-stack developer</span> with{" "}
          <span className="font-bold">3 years</span> of experience in my backpack. I enjoy being creative and
          building <span className="italic">cool shit :-)</span>. My focus is{" "}
          <span className="underline">frontend (Angular, GCP)</span>.
      </p>
    </section>
  );
}
