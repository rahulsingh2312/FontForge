"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { motion } from "framer-motion";
const Hero = () => {
  const floatAnimation = {
    y: [0, -10, 0], // Float up and down
    transition: {
      y: {
        duration: 1, // Repeat indefinitely
        yoyo: Infinity, // Repeat the animation indefinitely
        ease: "easeInOut", // You can adjust the easing function
      },
    },
  };
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };
  const textVariants2 = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  };
  // Initial and final positions
const [initial, setInitial] = useState(false);
const buttons = () => {
  setInitial(!initial)
}
  useEffect(() => {
    gsap.set(".ball", { xPercent: -50, yPercent: -50 });
    let targets = gsap.utils.toArray(".ball");
    window.addEventListener("mouseleave", (e) => {
      gsap.to(targets, {
        duration: 0.5,
        scale: 0,
        ease: "power1.out",
        overwrite: "auto",
        stagger: 0.02,
      });
    });
    window.addEventListener("mouseenter", (e) => {
      gsap.to(targets, {
        duration: 0.5,
        scale: 1,
        ease: "power1.out",
        overwrite: "auto",
        stagger: 0.02,
      });
    });
    window.addEventListener("mousemove", (e) => {
      gsap.to(targets, {
        duration: 0.5,
        x: e.clientX,
        y: e.clientY,
        ease: "power1.out",
        overwrite: "auto",
        stagger: 0.02,
      });
    });
  }, []);

  return (
    <div className="Hero mt-2">
      
   
     
      <div className="ball bg-violet-400/50 w-96 h-96 fixed top-0 left-0 rounded-full"></div>
      <div className="text-sm text-center max-sm:text-xs text-white px-4 py-2 m-4 border border-gray-600 bg-black rounded-full w-fit mx-auto backdrop-blur-sm bg-opacity-90">
        TYPEface Playground ⛹️‍♂️{" "}
      </div>

      <motion.div
        className="text-center text-8xl font-bold max-sm:text-4xl max-md:text-6xl"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        Think of <span className="text-black italic font-normal">Fonts</span>{" "}
        <br /> Think of <span className="text-stroke">us</span>
      </motion.div>
      <p className="text-sm text-gray-400 text-center mt-1">
        A playground for all of your font needs <br />
        <span className=" font-semibold"> Web . App . Graphics</span>
      </p>
      <div className="mx-auto mt-4 yoga flex-col">
        <div className="">
          <Link href="/login">
            {" "}
            <motion.div
              variants={textVariants2}
              initial="hidden"
              animate="visible"
              className="mx-auto text-center px-4 py-2 bg-violet-600 w-fit rounded-full text-white flex justify-center items-center cursor-pointer hover:bg-violet-900 transition-all"
            >
              {" "}
              Fuse Fonts
              <div className="next-svg ml-2 mb=20 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </motion.div>
          </Link>

          <motion.div animate={floatAnimation} while={{ y: 0 }}>
            <img
              src="/Bard_Generated_Image.jpg"
              alt=""
              height={600}
              width={600}
              className="mx-auto  yoga mt-10"
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
