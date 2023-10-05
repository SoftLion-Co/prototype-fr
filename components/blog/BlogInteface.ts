export interface BlogInterface {
  id: string | number;
  category?: string;
  title: string;
  author?: string;
  authorIconSrc?: string;
  authorId: string;
  readingTime: string;
  publicationDate?: string;
  text: string;
  imageSrc: string;
  tags: string[];
}
