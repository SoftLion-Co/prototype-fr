import Link from 'next/link';

import { LargeServiceCardComponent } from '../components/services/LargeServiceCardComponent';
import cardComponent from './../data/LargeServiceCardComponent.json';

const Home = () => {
  return (
    <div className="container">
      <h1>Home</h1>

      <LargeServiceCardComponent cardComponent={cardComponent}/>

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
