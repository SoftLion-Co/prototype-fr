import ServiceSecurityCardComponent from "@/components/service/ServiceSecurityCardComponent";
import Link from "next/link";


const Home = () => {
  return (
    <div className="container">
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
      <ServiceSecurityCardComponent/>
    </div>
  );
};

export default Home;
