import React from "react";
import { motion } from "framer-motion";
import { useDeviceType } from "@/hooks/useDeviceType";
import Image from "next/image";

const MainCharacter = ({ step }: { step: number }) => {
  const { isMobile, isTablet } = useDeviceType();
  return (
    <motion.div
      className={`absolute ${
        step === 1
          ? "w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[750px] lg:h-[750px]"
          : "w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]"
      }`}
      style={{
        top:
          step === 1
            ? isMobile
              ? "10%"
              : isTablet
              ? "15%"
              : "8%"
            : step === 2
            ? isMobile || isTablet
              ? "20%"
              : "30%"
            : "50%",
        left:
          step === 1
            ? isMobile
              ? "20%"
              : "25%"
            : step === 2
            ? isMobile
              ? "-10%"
              : isTablet
              ? "10%"
              : "30%"
            : isMobile
            ? "10%"
            : "25%",
        zIndex: isTablet ? 22 : 19,
        transform: "translate(-50%, -50%)",
      }}
      animate={{
        rotate: step === 2 ? -90 : 0,
      }}
      transition={{
        rotate: {
          duration: 1.5,
          ease: "easeOut",
        },
        top: {
          duration: 1,
          ease: "easeOut",
        },
        delay: 0.2,
      }}
      exit={{
        top: "-5%",
      }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{
          y: step !== 2 ? [0, -15, 0] : undefined,
          x: step === 2 ? [0, -25, 0] : undefined,
        }}
        transition={{
          duration: step === 2 ? 1.2 : 0.5,
          ease: "easeInOut",
          repeat: step === 2 ? Number.POSITIVE_INFINITY : Infinity,
          delay: step === 2 ? 1.5 : 4 * 0.05,
        }}
      >
        <Image
          src={"/humans/human.webp"}
          alt={`main character`}
          width={step === 1 ? undefined : 300}
          height={step === 1 ? undefined : 300}
          fill={step === 1 ? true : false}
          className={`object-cover ${step === 1 ? "object-top" : ""}`}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          loading="eager"
          quality={100}
        />
      </motion.div>
    </motion.div>
  );
};

export default MainCharacter;
