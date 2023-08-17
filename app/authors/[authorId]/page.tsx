"use client";
import OurTeamSetcion from "@/app/sections/home_page/OurTeamSection";
import InfoNavigationComponent from "@/components/InfoNavigationComponent";
import AuthorPage from "@/components/author/AuthorPage";
import { usePathname, redirect } from "next/navigation";

const Author = () => {
  const id = usePathname().split("/").reverse()[0];
  const links = [
    { title: "Authors", href: "authors" },
    { title: id, href: "" },
  ];

  const authorData: {
    [key: string]: {
      name: string;
      imgSrc: string;
      occupation: string;
      description: string;
    };
  } = {
    Author1: {
      name: "Author 1",
      imgSrc: "",
      occupation: "Area of work 1",
      description:
        "Description for Author 1 There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    },
    Author2: {
      name: "Author 2",
      imgSrc: "",
      occupation: "Area of work 2",
      description:
        "Description for Author 2 There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    },
    Author3: {
      name: "Author 3",
      imgSrc: "",
      occupation: "Area of work 3",
      description:
        "Description for Author 3 There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    },
    Author4: {
      name: "Author 4",
      imgSrc: "",
      occupation: "Area of work 4",
      description:
        "Description for Author 4 There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    },
    Author5: {
      name: "Author 5",
      imgSrc: "",
      occupation: "Area of work 5",
      description:
        "Description for Author 5 There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    },
    Author6: {
      name: "Author 6",
      imgSrc: "",
      occupation: "Area of work 6",
      description:
        "Description for Author 6 There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    },
    Author7: {
      name: "Author 7",
      imgSrc: "",
      occupation: "Area of work 7",
      description:
        "Description for Author 7 There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    },
  };

  const data = authorData[id];

  if (!data) {
    redirect(`/authors/${Object.keys(authorData)[0]}`);
  }

  return (
    <div>
      <InfoNavigationComponent links={links} />
      <AuthorPage
        name={data.name}
        imgSrc={data.imgSrc}
        occupation={data.occupation}
        description={data.description}
      />
      <OurTeamSetcion />
    </div>
  );
};

export default Author;
