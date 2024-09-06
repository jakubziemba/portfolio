"use client";

import { tw } from "@/utils/tailwind";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export default function MouseRadialGradient(props: any) {
  const [mounted, setMounted] = useState(false);
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    function handleMouseMove({
      clientX,
      clientY,
    }: {
      clientX: number;
      clientY: number;
    }) {
      mouseX.set(clientX);
      mouseY.set(clientY);
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className={tw(
          "pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-500",
          mounted && "lg:group-hover/body:opacity-100",
        )}
        style={{
          background: useMotionTemplate`
                radial-gradient(
                  750px circle at ${mouseX}px ${mouseY}px,
                  rgba(210, 192, 192, 0.1),
                  rgba(109, 120, 134, 0.1),
                  transparent 80%
                )
              `,
        }}
      />
    </div>
  );
}
