import Link from "next/link";
import SecuritySection from "./sections/service_page/SecuritySection";


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
      <SecuritySection/>
    </div>
  );
};

export default Home;
