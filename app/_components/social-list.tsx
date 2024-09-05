"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Copy } from "lucide-react";
import LinkAnimated from "./link-animated";

const LINKS = [
  { name: "X", url: "https://x.com/saintjcob" },
  { name: "Bento", url: "https://bento.me/saintjcob" },
  {
    name: "Github",
    url: "https://github.com/saintjcob",
  },
  { name: "Telegram", url: "https://t.me/saintjcob" },
  { name: "LinkedIn", url: "https://linkedin.com/in/jakubziemba" },
  {
    name: "Email",
    url: "mailto:ziemba.jak@gmail.com",
    icon: <Copy size={14} />,
    onClick: (e: any) => {
      e.preventDefault();
      navigator.clipboard.writeText("ziemba.jak@gmail.com");
    },
  },
  { name: "Instagram", url: "https://instagram.com/saintjcob.lab" },
];

export default function SocialList() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (copied) {
      timeout = setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [copied]);

  return (
    <div className="social-list py-10">
      <h3 className="relative flex w-max text-foreground-dimmed">
        Let&apos;s connect!
      </h3>
      <ul className="flex w-full flex-col gap-1 pt-4">
        {LINKS.map((link, index) => {
          const isEmail = link.name === "Email";
          return (
            <li
              key={link.name}
              className="relative flex w-max flex-nowrap gap-4 lg:gap-10"
              onClick={
                link.onClick
                  ? (e) => {
                      link.onClick(e);
                      setCopied(true);
                    }
                  : undefined
              }
            >
              <LinkAnimated
                href={!isEmail ? link.url : ""}
                className="group relative flex items-center overflow-hidden text-foreground-dimmed"
              >
                {link.name}
                {link.icon && (
                  <motion.span
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="invisible ml-1 hidden overflow-hidden transition-opacity duration-[250ms] ease-out lg:visible lg:flex lg:items-center lg:gap-2 lg:text-xs lg:leading-none lg:opacity-0 lg:group-hover:opacity-100"
                  >
                    <AnimatePresence mode="popLayout">
                      <motion.span
                        key={copied ? "copied" : "default"}
                        layout
                        initial={{ scale: 0.3, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.3, opacity: 0 }}
                        transition={{
                          type: "spring",
                          duration: 0.25,
                          bounce: 0.2,
                        }}
                      >
                        {link.icon && copied ? <Check size={14} /> : link.icon}
                      </motion.span>
                    </AnimatePresence>
                  </motion.span>
                )}
              </LinkAnimated>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
