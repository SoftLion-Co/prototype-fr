import s from "./page.module.scss";
import ResultSection from "@/app/sections/project_page/ResultSection";
import RequestSection from "@/app/sections/project_page/RequestSection";
import ProjectDescriptionSection from "@/app/sections/project_page/ProjectDescriptionSection";
import SolutionSection from "@/app/sections/project_page/SolutionSection";
import BlogSection from "@/app/sections/home_page/BlogSection";
import ProjectContactUs from "@/app/sections/project_page/ProjectContactUs";
import InfoNavigationComponent from "@/components/InfoNavigationComponent";

const response = {
  ProjectDescriptionSection: {
    title: "Travel company MOVE",
    description:
      "Move is a company specializing in providing tourist services in Norway. Our goal is to provide unforgettable adventures and experiences for our clients in this enchanting Scandinavian country.",
    time: "3 month",
    year: 2023,
    location: "Europe",
    imgSrc: "https://i.ibb.co/CwYTtPR/photo-2023-08-07-14-08-48.jpg",
  },
  RequestSection: {
    paragraph:
      "Properly formulating a request plays a crucial role in the project development process. It is a key step that allows us to understand your needs, requirements, and expectations. When you provide detailed descriptions of your goals and desired outcomes, it provides us with the necessary information for successful website or application development",
    arrays: [
      {
        id: 1,
        text: "Mobile compatibility for correct display on different devices",
      },
      {
        id: 2,
        text: "Analytics and tracking to collect data about visits and user behavior.",
      },
      {
        id: 3,
        text: "A convenient online booking system for services that require a reservation.",
      },
      {
        id: 4,
        text: "Support and after-sales service for reliable cooperation.",
      },
      {
        id: 5,
        text: "Fast page loading to ensure visitor satisfaction.",
      },
    ],
  },
  SolutionSection: {
    paragraphs: [
      {
        title: "",
        description:
          "Upon receiving your request, we proceed to review and analyze all the details. Our experts study your requirements and expectations, conducting additional research if necessary, to ensure successful project implementation.",
      },
      {
        title: "Analytics and Tracking",
        description:
          "Integrated robust analytics and tracking tools, such as Google Analytics, to collect valuable data on website visits, user behavior, and conversions. Utilized this data to gain insights into user preferences, measure the effectiveness of marketing strategies, and make data-driven decisions for further improvements.",
      },
      {
        title: "Fast Page Loading",
        description:
          "Implemented various optimization techniques to enhance page loading speed and performance. This included optimizing image sizes, minimizing file sizes, leveraging caching mechanisms, and utilizing content delivery networks (CDNs) to deliver content efficiently. As a result, visitors experience fast and responsive page loading, ensuring a positive user experience.",
      },
      {
        title: "Support and After-Sales Service",
        description:
          "Established a reliable support system to address customer inquiries, concerns, and provide assistance throughout the customer journey. Implemented live chat support, email ticketing systems, and a dedicated customer support team to ensure prompt and efficient resolution of customer issues, fostering reliable cooperation and customer satisfaction. ",
      },
    ],
    images: [
      {
        imageSrc: "https://i.ibb.co/Pz2QWmc/main-page-2.png",
        class: "photo_discover",
      },
      {
        imageSrc: "https://i.ibb.co/bHFC4n7/image-21.png",
        class: "photo_about",
      },
      {
        imageSrc: "https://i.ibb.co/19t1wHh/image-2.png",
        class: "photo_trevel",
      },
    ],
  },
  ResultSection: [
    "Attractive and modern design: We have developed an aesthetically appealing design that reflects the unique style of your company and captures the attention of visitors. The website has a clean and organized layout that ensures easy navigation and user-friendliness.",

    "SEO optimization: We have taken into account search engine optimization (SEO) principles during the website development process.",

    "Our website is fully responsive and compatible with various devices such as smartphones and tablets. Your customers will have access to information and booking capabilities from any device, ensuring convenience and accessibility.",
  ],
};

const links = [
  { title: "Projects", href: "/projects" },
  { title: response.ProjectDescriptionSection.title, href: "#" },
];

const Project = () => {
  return (
    <div>
      <InfoNavigationComponent links={links} />
      <div className={s.page}>
        <ProjectDescriptionSection data={response.ProjectDescriptionSection} />
        <RequestSection data={response.RequestSection} />
        <SolutionSection data={response.SolutionSection} />
        <ResultSection data={response.ResultSection} />
        <BlogSection />
        <ProjectContactUs />
      </div>
    </div>
  );
};

export default Project;
