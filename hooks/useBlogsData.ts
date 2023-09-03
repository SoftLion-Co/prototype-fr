import { BlogInterface } from "@/components/blog/BlogInteface";
import blogService from "@/services/blog-service";

function useBlogsData() {
  const data: BlogInterface[] = [
    {
      id: 1,
      title: "Java Mastery Begins Now!",
      authorId: "PaulGraur",
      readingTime: "14 mins",
      imageSrc:
        "https://i.ibb.co/6vkcVDN/photo-2023-08-15-19-43-53-removebg-preview.png",
      tags: ["Education", "Java", "Development"],
      text: "Master Java with our Java Education program. From basics to advanced techniques, our experienced instructors will help you become a proficient Java programmer. Start your coding journey today!",
    },
    {
      id: 2,
      title: "Basic Design, Sales Boost!",
      authorId: "PaulGraur",
      readingTime: "10 mins",
      imageSrc:
        "https://i.ibb.co/6vkcVDN/photo-2023-08-15-19-43-53-removebg-preview.png",
      tags: ["React", "UI/UX", "Guides"],
      text: "Embrace the enduring advantages of basic design in e-commerce, courtesy of our skilled designers. With a timeless appeal, lightning-fast loading, a spotlight on your products, and adaptable simplicity, our design team ensures a seamless user experience that drives sales. Don't miss out – opt for basic design and unlock your e-commerce potential with us!",
    },
    {
      id: 3,
      title: "Finance-Tech Startup Insights",
      authorId: "PaulGraur",
      readingTime: "15 mins",
      imageSrc:
        "https://i.ibb.co/6vkcVDN/photo-2023-08-15-19-43-53-removebg-preview.png",
      tags: ["Finance", "Startups", "Technology"],
      text: "Explore the intersection of Finance, Startups, and Technology with our dynamic content. Stay informed about the latest trends, innovations, and strategies that drive success in the finance and startup world. From disruptive fintech solutions to the startup ecosystem's growth, our insights provide you with a competitive edge. Join us on this journey of finance and tech fusion for entrepreneurial excellence!",
    },
    {
      id: 4,
      title: "Finance-Tech Startup Insights",
      authorId: "PaulGraur",
      readingTime: "15 mins",
      imageSrc:
        "https://i.ibb.co/6vkcVDN/photo-2023-08-15-19-43-53-removebg-preview.png",
      tags: ["Finance", "Startups", "Technology"],
      text: "Explore the intersection of Finance, Startups, and Technology with our dynamic content. Stay informed about the latest trends, innovations, and strategies that drive success in the finance and startup world. From disruptive fintech solutions to the startup ecosystem's growth, our insights provide you with a competitive edge. Join us on this journey of finance and tech fusion for entrepreneurial excellence!",
    },
    {
      id: 5,
      title: "Finance-Tech Startup Insights",
      authorId: "PaulGraur",
      readingTime: "15 mins",
      imageSrc:
        "https://i.ibb.co/6vkcVDN/photo-2023-08-15-19-43-53-removebg-preview.png",
      tags: ["Finance", "Startups", "Technology"],
      text: "Explore the intersection of Finance, Startups, and Technology with our dynamic content. Stay informed about the latest trends, innovations, and strategies that drive success in the finance and startup world. From disruptive fintech solutions to the startup ecosystem's growth, our insights provide you with a competitive edge. Join us on this journey of finance and tech fusion for entrepreneurial excellence!",
    },
    {
      id: 6,
      title: "Finance-Tech Startup Insights",
      authorId: "PaulGraur",
      readingTime: "15 mins",
      imageSrc:
        "https://i.ibb.co/6vkcVDN/photo-2023-08-15-19-43-53-removebg-preview.png",
      tags: ["Finance", "Startups", "Technology"],
      text: "Explore the intersection of Finance, Startups, and Technology with our dynamic content. Stay informed about the latest trends, innovations, and strategies that drive success in the finance and startup world. From disruptive fintech solutions to the startup ecosystem's growth, our insights provide you with a competitive edge. Join us on this journey of finance and tech fusion for entrepreneurial excellence!",
    },
  ];

  return data;
}

export default useBlogsData;
