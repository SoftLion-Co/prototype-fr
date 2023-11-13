import { NextApiResponse } from "next";
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

interface BlogImageBody {
  blogId: string;
  blogImage: string;
  paragraphImages: string[];
}

const path = join(__dirname, '../../../../', 'static', 'blog-images.json');

export default async function GET(req: any, res: NextApiResponse) {
    try {
        const paths = req.url.split('/');
        const id = paths[paths.length - 1];
        const blogs = await readBlogImages();
        const searchedBlogIndex = blogs.findIndex(blog => blog.blogId === id);
    
        if (searchedBlogIndex !== -1) {
          res.status(200).json({ blog: blogs[searchedBlogIndex] });
        } else {
          res.status(400).json({ message: `Blog with id: ${id} was not fount` });
        }
      } catch (error) {
        res.status(500).json({ message: 'Error happend while reading blog data' });
        console.log('error', error);
      }
};

async function readBlogImages(): Promise<BlogImageBody[]> {
  try {
    const blogs = await readFile(path, { encoding: 'utf8' });

    return JSON.parse(blogs);
  } catch (e) {
    return [];
  }
}
