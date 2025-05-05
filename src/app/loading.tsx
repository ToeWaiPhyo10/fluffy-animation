import Image from "next/image";
import React from "react";

const loading = () => {
  return (
    <Image src="/loading.webp" alt="Loading" fill className="object-contain" />
  );
};

export default loading;
