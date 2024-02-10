import React from "react";
import s from "./page.module.scss";
import ResultSection from "@/app/sections/project_page/ResultSection";
import RequestSection from "@/app/sections/project_page/RequestSection";
import ProjectDescriptionSection from "@/app/sections/project_page/ProjectDescriptionSection";
import SolutionSection from "@/app/sections/project_page/SolutionSection";
import BlogSection from "@/app/sections/home_page/BlogSection";
import ProjectContactUs from "@/app/sections/project_page/ProjectContactUs";
import InfoNavigationComponent from "@/components/InfoNavigationComponent";

import useGoogleAnalytics from "@/hooks/useGoogleAnalytics";

const response = {
  ProjectDescriptionSection: {
    title: "Trend",
    description:
      "Trend is a contemporary sports goods marketplace, designed to offer a convenient and exciting shopping experience. We've created this online store to consolidate a wide range of sporting goods and provide a straightforward, efficient way to shop for renowned sports brands.",
    time: "5 month",
    year: 2023,
    location: "Europe",
    imgSrc:
      "https://github.com/SoftLion-Co/prototype-fr/blob/test/images/project/project-trend/trend-hero.png?raw=true",
  },
  RequestSection: {
    paragraph:
      "Properly formulating a request plays a crucial role in the project development process. It is a key step that allows us to understand your needs, requirements, and expectations. When you provide detailed descriptions of your goals and desired outcomes, it provides us with the necessary information for successful website or application development",
    arrays: [
      {
        id: 1,
        text: "Inconsistent mobile display, causing inconvenience for users accessing the website from different devices.",
      },
      {
        id: 2,
        text: "Lack of insights into user behavior and site performance due to the absence of analytics and tracking tools.",
      },
      {
        id: 3,
        text: "Difficulty in booking services that require reservations, leading to a loss of potential revenue.",
      },
      {
        id: 4,
        text: "Limited customer support and after-sales service, resulting in dissatisfaction and reduced customer loyalty.",
      },
    ],
  },
  SolutionSection: {
    paragraphs: [
      {
        title: "Mobile Compatibility",
        description:
          "To address mobile display issues, we have implemented responsive design practices. This ensures that our website adapts seamlessly to various devices, providing a consistent and user-friendly experience for all visitors.",
      },
      {
        title: "Analytics and Tracking",
        description:
          "We have integrated robust analytics and tracking tools, such as Google Analytics, to gather valuable insights into user behavior, website visits, and conversions. This data-driven approach enables us to make informed decisions for further website improvements and marketing strategies.",
      },
      {
        title: "Convenient Online Booking System",
        description:
          "To simplify the booking process for services requiring reservations, we have developed a user-friendly online booking system. Customers can easily schedule appointments and reserve services with just a few clicks, enhancing their overall shopping experience.",
      },
      {
        title: "Support and After-Sales Service",
        description:
          "We've established a dedicated customer support system that includes live chat support, email ticketing systems, and a responsive customer support team. This ensures quick and efficient resolution of customer inquiries and concerns, fostering reliable cooperation and increasing customer satisfaction.",
      },
    ],
    images: [
      {
        imageSrc:
          "https://github.com/SoftLion-Co/prototype-fr/blob/test/images/project/project-trend/trend-hero(light).png?raw=true",
      },
      {
        imageSrc:
          "https://github.com/SoftLion-Co/prototype-fr/blob/test/images/project/project-trend/trend-basket.png?raw=true",
      },
      {
        imageSrc:
          "https://github.com/SoftLion-Co/prototype-fr/blob/test/images/project/project-trend/trend-delivery.png?raw=true",
      },
    ],
  },
  ResultSection: [
    "Users now experience a consistent and user-friendly shopping experience across various devices, increasing accessibility and satisfaction. Valuable insights from analytics and tracking tools enable data-driven decision-making, leading to better marketing strategies and website enhancements.",

    "The convenient online booking system has streamlined the reservation process, contributing to increased revenue and customer satisfaction. Our dedicated customer support system has fostered reliable cooperation and higher customer satisfaction.",

    "Fast page loading times ensure a more enjoyable and efficient browsing experience for our users, enhancing overall website performance. We're also enhancing our SEO optimization practices to boost the visibility of our marketplace in search engines and generate more organic traffic.",
  ],
};

const links = [
  { title: "Projects", href: "/projects" },
  { title: response.ProjectDescriptionSection.title, href: "#" },
];

const Project = () => {
  useGoogleAnalytics();

  const metadata = {
    title: response.ProjectDescriptionSection.title,
  };

  return (
    <React.Fragment>
      <head>
        <title>{metadata.title}</title>
      </head>

      <InfoNavigationComponent links={links} />
      <div className={s.page}>
        <ProjectDescriptionSection data={response.ProjectDescriptionSection} />
        <RequestSection data={response.RequestSection} />
        <SolutionSection data={response.SolutionSection} />
        <ResultSection data={response.ResultSection} />
        <BlogSection />
        <ProjectContactUs />
      </div>
    </React.Fragment>
  );
};

export default Project;
