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
// Create 8 items to ensure more frequent animations
const items = Array.from({ length: 8 }).map((_, index) => {
  // Random position across the screen
  const x = Math.random() * 80; // 0-80% of screen width

  const y = Math.random() * 80; // 0-80% of screen height

  // Stagger delays in 1-second intervals but with some randomness
  // This ensures at least one vector shows per second
  const baseDelay = Math.floor(index / 2); // Two items share similar base delay
  const randomOffset = Math.random() * 0.5; // Add up to 0.5s random offset
  const delay = baseDelay + randomOffset;

  const scale = 1.2;
  const width = 150;
  const height = 150;
  // Randomly select vector but ensure even distribution
  const src = vectors[index % vectors.length];

  return {
    id: index,
    x,
    y,
    delay,
    scale,
    width,
    height,
    src,
  };
});
const AnimatedBackgroundVectors = ({ step }: { step: number }) => {
  return (
    <div>
      <AnimatePresence>
        {step === 2 &&
          items.map((item, index) => (
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
                  duration: 15,
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
                  duration: 15,
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
