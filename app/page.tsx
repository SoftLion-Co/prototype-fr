import Link from "next/link";
import AppealingSection from "./sections/article_page/AppealingSection";

const Home = () => {
  return (
    <div className="container">
      <h1 className="flexCenter">Home</h1>
      <Link href="/blogs">
        <h2>Blog</h2>
      </Link>
      <Link href="/projects">
        <h2>Projects</h2>
      </Link>
      <Link href="/services">
        <h2>Services</h2>
      </Link>
      <div className="my-component">
        dsfdsfsd
      </div>
      <AppealingSection />
    </div>
  );
};

export default Home;
