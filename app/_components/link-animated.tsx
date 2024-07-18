import Link from "next/link";
import { tw } from "@/utils/tailwind";

export default function LinkAnimated({
  children,
  href = "",
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={tw("group relative inline-block w-max", className)}
    >
      {children}
      <span
        className={tw(
          "absolute bottom-0 left-0 h-px w-full bg-foreground-dimmed transition-[width] duration-[600ms] ease-out lg:w-0 lg:group-hover:w-full",
        )}
      />
    </Link>
  );
}
