import React from "react";

interface ViewCollectionButtonProps {
  className?: string;
  onClick?: () => void;
}

export const ViewCollectionButton: React.FC<ViewCollectionButtonProps> = ({
  className = "",
  onClick,
}) => {
  return (
    <div
      className={`absolute right-[-1%] bottom-[-50%] h-[120px] w-[120px] sm:h-[160px] sm:w-[160px] md:h-[200px] md:w-[200px] cursor-pointer ${className}`}
      onClick={onClick}
    >
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 254.73 221.92"
          preserveAspectRatio="xMaxYMax"
          className="h-full w-full"
        >
          <path
            fill="#203D99"
            d="m225.68,15.74c-25.47-21.39-54.72-22.72-79.62,6.86-24.91,29.57-40.17,54.92-72.67,49.26-32.5-5.66-62.08,14.2-71.32,44.78-9.24,30.58,13.36,75.03,52.18,90.3,38.81,15.27,72.91,24.12,122.72.19,49.81-23.93,68.79-79.19,75.51-108.95,6.71-29.76-1.32-61.04-26.79-82.44Z"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center mt-2 sm:mt-3">
          <span className="text-white text-xs sm:text-sm font-medium tracking-wider">
            View Collection
          </span>
        </div>
      </div>
    </div>
  );
};
