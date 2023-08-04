import Link from "next/link";
import InfoNavigationComponent from "@/components/InfoNavigationComponent";

const Blogs = () => {
  const links = [
    { title: "Blog", href: "#" },
  ];

  return (
    <div>
      <InfoNavigationComponent links={links} />
      <Link href="/blogs/1">1</Link>
      <h1>Blogs</h1>
    </div>
  );
};

export default Blogs;
