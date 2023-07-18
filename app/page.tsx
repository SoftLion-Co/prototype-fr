import Link from "next/link";
import OurServicesSection from "./sections/home_page/OurServicesSection";

const Home = () => {
  return (
    <div className="container">
      <h1>Home</h1>
      <OurServicesSection/>

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
