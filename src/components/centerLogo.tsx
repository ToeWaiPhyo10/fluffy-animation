import { AnimatePresence } from "motion/react";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const CenterLogo = ({ step }: { step: number }) => {
  return (
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
  );
};

export default CenterLogo;
