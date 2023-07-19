import Link from "next/link";
import OurProjectsSection from "./sections/home_page/OurProjectsSection"

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/blogs">
        <h2>Blog</h2>
      </Link>
      <Link href="/projects">
        <h2>Projects</h2>
      </Link>
      <Link href="/services">
        <h2>Services</h2>
      </Link>
      <OurProjectsSection />
    </div>
  );
};

export default Home;
