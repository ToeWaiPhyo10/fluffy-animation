import Image from "next/image";
import React from "react";

const loading = () => {
  return (
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
  );
};

export default loading;
