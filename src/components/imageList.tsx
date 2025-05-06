import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useDeviceType } from "@/hooks/useDeviceType";

const imageList = [
  {
    src: "/humans/img1.webp", //yellow hair
    top: "-14%",
    topTablet: "-20%",
    topMobile: "-5%",
    left: "-10%",
    leftTablet: "-40%",
    leftMobile: "-30%",
    zIndex: 15,
  },
  {
    src: "/humans/img2.webp", //blue hat
    top: "-19%",
    topTablet: "-15%",
    topMobile: "-8%",
    left: "12%",
    leftTablet: "10%",
    leftMobile: "8%",
    zIndex: 14,
  },
  {
    src: "/humans/img3.webp", //brown and curly hair
    top: "-32%",
    topTablet: "-25%",
    topMobile: "-15%",
    left: "35%",
    leftTablet: "30%",
    leftMobile: "25%",
    zIndex: 13,
  },
  {
    src: "/humans/img4.webp", //silver earing
    top: "-42%",
    topTablet: "-35%",
    topMobile: "-20%",
    left: "60%",
    leftTablet: "55%",
    leftMobile: "45%",
    zIndex: 12,
  },
  {
    src: "/humans/img4.webp", //gray cat
    top: "5%",
    topTablet: "5%",
    topMobile: "20%",
    left: "-25%",
    leftTablet: "-30%",
    leftMobile: "-30%",
    zIndex: 21,
  },
  {
    src: "/humans/img5.webp", //spot cat
    top: "15%",
    topTablet: "12%",
    topMobile: "10%",
    left: "0%",
    leftTablet: "0%",
    leftMobile: "-10%",
    zIndex: 20,
  },
  {
    src: "/humans/img6.webp", //black hat
    top: "5%",
    topTablet: "4%",
    topMobile: "2%",
    left: "40%",
    leftTablet: "35%",
    leftMobile: "30%",
    zIndex: 18,
  },
  {
    src: "/humans/img7.webp", //red hair girl
    top: "0%",
    topTablet: "0%",
    topMobile: "0%",
    left: "60%",
    leftTablet: "55%",
    leftMobile: "45%",
    zIndex: 17,
  },
  {
    src: "/humans/img8.webp", //brown hat and black cat
    top: "30%",
    topTablet: "25%",
    topMobile: "50%",
    left: "-15%",
    leftTablet: "-25%",
    leftMobile: "-25%",
    zIndex: 25,
  },
  {
    src: "/humans/img9.webp", //pink hair
    top: "42%",
    topTablet: "30%",
    topMobile: "35%",
    left: "10%",
    leftTablet: "-5%",
    leftMobile: "-25%",
    zIndex: 24,
  },
  {
    src: "/humans/img10.webp", //line hair and gray cat
    top: "39%",
    topTablet: "32%",
    topMobile: "40%",
    left: "25%",
    leftTablet: "22%",
    leftMobile: "10%",
    zIndex: 23,
  },
  {
    src: "/humans/img16.webp", //dark blue hair and black cat
    top: "35%",
    topTablet: "30%",
    topMobile: "40%",
    left: "45%",
    leftTablet: "40%",
    leftMobile: "35%",
    zIndex: 22,
  },
  {
    src: "/humans/img11.webp",
    top: "-60%",
    topTablet: "-45%",
    topMobile: "-30%",
    left: "-10%",
    leftTablet: "-8%",
    leftMobile: "-5%",
    zIndex: 9,
  },
  {
    src: "/humans/img13.webp",
    top: "-60%",
    topTablet: "-45%",
    topMobile: "-30%",
    left: "20%",
    leftTablet: "18%",
    leftMobile: "15%",
    zIndex: 9,
  },
  {
    src: "/humans/img15.webp",
    top: "-50%",
    topTablet: "-40%",
    topMobile: "-25%",
    left: "50%",
    leftTablet: "45%",
    leftMobile: "40%",
    zIndex: 7,
  },
  {
    src: "/humans/img12.webp",
    top: "35%",
    topTablet: "30%",
    topMobile: "20%",
    left: "65%",
    leftTablet: "60%",
    leftMobile: "50%",
    zIndex: 21,
  },
];

const ImageList = ({ step }: { step: number }) => {
  const { isMobile, isTablet } = useDeviceType();
  return (
    <motion.div
      animate={{
        opacity: step !== 1 ? 0 : 1,
      }}
      transition={{
        duration: step === 1 ? 0.8 : 0.5,
      }}
    >
      {imageList.map((image, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            top: isMobile
              ? image.topMobile
              : isTablet
              ? image.topTablet
              : image.top,
            left: isMobile
              ? image.leftMobile
              : isTablet
              ? image.leftTablet
              : image.left,
            width: isMobile ? "300px" : "750px",
            height: isMobile ? "300px" : "750px",
            zIndex: image.zIndex,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [0, -15, 0],
          }}
          transition={{
            opacity: {
              duration: 0.8,
              ease: "easeInOut",
            },
            y: {
              duration: 0.5,
              ease: "easeInOut",
              repeat: Infinity,
              delay: index * 0.05,
            },
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src={image.src}
              alt={`Character ${index + 1}`}
              fill
              className="object-cover"
              priority
              loading="eager"
              quality={100}
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ImageList;
