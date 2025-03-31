"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}) {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState("TOP");

  const rotateDirection = (currentDirection) => {
    const directions = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  const movingMap = {
    TOP: "radial-gradient(60% 120% at 50% 0%, white 0%, transparent 100%)",
    LEFT: "radial-gradient(40% 80% at 0% 50%, white 0%, transparent 100%)",
    BOTTOM: "radial-gradient(40% 80% at 50% 100%, white 0%, transparent 100%)",
    RIGHT: "radial-gradient(40% 80% at 100% 50%, white 0%, transparent 100%)",
  };

  const highlight =
  "radial-gradient(130% 220% at 50% 50%,rgb(26, 224, 221) 0%, rgba(50, 117, 248, 0.1) 100%)";


  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prev) => rotateDirection(prev));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered]);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full border-[3px] border-gray-800 content-center transition duration-500 items-center flex-col justify-center overflow-visible p-px w-fit",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "min-w-[180px] text-center text-white z-10 bg-transparent px-8 py-2.5 rounded-[inherit] font-righteous leading-none text-[18px]",
          className
        )}
      >
        {children}
      </div>
      <motion.div
        className={cn(
          "flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
        )}
        style={{
          filter: "blur(8px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: 2 }}
      />
      <div className="bg-black absolute z-1 flex-none inset-[2px] rounded-[100px]" />
    </Tag>
  );
}
