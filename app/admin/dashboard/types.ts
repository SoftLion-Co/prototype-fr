export interface ClientData {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  projects: any[];
  createdDateTime: string;
  updatedDateTime: string;
}

export interface ContactData {
  id: string;
  numberPhone: string;
  email: string;
  shortDescription: string;
  createdDateTime: string;
  orderType?: boolean;
}

export interface BlogData {
  svg: BlogSvg;
  pictures: BlogPicture[];
  paragraphs: BlogParagraph[];
  author: BlogAuthor;
  readingTime: string;
  title: string;
  description: string;
  viewers: number;
  id: string;
  createdDateTime: string;
  updatedDateTime: string;
}

interface BlogSvg {
  url: string;
  blogId: string;
  id: string;
  createdDateTime: string;
  updatedDateTime: string;
}

interface BlogPicture extends BlogSvg {
  projectId: string;
}

interface BlogParagraph {
  title: string;
  description: string;
  blogId: string;
  projectId: string;
  id: string;
  createdDateTime: string;
  updatedDateTime: string;
}

export interface BlogAuthor {
  fullname: string;
  employment: string;
  avatar: string;
  linkedIn: string;
  description: string;
  id: string;
  createdDateTime: string;
  updatedDateTime: string;
}

export interface Service {
  title: string;
  description: string;
  id: string;
  createdDateTime: string;
  updatedDateTime: string;
}