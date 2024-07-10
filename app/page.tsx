export default function Home() {
  return (
    <section className="mx-auto max-w-screen-sm px-4 lg:px-0">
      <div className="text-foreground flex flex-col gap-4 text-pretty pt-10">
        <h1 className="text-foreground-dimmed font-medium">Jakub Ziemba</h1>
        <p className="tracking-text pt-10">
          Frontend Developer based in Warsaw
        </p>
        <h2 className="text-foreground-dimmed pt-10 font-medium">About</h2>
        <p className="tracking-text">
          I&apos;m all about attention to detail, creating interfaces that flow
          naturally and add that extra touch of quality to make it feel right.
        </p>
        <p className="tracking-text">
          Currently, I&apos;m looking for my next role where I can continue to
          grow, push creative boundaries, and contribute to meaningful projects.
        </p>
        <p className="tracking-text pt-20">Let&apos;s connect!</p>
      </div>
    </section>
  );
}
