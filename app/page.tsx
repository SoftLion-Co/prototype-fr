import Link from "next/link";
import OurProjectsSection from "./sections/projects_page/OurProjectsSetcion";

const Home = () => {
  return (
    <div className="container">
      <h1>Home</h1>
      <OurProjectsSection/>

      <Link href="/blogs">
        <h2>Blog</h2>
      </Link>
      <Link href="/projects">
        <h2>Projects</h2>
      </Link>
      <Link href="/services">
        <h2>Services</h2>
      </Link>
    </div>
  );
};

export default Home;
