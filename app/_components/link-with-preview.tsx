"use client";

import { useState, useRef, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { tw } from "@/utils/tailwind";
import useOGMetadata from "@/hooks/useOGMetadata";
import { ExternalLink } from "lucide-react";

interface LinkWithPreviewProps {
  href: string;
  children: React.ReactNode;
}

export default function LinkWithPreview({
  href,
  children,
}: LinkWithPreviewProps) {
  const [showPreview, setShowPreview] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const previewRef = useRef<HTMLSpanElement>(null);

  const { ogMetadata, isLoading } = useOGMetadata(href);

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
        <span className="block w-[350px] p-0.5">
          <Image
            src={ogMetadata.ogImage}
            alt={ogMetadata.title || "Preview"}
            width={350}
            height={150}
            className="h-auto rounded-md"
            onLoad={() => setImageLoaded(true)}
          />
          <h3 className="px-0.5 pt-2 text-sm">{ogMetadata.title}</h3>
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
        className="group relative inline-flex items-center"
      >
        {children}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: showPreview ? 1 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="invisible ml-1 hidden overflow-hidden lg:visible lg:inline"
        >
          <ExternalLink size={14} className="text-foreground-dimmed" />
        </motion.span>
        <span className="absolute bottom-0 left-0 h-px w-full bg-foreground-dimmed transition-[width] duration-[400ms] ease-out lg:w-0 lg:group-hover:w-full" />
      </Link>
      <AnimatePresence>
        {showPreview && (
          <motion.span
            ref={previewRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={imageLoaded ? { opacity: 1, scale: 1 } : {}}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.15 } }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className={tw(
              "absolute bottom-full left-1/2 z-[9999] hidden -translate-x-1/2 transform rounded-md bg-[#161615] p-2 lg:block",
            )}
          >
            {previewContent}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
