import Link from "next/link";

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
      <div className="flex gap-4">
        <button className="button-blue">ACCEPT</button>
        <button className="button-white">Our Services</button>
        <button className="button-white">Our Projects</button>
      </div>
      <button className="button-login">Login</button>

      <div className="cookies items-end">
        <p>We use cookies in this website to give you the best experience on our site and show you relevant ads. To find out more, read our privacy policy rules.</p>
        <button className="button-blue">ACCEPT</button>
      </div>

      <span className="hero-title">
        Embrace <span className="hero-title-blue">SoftLion</span>
      </span>
      <div>
        <span className="hero-subtitle">
          Our company provides an individual approach for each client to turn
          your ideas into reality.
        </span>
      </div>
      <div>
        <span className="heading">Technologies</span>
      </div>
      <div className="technology-cards-container">
        <div className="technology-card"></div>
        <div className="technology-card"></div>
        <div className="technology-card"></div>
        <div className="technology-card"></div>
      </div>
    </div>
  );
};

export default Home;
