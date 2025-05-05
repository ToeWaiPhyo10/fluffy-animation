import React from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "motion/react";

const JapaneseText = ({ step }: { step: number }) => {
  return (
    <AnimatePresence mode="wait">
      {step === 3 && (
        <motion.div
          className="absolute right-[10%] z-100 text-left xl:top-[30%] top-[20%] xl:px-0 px-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          exit={{ opacity: 0 }}
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
                    y: [0, -15, 0, 15, 0],
                    x: [0, 10, 0, -10, 0],
                    rotate: [0, 1, 0, -1, 0],
                  }}
                  transition={{
                    opacity: {
                      duration: 0.6,
                      delay: index * 0.8,
                    },
                    y: {
                      duration: 4,
                      ease: "easeInOut",
                      repeat: Infinity,
                      delay: index * 0.2,
                    },
                    x: {
                      duration: 4,
                      ease: "easeInOut",
                      repeat: Infinity,
                      delay: index * 0.2,
                    },
                    rotate: {
                      duration: 4,
                      ease: "easeInOut",
                      repeat: Infinity,
                      delay: index * 0.2,
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
                  y: [0, -15, 0, 15, 0],
                  x: [0, 10, 0, -10, 0],
                  rotate: [0, 1, 0, -1, 0],
                }}
                transition={{
                  opacity: {
                    duration: 0.6,
                    delay: index * 0.8,
                  },
                  y: {
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: index * 0.2,
                  },
                  x: {
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: index * 0.2,
                  },
                  rotate: {
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: index * 0.2,
                  },
                }}
              >
                {text}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default JapaneseText;
