"use client";
import Image from "next/image";

import { useEffect, useState } from "react";

import FirstSlide from "@/components/firstSlide";
import SecondSlide from "@/components/secondSlide";
import { AnimatePresence, motion } from "framer-motion";
import ThirdSlide from "@/components/thirdSlide";
import { Keyboard, Mousewheel } from "swiper/modules";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";

import "swiper/css";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <main className="min-h-screen w-full bg-white overflow-hidden">
      <AnimatePresence>
        {isLoading ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white">
            <div className="relative h-40 w-40">
              <Image
                src="/loading.webp"
                alt="Loading"
                fill
                className="object-contain"
              />
            </div>
          </div>
        ) : (
          <Swiper
            direction="vertical"
            slidesPerView={1}
            spaceBetween={0}
            mousewheel={true}
            keyboard={true}
            modules={[Mousewheel, Keyboard]}
            className="h-screen w-full"
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide className="overflow-hidden">
              <div className="relative h-screen w-full bg-white">
                {/* first slide motion */}
                {/* <motion.div
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
            </motion.div> */}
                {/* second slide motion */}
                {/* <div className="absolute inset-0 flex items-center justify-center z-[100]">
                        <motion.div
                          initial={{ y: 100, rotate: 0, opacity: 0.8 }}
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
                      </div> */}
                <FirstSlide />
              </div>
            </SwiperSlide>
            <SwiperSlide className="overflow-hidden">
              <div className="relative h-screen w-full bg-white">
                <SecondSlide />
              </div>
            </SwiperSlide>
            <SwiperSlide className="overflow-hidden">
              <div className="relative h-screen w-full bg-white">
                <ThirdSlide />
              </div>
            </SwiperSlide>
          </Swiper>
        )}
      </AnimatePresence>
    </main>
  );
}
