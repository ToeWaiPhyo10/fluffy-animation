import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ViewCollectionButton } from "@/components/ViewCollectionButton";
import { motion } from "framer-motion";

const imageList = [
  {
    src: "/humans/img1.webp", //yellow hair
    top: "-14%",
    left: "-10%",
    zIndex: 15,
  },
  {
    src: "/humans/img2.webp", //blue hat
    top: "-19%",
    left: "12%",
    zIndex: 14,
  },
  {
    src: "/humans/img3.webp", //brown and curly hair
    top: "-32%",
    left: "35%",
    zIndex: 13,
  },
  {
    src: "/humans/img4.webp", //silver earing
    top: "-42%",
    left: "60%",
    zIndex: 12,
  },
  {
    src: "/humans/img4.webp", //gray cat
    top: "5%",
    left: "-25%",
    zIndex: 21,
  },
  {
    src: "/humans/img5.webp", //spot cat
    top: "15%",
    left: "0%",
    zIndex: 20,
  },
  {
    src: "/humans/img6.webp", //black hat
    top: "5%",
    left: "40%",
    zIndex: 18,
  },
  {
    src: "/humans/img7.webp", //red hair girl
    top: "0%",
    left: "60%",
    zIndex: 17,
  },
  {
    src: "/humans/img8.webp", //brown hat and black cat
    top: "30%",
    left: "-15%",
    zIndex: 25,
  },
  {
    src: "/humans/img9.webp", //pink hair
    top: "42%",
    left: "10%",
    zIndex: 24,
  },
  {
    src: "/humans/img10.webp", //line hair and gray cat
    top: "39%",
    left: "25%",
    zIndex: 23,
  },
  {
    src: "/humans/img16.webp", //dark blue hair and black cat
    top: "35%",
    left: "45%",
    zIndex: 22,
  },
  {
    src: "/humans/img11.webp",
    top: "-60%",
    left: "-10%",
    zIndex: 9,
  },
  {
    src: "/humans/img13.webp",
    top: "-60%",
    left: "20%",
    zIndex: 9,
  },
  {
    src: "/humans/img15.webp",
    top: "-50%",
    left: "50%",
    zIndex: 7,
  },
  {
    src: "/humans/img12.webp",
    top: "35%",
    left: "65%",
    zIndex: 21,
  },
];
const FirstSlide = () => {
  return (
    <div className="absolute inset-0">
      <div className="relative h-full w-full">
        {/* Logo moved here from fixed position */}
        <div className="absolute left-4 sm:left-10 top-6 sm:top-12 z-[9999]">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.webp"
              alt="Fluffy HUGS"
              width={300}
              height={160}
              className="w-48 sm:w-64 md:w-auto object-contain"
            />
          </Link>
        </div>
        <div className="relative h-screen w-full bg-white overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="relative h-full w-full mx-auto">
              {imageList.map((image, index) => (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{
                    top: image.top,
                    left: image.left,
                    width: "clamp(300px, 50vw, 750px)",
                    height: "clamp(300px, 50vw, 750px)",
                    zIndex: image.zIndex,
                  }}
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: index * 0.05,
                  }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={image.src}
                      alt={`Character ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              ))}
              <motion.div
                className="absolute"
                style={{
                  top: "8%",
                  left: "25%",
                  width: "clamp(300px, 50vw, 750px)",
                  height: "clamp(450px, 75vw, 1125px)",
                  zIndex: 19,
                  overflow: "hidden",
                }}
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
                <div className="relative w-full h-full">
                  <Image
                    src={"/humans/human.webp"}
                    alt={`main character`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            </div>
          </div>
          {/* footer */}
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

            <ViewCollectionButton
              onClick={() => console.log("View Collection clicked")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSlide;
