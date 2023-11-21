import React, { useEffect, useState } from "react";
import s from "./BlogInfoComponent.module.scss";
import SearchInputComponent from "@/app/admin/components/SearchInputComponent";
import edit from "@/app/admin/images/control/edit.svg";
import bin from "@/app/admin/images/control/bin.svg";
import Image from "next/image";
import { SortMenuOption } from "../SortMenuComponent";
import { formatDate } from "../../utils/formatDate";
import { BlogData } from "../../dashboard/types";

interface Props {
  blogs: BlogData[];
  onEditButtonClick: (blog: BlogData | null) => void;
  onUpdateBlogs: () => void;
}

const BlogInfoComponent: React.FC<Props> = ({ blogs, onEditButtonClick, onUpdateBlogs }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setfilteredBlogs] = useState<BlogData[]>(blogs);

  useEffect(() => {
    setfilteredBlogs(blogs)
  }, [blogs])

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setfilteredBlogs(blogs.filter((blog) => blog.title.toLowerCase().includes(event.target.value.toLowerCase())));
  };

  const sortOptions: SortMenuOption[] = [
    {
      name: "Заголовок",
      action: () => {
        setfilteredBlogs(
          [...filteredBlogs].sort((blog1, blog2) => {
            return blog1.title.toLowerCase().localeCompare(blog2.title.toLowerCase());
          })
        );
      },
    },
    {
      name: "Рейтинг",
      action: () => {
        // setfilteredBlogs([...filteredBlogs].sort((blog1, blog2) => blog2.rating - blog1.rating));
      },
    },
    {
      name: "Дата",
      action: () => {
        setfilteredBlogs([...filteredBlogs].sort((blog1, blog2) => new Date(blog1.createdDateTime).getTime() - new Date(blog2.createdDateTime).getTime()));
      },
    },
  ];

  const sortOrderChange = () => {
    setfilteredBlogs([...filteredBlogs].reverse());
  };

  return (
    <div className={s.user}>
      <div className={s.user__search}>
        <SearchInputComponent
          placeholderText="Для пошуку за заголовком"
          searchTerm={searchTerm}
          handleSearch={handleSearch}
          onEditButtonClick={onEditButtonClick}
          sortOptions={sortOptions}
          sortOrderChange={sortOrderChange}
          onUpdate={onUpdateBlogs}
        />
      </div>
      <div className={s.list__container}>
        <ul className={s.user__list}>
          {filteredBlogs.map((blog, index) => (
            <li className={s.user__list__item} key={blog.id}>
              <div className={s.user__list__information}>
                <p>{index + 1}</p>
                <p>{blog.title}</p>
                <p>{formatDate(blog.createdDateTime)}</p>
                {/* <p>{blog.rating}</p> */}
              </div>
              <div className={s.user__list__buttons}>
                <button type="button" className={s.user__list__button}>
                  <Image className={s.user__list__button__image} src={edit} alt="Edit" width={16} height={16} onClick={() => onEditButtonClick(blog)} />
                </button>
                <button type="button" className={s.user__list__button}>
                  <Image className={s.user__list__button__image} src={bin} alt="Edit" width={16} height={16} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default BlogInfoComponent;
