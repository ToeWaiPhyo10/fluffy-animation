import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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

const ImageList = ({ step }: { step: number }) => {
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
            top: image.top,
            left: image.left,
            width: "750px",
            height: "750px",
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
