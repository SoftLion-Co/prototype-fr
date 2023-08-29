import s from "./page.module.scss";
import SearchInputComponent from "@/app/admin/components/blog/SearchInputComponent";

const Blogs = () => {
  const links = [{ title: "Blog", href: "#" }];

  return (
    <div>
      <h1>Admin dashboard</h1>
      <SearchInputComponent />
    </div>
  );
};

export default Blogs;

