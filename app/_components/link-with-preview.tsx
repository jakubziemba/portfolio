"use client";

import { useState, useRef, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { tw } from "@/utils/tailwind";
import useOGMetadata from "@/hooks/useOGMetadata";

interface LinkWithPreviewProps {
  href: string;
  children: React.ReactNode;
}

export default function LinkWithPreview({
  href,
  children,
}: LinkWithPreviewProps) {
  const [showPreview, setShowPreview] = useState(false);
  const [previewPosition, setPreviewPosition] = useState(
    () => "top" as "top" | "bottom",
  );
  const [imageLoaded, setImageLoaded] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const previewRef = useRef<HTMLSpanElement>(null);

  const { ogMetadata, isLoading } = useOGMetadata(href);

  const calculatePosition = () => {
    if (linkRef.current && previewRef.current) {
      const linkRect = linkRef.current.getBoundingClientRect();
      const previewRect = previewRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const spaceAbove = linkRect.top;
      const spaceBelow = viewportHeight - linkRect.bottom;

      setPreviewPosition(
        spaceAbove > spaceBelow && spaceAbove >= previewRect.height
          ? "top"
          : "bottom",
      );
    }
  };

  const previewContent = useMemo(() => {
    if (isLoading) {
      return (
        <span className="flex aspect-video w-[350px] items-center justify-center rounded-md bg-foreground-dimmed text-background">
          Loading preview...
        </span>
      );
    }

    if (ogMetadata?.ogImage) {
      return (
        <span className="block w-[350px]">
          <Image
            src={ogMetadata.ogImage}
            alt={ogMetadata.title || "Preview"}
            width={350}
            height={150}
            className="h-auto rounded-md"
            onLoad={() => setImageLoaded(true)}
          />
          {/* <h3 className="mt-2 text-sm font-semibold">{ogMetadata.title}</h3> */}
        </span>
      );
    }

    return (
      <span className="flex aspect-video w-[350px] items-center justify-center rounded-md bg-foreground-dimmed text-background">
        No preview available
      </span>
    );
  }, [ogMetadata, isLoading]);

  return (
    <span className="relative inline-block">
      <Link
        href={href}
        ref={linkRef}
        onMouseEnter={() => setShowPreview(true)}
        onMouseLeave={() => setShowPreview(false)}
        className="group relative inline-block"
      >
        {children}
        <span className="absolute bottom-0 left-0 h-px w-full bg-foreground-dimmed transition-[width] duration-[600ms] ease-out lg:w-0 lg:group-hover:w-full" />
      </Link>
      <AnimatePresence>
        {showPreview && (
          <motion.span
            ref={previewRef}
            layoutId="link-preview"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={imageLoaded ? { opacity: 1, scale: 1 } : {}}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            onAnimationStart={calculatePosition}
            className={tw(
              "absolute left-1/2 z-[9999] hidden -translate-x-1/2 transform rounded-md bg-background shadow-lg lg:block",
              previewPosition === "top" ? "bottom-full" : "top-full mt-2",
            )}
          >
            {previewContent}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
