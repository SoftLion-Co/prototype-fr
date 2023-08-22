"use client";
import OurTeamSetcion from "@/app/sections/home_page/OurTeamSection";
import InfoNavigationComponent from "@/components/InfoNavigationComponent";
import AuthorBlogs from "@/app/sections/author_page/AuthorBlogs";
import AuthorSection from "@/app/sections/author_page/AuthorSection";
import { usePathname, redirect } from "next/navigation";
import { BlogInterface } from "@/components/blog/BlogInteface";
import { AuthorInterface } from "@/app/sections/author_page/AuthorInteface";
import authors from "@/data/blog/authors_data.json";
import blogs from "@/data/blog/blogs_data.json";

const Author = () => {
  const id = usePathname().split("/").reverse()[0];
  const authorData: { [key: string]: AuthorInterface } = authors;
  const blogData: { [key: string]: BlogInterface } = blogs;
  const author = authorData[id];
  const links = [
    { title: "Authors", href: "" },
    { title: author.name, href: "" },
  ];
  const blogIds = Object.keys(blogData).filter(
    (key) => blogData[key].authorId === id
  );
  if (!author) {
    redirect(`/authors/${Object.keys(authorData)[0]}`);
  }

  return (
    <div>
      <InfoNavigationComponent links={links} />
      <AuthorSection
        name={author.name}
        imgSrc={author.imgSrc}
        occupation={author.occupation}
        description={author.generalInfo}
      />
      <AuthorBlogs articles={blogIds}></AuthorBlogs>
      <OurTeamSetcion />
    </div>
  );
};

export default Author;
