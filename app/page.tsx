import HomeBlog from "@/components/blog/HomeBlog";
import Link from "next/link";

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
      <HomeBlog></HomeBlog>
    </div>
  );
};

export default Home;
