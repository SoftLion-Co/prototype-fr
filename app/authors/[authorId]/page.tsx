"use client";
import OurTeamSetcion from "@/app/sections/home_page/OurTeamSection";
import InfoNavigationComponent from "@/components/InfoNavigationComponent";
import AuthorBlogs from "@/app/sections/author_page/AuthorBlogs";
import AuthorSection from "@/app/sections/author_page/AuthorSection";
import { usePathname, redirect } from "next/navigation";
import { AuthorInterface } from "@/app/sections/author_page/AuthorInteface";
import authors from "@/data/blog/authors_data.json";
import useBlogsData from "@/hooks/useBlogsData";

const Author = () => {
  const id = usePathname().split("/").reverse()[0];
  const authorData: { [key: string]: AuthorInterface } = authors;
  const author = authorData[id];
  const blogData = useBlogsData();
  if (!author) {
    redirect(`/authors/${Object.keys(authorData)[0]}`);
  }
  const links = [
    { title: "Authors", href: "" },
    { title: author.name, href: "" },
  ];
  const blogs = blogData.filter((item) => item.authorId === id);

  return (
    <div>
      <InfoNavigationComponent links={links} />
      <AuthorSection
        name={author.name}
        imgSrc={author.imgSrc}
        occupation={author.occupation}
        description={author.generalInfo}
      />
      <AuthorBlogs articles={blogs}></AuthorBlogs>
      <OurTeamSetcion />
    </div>
  );
};

export default Author;
