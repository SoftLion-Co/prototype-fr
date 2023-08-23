export interface BlogInterface {
    id: number;
    category?:string;
    title: string;
    authorId?: string;
    author: string;
    authorIconSrc: string;
    readingTime: string;
    text: string;
    imageSrc: string;
    tags: string[];
  }