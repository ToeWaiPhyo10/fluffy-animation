"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

import "swiper/css";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [step, setStep] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const [lastScrollTime, setLastScrollTime] = useState(0);
  const scrollThreshold = 1000; // Minimum time (ms) between step changes

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      const now = Date.now();
      if (isAnimating || now - lastScrollTime < scrollThreshold) return;

      const scrollDelta = Math.abs(e.deltaY);
      if (scrollDelta < 50) return; // Ignore small scroll movements

      setIsAnimating(true);
      setLastScrollTime(now);

      if (e.deltaY > 0 && step < 3) {
        // Scrolling down
        setStep(step + 1);
      } else if (e.deltaY < 0 && step > 1) {
        // Scrolling up
        setStep(step - 1);
      }

      // Reset animation lock after transition
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
    },
    [isAnimating, lastScrollTime, step]
  );

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
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

  return (
    <main className="fixed inset-0 w-full h-screen bg-gradient-to-r from-[#fbf8f0] to-[#fbf8f0] overflow-hidden select-none">
      <AnimatePresence>
        {isLoading ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white">
            <div className="relative h-40 w-40">
              <Image
                src="/loading.webp"
                alt="Loading"
                fill
                className="object-contain"
                priority
                loading="eager"
                quality={100}
              />
            </div>
          </div>
        ) : (
          <div className="relative h-screen w-full">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{
                opacity: step === 2 ? 0 : 1,
                y: step === 2 ? -50 : step === 3 ? 0 : 0,
                scale: step === 3 ? [0.8, 1] : 1,
              }}
              transition={{
                duration: 0.5,
                scale: { duration: 0.3, ease: "easeOut" },
                opacity: { duration: step === 1 ? 0.8 : 0.5 },
                y: { duration: step === 1 ? 0.8 : 0.5 },
              }}
            >
              <Link
                href="/"
                className="absolute left-4 sm:left-10 top-6 sm:top-12 z-[9999] flex items-center"
              >
                <Image
                  src="/logo.webp"
                  alt="Fluffy HUGS"
                  width={300}
                  height={160}
                  className="w-48 sm:w-64 md:w-auto object-contain"
                  priority
                  loading="eager"
                  quality={100}
                />
              </Link>
            </motion.div>

            {/* Content and Footer */}
            <div className="relative h-screen w-full bg-gradient-to-r from-[#fbf8f0] to-[#fbf8f0] overflow-hidden">
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
                        priority
                        loading="eager"
                        quality={100}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              {/* main character */}
              <motion.div
                className="absolute"
                style={{
                  width: step === 1 ? "clamp(300px, 50vw, 750px)" : "400px",
                  height: step === 1 ? "clamp(300px, 50vw, 750px)" : "400px",
                  top: step === 1 ? "8%" : step === 2 ? "30%" : "50%",
                  left: step === 1 ? "25%" : step === 2 ? "30%" : "20%",
                  zIndex: 19,
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

              {/* center logo */}
              <AnimatePresence mode="wait">
                {step === 2 && (
                  <motion.div
                    className="absolute top-[30%] left-0 right-0 flex justify-center z-[100]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2,
                    }}
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
                )}
              </AnimatePresence>

              {/* Animated Background Vectors */}
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

              {/* Japanese text */}
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
              {/* Footer */}
              <div className="absolute bottom-0 left-0 right-0 z-[100] flex justify-between items-center p-4">
                <div className="flex items-center gap-2 sm:gap-4 scale-75 sm:scale-100">
                  {[
                    {
                      href: "https://discord.com",
                      bgColor: "bg-[#5865F2]",
                      src: "/social/discord.svg",
                      alt: "Discord",
                    },
                    {
                      href: "https://opensea.io",
                      bgColor: "bg-[#2081E2]",
                      src: "/social/opensea.svg",
                      alt: "OpenSea",
                    },
                    {
                      href: "https://twitter.com",
                      bgColor: "bg-[#1DA1F2]",
                      src: "/social/twitter.svg",
                      alt: "Twitter",
                    },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="transition-transform hover:scale-110"
                    >
                      <div className={`${item.bgColor} rounded-full p-2`}>
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={30}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                    </Link>
                  ))}
                </div>

                <div
                  className="absolute right-[-1%] bottom-[-50%] h-[200px] w-[200px] cursor-pointer"
                  onClick={() => setStep((prev) => prev + 1)}
                >
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
                  </svg>
                  <span className="absolute right-[-10%] bottom-[-58%] h-[200px] w-[200px] cursor-pointer text-white text-xs font-semibold tracking-[0.3em]">
                    View Collection
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
