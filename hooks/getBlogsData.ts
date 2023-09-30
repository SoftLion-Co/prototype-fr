import { BlogInterface } from "@/components/blog/BlogInteface";
import blogService from "@/services/blog-service";

function useBlogsData() {
  const data: BlogInterface[] = [
    {
      id: 1,
      title: "The Role of Backend Development",
      category: "Technology",
      authorId: "PaulGraur",
      readingTime: "12 mins",
      imageSrc:
        "https://raw.githubusercontent.com/SoftLion-Co/prototype-fr/6f455534d40b7b0c38e42947a0ef27d7841c8761/images/blog/1-the-role-of-backend-development/example-scene-1.svg",
      tags: ["Technology", "Node.js"],
      text: "Explore essential backend development in this guide. Learn programming languages, frameworks, data management, testing, security, scalability, and deployment. Lay a solid foundation for efficient, resilient applications.",
    },
    {
      id: 2,
      title: "Basic Design, Sales Boost!",
      category: "UI/UX",
      authorId: "PaulGraur",
      readingTime: "10 mins",
      imageSrc:
        "https://raw.githubusercontent.com/SoftLion-Co/prototype-fr/6f455534d40b7b0c38e42947a0ef27d7841c8761/images/blog/2-basic-design-sales-boost/drawkit-grape-pack-illustration-11.svg",
      tags: ["UI/UX", "Guides"],
      text: "Explore the impact of simple, functional design in e-commerce. Learn how it enhances user experience, loading speed, and product visibility. Timeless and clean designs, advocated by our seasoned designers, prioritize products, engage customers, and drive sales in the competitive e-commerce landscape.",
    },
    {
      id: 3,
      title: "Enhancing E-commerce",
      category: "E-commerce",
      authorId: "PaulGraur",
      readingTime: "14 mins",
      imageSrc:
        "https://i.ibb.co/6vkcVDN/photo-2023-08-15-19-43-53-removebg-preview.png",
      tags: ["E-commerce", "Guides", "React"],
      text: "Explore front-end tech: TypeScript, Next.js, and React, transforming e-commerce. Uncover how they boost code quality, accelerate rendering, and craft interactive UIs, staying competitive in e-commerce with user-friendly platforms.",
    },
    {
      id: 4,
      title: "SoftLion — Your Shopify Development Company",
      category: "Finance",
      authorId: "PaulGraur",
      readingTime: "12 mins",
      imageSrc:
        "https://i.ibb.co/6vkcVDN/photo-2023-08-15-19-43-53-removebg-preview.png",
      tags: ["Finance", "E-commerce", "Technology"],
      text: "Meet SoftLion, experts in Shopify development for businesses of all sizes. Learn why Shopify is a top choice for ecommerce and explore our wide range of services, from development to 24/7 customer support.",
    },
    {
      id: 5,
      title: "Unveiling the Power of Progressive Web Apps",
      category: "Technology",
      authorId: "PaulGraur",
      readingTime: "11 mins",
      imageSrc:
        "https://i.ibb.co/6vkcVDN/photo-2023-08-15-19-43-53-removebg-preview.png",
      tags: ["Technology", "Development", "Guides"],
      text: "Discover Progressive Web Apps (PWAs) and their app-like experiences. Learn principles, tech insights, and building steps. Optimize performance and enhance discoverability. Unleash PWA potential for a digital revolution",
    },
    {
      id: 6,
      title: "Mastering Web Development",
      category: "Technology",
      authorId: "PaulGraur",
      readingTime: "13 mins",
      imageSrc:
        "https://i.ibb.co/6vkcVDN/photo-2023-08-15-19-43-53-removebg-preview.png",
      tags: ["Technology", "Development", "UI/UX"],
      text: "Unlock the potential of frontend web development with insights into Bootstrap, Material-UI, and Tailwind CSS. This guide demystifies these frameworks, empowering you to craft captivating web experiences seamlessly.",
    },
  ];

  return data;
}

export default useBlogsData;
