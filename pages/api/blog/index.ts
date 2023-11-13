import { NextApiResponse } from "next";
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

interface BlogImageBody {
  blogId: string;
  blogImage: string;
  paragraphImages: string[];
}

const path = join(__dirname, '../../../', 'static', 'blog-images.json');

export default async function POST(req: any, res: NextApiResponse, route: any) {
  try {
    const body: BlogImageBody = req.body;
    const blogs = await readBlogImages();
    const searchedBlogIndex = blogs.findIndex(blog => blog.blogId === body.blogId);

    if (searchedBlogIndex !== -1) {
      blogs.splice(searchedBlogIndex, 1, body);
    } else {
      blogs.push(body);
    }

    await writeFile(path, JSON.stringify(blogs), { encoding: 'utf8' });

    res.status(200).json({ blog: body });
  } catch (error) {
    res.status(500).json({ message: 'Error happend while saving blog data' });
    console.log('error', error);
  }
};

async function readBlogImages(): Promise<BlogImageBody[]> {
  try {
    const something = await readFile(path, { encoding: 'utf8' });

    return JSON.parse(something);
  } catch (e) {
    return [];
  }
}
