import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const vectors = [
  "/custom/vector1.svg",
  "/custom/vector2.svg",
  "/custom/vector3.svg",
  "/custom/vector4.svg",
];
const ThirdSlide = () => {
  const items = Array.from({ length: 10 }).map((_, index) => {
    const x = Math.random() * 80; // random x position (0% to 80%)
    const delay = Math.random() * 10; // random delay (0s to 10s)

    const scale = Math.random() * 0.5 + 1; // scale between 1 to 1.5
    const width = Math.random() * 100 + 100; // width between 100px to 200px
    const height = Math.random() * 100 + 100;
    const src = vectors[Math.floor(Math.random() * vectors.length)]; // random icon

    return {
      id: index,
      x,
      delay,

      scale,
      width,
      height,
      src,
    };
  });
  return (
    <div>
      <div className="relative h-screen w-full bg-gradient-to-r from-[#fbf8f0] to-[#fbf8f0] overflow-hidden">
        <div className="relative h-full w-full">
          {/* Logo added here for Slide 3 */}
          <div className="absolute left-10 top-12 z-[100]">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.webp"
                alt="Fluffy HUGS"
                width={400}
                height={80}
                className="object-cover"
              />
            </Link>
          </div>

          <div className="absolute right-[10%] z-100 text-left xl:top-[30%] top-[20%] xl:px-0 px-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="grid grid-cols-12 gap-2 text-2xl text-[#415296] leading-10 font-medium tracking-[12px]">
                {["ふわふわの動物たちに、", "囲まれて、暮らしたい"].map(
                  (text, index) => (
                    <motion.div
                      key={index}
                      className="col-span-12 text-left"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: 1,
                        y: [0, -20, 0],
                      }}
                      transition={{
                        opacity: {
                          duration: 0.6,
                          delay: index * 0.8,
                        },
                        y: {
                          duration: 8,
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: index * 0.8 + 0.6, // Start bouncing after the appear animation completes
                          times: [
                            0,
                            ...Array(5)
                              .fill(0)
                              .map((_, i) => (i + 1) / 6),
                            1,
                          ],
                        },
                      }}
                    >
                      {text}
                    </motion.div>
                  )
                )}
              </div>
              <div className="grid mt-12 grid-cols-12 gap-2 text-2xl text-[#415296] leading-[40px] font-medium tracking-[12px]">
                {["ペットや動物が大好きなあなたへ"].map((text, index) => (
                  <motion.div
                    key={index}
                    className="col-span-12 text-left"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: [0, -20, 0],
                    }}
                    transition={{
                      opacity: {
                        duration: 0.6,
                        delay: index * 0.8, // Each line appears 0.8s after the previous one
                      },
                      y: {
                        duration: 8,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: index * 0.8 + 0.6, // Start bouncing after the appear animation completes
                        times: [
                          0,
                          ...Array(5)
                            .fill(0)
                            .map((_, i) => (i + 1) / 6),
                          1,
                        ],
                      },
                    }}
                  >
                    {text}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-[100] top-[50%] left-[20%]"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: 4 * 0.05,
                }}
              >
                <Image
                  src="/humans/human.webp"
                  alt="Loading"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          </motion.div>
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

export default ThirdSlide;
