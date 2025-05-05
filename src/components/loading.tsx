import Image from "next/image";
import React, { useEffect } from "react";

type LoadingProps = {
  setIsLoading: (isLoading: boolean) => void;
};
const Loading = ({ setIsLoading }: LoadingProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  return (
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
  );
};

export default Loading;
