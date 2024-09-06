"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect } from "react";

export default function MouseRadialGradient(props: any) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  useEffect(() => {
    function handleMouseMove({
      clientX,
      clientY,
    }: {
      clientX: number;
      clientY: number;
    }) {
      mouseX.set(Math.abs(clientX));
      mouseY.set(Math.abs(clientY));
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div
      className="absolute inset-0 -z-10 overflow-hidden"
      // onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 lg:group-hover/body:opacity-100"
        style={{
          background: useMotionTemplate`
                radial-gradient(
                  750px circle at ${mouseX}px ${mouseY}px,
                  rgba(210, 192, 192, 0.12),
                  rgba(109, 120, 134, 0.12),
                  transparent 70%
                )
              `,
        }}
      />
    </div>
  );
}
