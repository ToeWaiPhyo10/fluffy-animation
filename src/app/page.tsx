"use client";

import { useEffect, useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";

import "swiper/css";
import Loading from "@/components/loading";
import HeaderLogo from "@/components/headerLogo";
import ImageList from "@/components/imageList";
import MainCharacter from "@/components/mainCharacter";
import CenterLogo from "@/components/centerLogo";
import AnimatedBackgroundVectors from "@/components/animatedBackgroundVectors";
import JapaneseText from "@/components/japaneseText";
import Footer from "@/components/footer";

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

  return (
    <main className="fixed inset-0 w-full h-screen bg-gradient-to-r from-[#fbf8f0] to-[#fbf8f0] overflow-hidden select-none">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loading setIsLoading={setIsLoading} />
        ) : (
          <div className="relative h-screen w-full">
            {/* Logo */}
            <HeaderLogo step={step} />

            {/* Content and Footer */}
            <div className="relative h-screen w-full bg-gradient-to-r from-[#fbf8f0] to-[#fbf8f0] overflow-hidden">
              {/* Image List */}
              <ImageList step={step} />
              {/* main character */}
              <MainCharacter step={step} />

              {/* center logo */}
              <CenterLogo step={step} />

              {/* Animated Background Vectors */}
              <AnimatedBackgroundVectors step={step} />

              {/* Japanese text */}
              <JapaneseText step={step} />
              {/* Footer */}
              <Footer />
            </div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
