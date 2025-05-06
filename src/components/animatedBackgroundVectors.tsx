import { AnimatePresence } from "motion/react";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const vectors = [
  "/custom/vector2.svg",
  "/custom/vector3.svg",
  "/custom/vector4.svg",
  "/custom/vector5.svg",
];

interface VectorItem {
  id: number;
  x: number;
  y: number;
  delay: number;
  scale: number;
  width: number;
  height: number;
  src: string;
}

const fixedPositions = [
  { x: 20, y: 20, delay: 0 },
  { x: 70, y: 70, delay: 0 },
  { x: 30, y: 30, delay: 0.5 },
  { x: 45, y: 45, delay: 0.5 },
  { x: 90, y: 20, delay: 0.8 },
  { x: 60, y: 60, delay: 1 },
  { x: 50, y: 30, delay: 1.5 },
  { x: 80, y: 50, delay: 1.5 },
];

const items: VectorItem[] = Array.from({ length: 8 }).map((_, index) => {
  return {
    id: index,
    x: fixedPositions[index].x,
    y: fixedPositions[index].y,
    delay: fixedPositions[index].delay,
    scale: 1.2,
    width: 150,
    height: 150,
    src: vectors[index % vectors.length],
  };
});
const AnimatedBackgroundVectors = ({ step }: { step: number }) => {
  return (
    <div>
      <AnimatePresence>
        {step === 2 &&
          items.map((item) => (
            <motion.div
              key={`vector-${item.id}`}
              className="absolute w-full"
              initial={{
                y: "120vh",
                x: `${item.x}%`,
                opacity: 0,
              }}
              animate={{
                y: "-100vh",
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.5 },
              }}
              transition={{
                y: {
                  duration: 3,
                  repeat: Infinity,
                  delay: item.delay,
                  ease: "linear",
                },
                opacity: { duration: 0.5 },
              }}
            >
              <Image
                src={item.src}
                alt="vector"
                width={item.width}
                height={item.height}
              />
            </motion.div>
          ))}
      </AnimatePresence>
      <AnimatePresence>
        {step === 3 &&
          items.map((item, index) => (
            <motion.div
              key={`vector-${item.id}`}
              className="absolute h-full w-full"
              initial={{
                y: `${item.y}%`,
                x: `120%`,
                opacity: 0,
              }}
              animate={{
                x: "-20%",
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.5 },
              }}
              transition={{
                x: {
                  duration: 3,
                  repeat: Infinity,
                  delay: index === 0 ? 0 : item.delay,
                  ease: "linear",
                },
                opacity: { duration: 0.5 },
              }}
            >
              <Image
                src={item.src}
                alt="vector"
                width={item.width}
                height={item.height}
              />
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedBackgroundVectors;
