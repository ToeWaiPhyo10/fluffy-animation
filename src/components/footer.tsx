import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
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

      <div className="absolute right-[-1%] bottom-[-50%] h-[200px] w-[200px] cursor-pointer">
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
  );
};

export default Footer;
