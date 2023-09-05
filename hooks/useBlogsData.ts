import { BlogInterface } from "@/components/blog/BlogInteface";
import blogService from "@/services/blog-service";

function useBlogsData() {
  //const data : BlogInterface[] = await blogService.getAllBlogs();
  const data: BlogInterface[] = [
    {
      id: 1,
      title: "How to delegate work correctly 1",
      category: "Guides",
      authorId: "PaulGraur",
      readingTime: "5 mins",
      imageSrc:
        "https://i.ibb.co/6vkcVDN/photo-2023-08-15-19-43-53-removebg-preview.png",
      tags: ["Tag1", "AI", "Education", "Development"],
      text: "Sed ut perspiciatis, unde ossssssssssss sssssssssssssss ssssssssssss  ssssssssmnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit 1",
    },
    {
      id: 2,
      title: "How to delegate work correctly 2",
      category: "Technology",
      authorId: "PaulGraur",
      readingTime: "10 mins",
      imageSrc:
        "https://i.ibb.co/6vkcVDN/photo-2023-08-15-19-43-53-removebg-preview.png",
      tags: ["Tag1", "Medium tag", "Looooong tag", "Tag2"],
      text: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit 2",
    },
    {
      id: 3,
      title: "How to delegate work correctly 3",
      category: "UI/UX",
      authorId: "PaulGraur",
      readingTime: "5 mins",
      imageSrc:
        "https://i.ibb.co/6vkcVDN/photo-2023-08-15-19-43-53-removebg-preview.png",
      tags: ["Tag1", "Medium tag", "Looooong tag", "Tag2"],
      text: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit 3",
    },
    {
      id: 4,
      title: "How to delegate work correctly 4",
      category: "E-learning",
      authorId: "PaulGraur",
      readingTime: "10 mins",
      imageSrc:
        "https://i.ibb.co/6vkcVDN/photo-2023-08-15-19-43-53-removebg-preview.png",
      tags: ["Tag1", "Medium tag", "Looooong tag", "Tag2"],
      text: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit 4",
    },
    {
      id: 5,
      title: "How to delegate work correctly 5",
      category: "Finance",
      authorId: "PaulGraur",
      readingTime: "5 mins",
      imageSrc:
        "https://i.ibb.co/6vkcVDN/photo-2023-08-15-19-43-53-removebg-preview.png",
      tags: ["Tag1", "Medium tag", "Looooong tag", "Tag2"],
      text: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit 5",
    },
    {
      id: 6,
      title: "How to delegate work correctly 6",
      category: "Startups",
      authorId: "PaulGraur",
      readingTime: "10 mins",
      imageSrc:
        "https://i.ibb.co/6vkcVDN/photo-2023-08-15-19-43-53-removebg-preview.png",
      tags: ["Tag1", "Medium tag", "Looooong tag", "Tag2"],
      text: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit 6",
    },
    {
      id: 7,
      title: "How to delegate work correctly 7",
      category: "Technology",
      authorId: "PaulGraur",
      readingTime: "10 mins",
      imageSrc:
        "https://i.ibb.co/6vkcVDN/photo-2023-08-15-19-43-53-removebg-preview.png",
      tags: ["Tag1", "Medium tag", "Looooong tag", "Tag2"],
      text: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit 7",
    },{
      id: 8,
      title: "How to delegate work correctly 8",
      category: "Technology",
      authorId: "PaulGraur",
      readingTime: "12 mins",
      imageSrc:
        "https://i.ibb.co/6vkcVDN/photo-2023-08-15-19-43-53-removebg-preview.png",
      tags: ["Tag1", "Medium tag", "Lodwoooong tag", "Tag2"],
      text: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit 7",
    },{
    id: 9,
    title: "How to delegate work correctly 9",
    category: "Technology",
    authorId: "PaulGraur",
    readingTime: "12 mins",
    imageSrc:
      "https://i.ibb.co/6vkcVDN/photo-2023-08-15-19-43-53-removebg-preview.png",
    tags: ["Tag1", "Medium tag", "Lodwoooong tag", "Tag2"],
    text: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit 7",
  },
  ];

  return data;
}

export default useBlogsData;
