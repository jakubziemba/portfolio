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
  { name: "Email", url: "mailto:ziemba.jak@gmail.com" },
  { name: "Instagram", url: "https://instagram.com/saintjcob.lab" },
];

export default function SocialList() {
  return (
    <div className="social-list pt-10">
      <h3 className="group relative flex w-max text-foreground-dimmed">
        Let&apos;s connect!
      </h3>
      <ul className="flex w-full flex-col gap-1 pt-4">
        {LINKS.map((link, index) => (
          <li
            key={link.name}
            className="relative flex w-max flex-nowrap gap-4 lg:gap-10"
          >
            <LinkAnimated
              href={link.url}
              className="group text-foreground-dimmed"
            >
              {link.name}
            </LinkAnimated>
          </li>
        ))}
      </ul>
    </div>
  );
}