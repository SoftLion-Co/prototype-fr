import Link from "next/link";
import CustomAppsSection from "./sections/service_page/CustomAppsSection";
import TitleServicesComponent from "@/components/services/TitleServicesComponent";
import ServiceCardsComponent from "@/components/services/ServiceCardsComponent";

const Home = () => {
  return (
    <div className="container">
      <h1>Home</h1>
      <TitleServicesComponent num="02" text ="Custum Apps"/>
      <ServiceCardsComponent arrow={true}/>
      {/* <CustomAppsSection /> */}
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
