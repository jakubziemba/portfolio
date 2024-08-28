import LinkAnimated from "./link-animated";

export default function AboutSection() {
  return (
    <div className="about-section text-pretty pt-10 leading-relaxed tracking-text text-foreground [perspective:400px]">
      <h1 className="font-medium">Jakub Ziemba</h1>
      <p>Frontend Developer based in Warsaw</p>
      <p className="pt-2 text-sm text-foreground-dimmed">
        <span className="text-foreground-dimmed">Previously:</span> Web
        Developer @{" "}
        <LinkAnimated href="https://www.monterail.com">Monterail</LinkAnimated>
      </p>
      <h2 className="pt-10 font-medium text-foreground-dimmed">About</h2>
      <p>
        I am an experienced web developer passionate about crafting beautiful
        and performant websites. I specialize in creating digital experiences
        that seamlessly blend functionality with aesthetics, always striving to
        deliver solutions that are emotionally engaging.
      </p>
    </div>
  );
}
