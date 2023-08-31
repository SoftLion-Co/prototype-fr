import { BlogInterface } from "@/components/blog/BlogInteface";

function useBlogsData() {
  const data:BlogInterface[] = [
    {
      id: 1,
      title: "Experience Through Adaptive Web Design",
      authorId: "PaulGraur",
      readingTime: "5 mins",
      imageSrc:
        "https://png.pngtree.com/png-vector/20190412/ourlarge/pngtree-website-design-illustration-concept-flat-design-concept-of-web-page-png-image_930169.jpg",
      tags: ["Adaptive Web Design", "AI", "Education", "Responsive Development"],
      text: "At our company, we prioritize user-centric design by implementing adaptive web development techniques. Our approach to adaptive responsive design ensures that our websites and applications seamlessly adjust to various screen sizes and devices, guaranteeing an optimal user experience. ",
    },
    {
      id: 2,
      title: "Crafting Digital Experiences",
      authorId: "PaulGraur",
      readingTime: "10 mins",
      imageSrc:
        "https://i.ibb.co/6vkcVDN/photo-2023-08-15-19-43-53-removebg-preview.png",
      tags: ["Digital Transformation", "Website Development"],
      text: "Our company specializes in translating visions into captivating online realities. With a meticulous blend of creativity and coding prowess, we embark on every website development journey to create user-centric platforms. From responsive layouts to intuitive navigation, our team synergizes design and functionality to ensure each website not only captivates but also converts visitors into loyal customers",
    },
    {
      id: 3,
      title: "Unveiling the Latest Technologies in Our Update",
      authorId: "PaulGraur",
      readingTime: "5 mins",
      imageSrc:
        "https://img.freepik.com/premium-vector/website-page-development-or-website-maintenance-illustration_112255-748.jpg",
      tags: [" Innovative Projects", "Mobile Apps", "Web Platforms,", "Industry Transformation"],
      text: "We are thrilled to introduce the newest features driven by cutting-edge technologies in our latest update. Experience the future with enhanced AI integrations that personalize user interactions, streamlined blockchain implementations ensuring data security, and accelerated performance through optimized cloud solutions. Embrace the power of these advancements as we continue to elevate your experience",
    },
    {
      id: 4,
      title: "Exploring Our Latest Upcoming Projects",
      authorId: "PaulGraur",
      readingTime: "10 mins",
      imageSrc:
        "https://www.pomstandard.com/wp-content/uploads/sites/4/2019/10/como-intergrar-ilustraciones-en-web.jpg",
      tags: ["Digital Transformation", "Website Development"],
      text: "Dive into a realm of innovation as we unveil our exciting array of upcoming projects. From groundbreaking mobile apps that simplify daily life to immersive web platforms redefining user engagement, our team is dedicated to pushing boundaries and reshaping industries. Stay tuned for an electrifying journey that showcases our commitment to excellence and transformative solutions",
    },
    {
      id: 5,
      title: "Advancing Technology in Our IT Company",
      authorId: "PaulGraur",
      readingTime: "5 mins",
      imageSrc:
        "https://img.freepik.com/vector-gratis/ilustracion-concepto-disenador-sitio-web_114360-4396.jpg",
      tags: ["Latest Technologies", "AI Integration"],
      text: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit 5",
    },
    {
      id: 6,
      title: "Exploring Our Latest Upcoming Projects",
      authorId: "PaulGraur",
      readingTime: "10 mins",
      imageSrc:
        "https://img.freepik.com/vector-gratis/ilustracion-concepto-seleccion-activos_114360-4409.jpg",
      tags: ["Tag1", "Medium tag", "Looooong tag", "Tag2"],
      text: "Dive into a realm of innovation as we unveil our exciting array of upcoming projects. From groundbreaking mobile apps that simplify daily life to immersive web platforms redefining user engagement, our team is dedicated to pushing boundaries and reshaping industries. Stay tuned for an electrifying journey that showcases our commitment to excellence and transformative solutions",
    },
    {
      id: 7,
      title: "Fueling Innovation in Our IT Company",
      authorId: "PaulGraur",
      readingTime: "10 mins",
      imageSrc:
        "https://img.freepik.com/free-vector/postponed-concept-in-flat-design_52683-36263.jpg",
      tags: [" Technology Innovation", "Industry Leadership", "IT Solutions"],
      text: "Embracing the forefront of technological evolution, our IT company continually fosters innovation through cutting-edge solutions and advanced systems. With a relentless commitment to progress, we drive excellence by integrating emerging technologies to elevate user experiences and redefine industry standards",
    },{
      id: 8,
      title: "Introducing Our New React Courses",
      authorId: "PaulGraur",
      readingTime: "12 mins",
      imageSrc:
        "https://img.freepik.com/premium-vector/business-finance-man-work-on-laptop-computer-hour-employee-character-flat-design-style-illustration_90661-872.jpg?w=2000",
      tags: ["React Courses", "Frontend Development", "Web Application"],
      text: "Step into the world of cutting-edge frontend development with our latest React courses. Designed for both beginners and experienced developers, our comprehensive curriculum covers everything from React fundamentals to advanced state management and API integration",
    },{
    id: 9,
    title: "Advancing Technology in Our IT Company",
    authorId: "PaulGraur",
    readingTime: "12 mins",
    imageSrc:
      "https://img.freepik.com/premium-vector/customer-service-call-center-woman-hotline-operator-in-headset-consults-client-online-support_501813-2065.jpg?w=2000",
    tags: ["Technology", "History", "Angular", ".NET"],
    text: "At our IT company, we are propelling innovation forward through relentless technological advancement. With a steadfast commitment to research and development, we are shaping the future by integrating cutting-edge solutions into our operations. Our team's dedication to staying at the forefront of technology empowers us to deliver state-of-the-art products and services, setting new industry standards",
  },
  ];

  return data;
}

export default useBlogsData;
