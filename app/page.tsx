import Link from "next/link";

const Home = () => {
  return (
    <div>
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
      <div className="flex gap-4">
        <button className="button-blue">ACCEPT</button>
        <button className="button-white">Our Services</button>
        <button className="button-white">Our Projects</button>
      </div>
      <button className="button-login">Login</button>
      <div className="cookies">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint est quos eos eveniet quia voluptatem quis et vero dicta facilis.</div>
      <span className="hero-title">Embrace the Lion's Share Technological Advancements with <span className="hero-title-blue">SoftLion</span></span>
      <div>
              <span className="hero-subtitle">Our company provides an individual approach for each client to turn your ideas into reality.</span>

      </div>
    </div>
  );
};

export default Home;
