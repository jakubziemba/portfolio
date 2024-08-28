import AboutSection from "./_components/about-section";
import RecentWork from "./_components/recent-work";
import SocialList from "./_components/social-list";

export default function Home() {
  return (
    <section className="mx-auto max-w-screen-sm px-4 lg:px-0">
      <AboutSection />
      <RecentWork />
      <SocialList />
    </section>
  );
}
