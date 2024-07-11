import LinkAnimated from "./link-animated";

export default function AboutSection() {
  return (
    <div className="about-section flex flex-col gap-4 text-pretty pt-10 tracking-text text-foreground [perspective:400px]">
      <h1
        className="font-medium text-foreground-dimmed"
        style={{ "--stagger": 0 } as React.CSSProperties}
      >
        Jakub Ziemba
      </h1>
      <p className="pt-10" style={{ "--stagger": 1 } as React.CSSProperties}>
        Frontend Developer based in Warsaw
      </p>
      <p style={{ "--stagger": 2 } as React.CSSProperties}>
        <span className="text-foreground-dimmed">Previously:</span> Web
        Developer @{" "}
        <LinkAnimated href="https://www.monterail.com">Monterail</LinkAnimated>
      </p>
      <h2
        className="pt-10 font-medium text-foreground-dimmed"
        style={{ "--stagger": 3 } as React.CSSProperties}
      >
        About
      </h2>
      <p style={{ "--stagger": 4 } as React.CSSProperties}>
        I&apos;m all about attention to detail, creating interfaces that flow
        naturally and add that extra touch of quality to make it feel right.
      </p>
      <p style={{ "--stagger": 5 } as React.CSSProperties}>
        Currently, I&apos;m looking for my next role where I can continue to
        grow, push creative boundaries, and contribute to meaningful projects.
      </p>
    </div>
  );
}
