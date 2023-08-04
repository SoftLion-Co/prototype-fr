import s from "./page.module.scss";
import OurTeamSetcion from "../sections/home_page/OurTeamSetcion";
import Link from "next/link";
import InfoNavigationComponent from "@/components/InfoNavigationComponent";

const Blogs = () => {
  const links = [{ title: "Blog", href: "#" }];

  return (
    <div>
      <InfoNavigationComponent links={links} />
      <Link href="/blogs/1">1</Link>
      <h1>Blogs</h1>
      <OurTeamSetcion/>
    </div>
  );
};

export default Blogs;
