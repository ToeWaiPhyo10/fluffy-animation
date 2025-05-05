import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const HeaderLogo = ({ step }: { step: number }) => {
  return (
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
  );
};

export default HeaderLogo;
