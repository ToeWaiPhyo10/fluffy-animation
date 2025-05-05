import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const SecondSlide = () => {
  return (
    <div>
      <div className="relative h-screen w-full bg-red">
        <div className="relative h-full w-full">
          <motion.div
            className="absolute top-[30%] left-0 right-0 flex justify-center z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.webp"
                alt="Fluffy HUGS"
                width={900}
                height={80}
                className="object-cover"
              />
            </Link>
          </motion.div>

          <div className="absolute inset-0 flex items-center justify-center z-[100]">
            <motion.div
              key={`walk-animation`}
              initial={{ y: 100, rotate: 0, opacity: 0.2 }}
              animate={{
                y: 60,
                rotate: [0, 0, -90],
                opacity: 1,
              }}
              transition={{
                duration: 1,
                times: [0, 0.4, 1],
                ease: "easeOut",
              }}
            >
              <motion.div
                animate={{
                  x: [0, -25, 0],
                }}
                transition={{
                  duration: 1.2,
                  ease: "easeInOut",
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 1.5,
                }}
              >
                <Image
                  src="/humans/human.webp"
                  alt="Character walking"
                  width={300}
                  height={300}
                  className="object-cover"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-[100] flex justify-between items-center p-4 ">
        <div className="flex items-center gap-2 sm:gap-4 scale-75 sm:scale-100">
          <Link
            href="https://discord.com"
            className="transition-transform hover:scale-110"
          >
            <div className="bg-[#5865F2] rounded-full p-2">
              <Image
                src="/social/discord.svg"
                alt="Discord"
                width={30}
                height={24}
                className="object-contain"
              />
            </div>
          </Link>
          <Link
            href="https://opensea.io"
            className="transition-transform hover:scale-110"
          >
            <div className="bg-[#2081E2] rounded-full p-2">
              <Image
                src="/social/opensea.svg"
                alt="OpenSea"
                width={30}
                height={24}
                className="object-contain"
              />
            </div>
          </Link>
          <Link
            href="https://twitter.com"
            className="transition-transform hover:scale-110"
          >
            <div className="bg-[#1DA1F2] rounded-full p-2">
              <Image
                src="/social/twitter.svg"
                alt="Twitter"
                width={30}
                height={24}
                className="object-contain"
              />
            </div>
          </Link>
        </div>

        <div className="absolute right-[-1%] bottom-[-50%] h-[200px] w-[200px] cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 254.73 221.92"
            preserveAspectRatio="xMaxYMax"
            data-open_viewmore="false"
            data-fade="index"
            className="h-full w-full"
          >
            <path
              fill="#203D99"
              className="absolute z-[99]"
              d="m225.68,15.74c-25.47-21.39-54.72-22.72-79.62,6.86-24.91,29.57-40.17,54.92-72.67,49.26-32.5-5.66-62.08,14.2-71.32,44.78-9.24,30.58,13.36,75.03,52.18,90.3,38.81,15.27,72.91,24.12,122.72.19,49.81-23.93,68.79-79.19,75.51-108.95,6.71-29.76-1.32-61.04-26.79-82.44Z"
            ></path>
            <text
              className=" text-white z-[100] right-[30%] bottom-[-50%]"
              x="81.9%"
              y="95.9%"
            >
              view collection
            </text>
          </svg>
          <span className="absolute right-[-10%] bottom-[-58%] h-[200px] w-[200px] cursor-pointer text-white text-xs font-semibold tracking-[0.3em]">
            View Collection
          </span>
        </div>
      </div>
    </div>
  );
};

export default SecondSlide;
