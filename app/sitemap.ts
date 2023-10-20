import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://softlion.co',
      lastModified: new Date(),
    },
    {
      url: 'https://softlion.co/blog',
      lastModified: new Date(),
    },
    {
      url: 'https://softlion.co/services',
      lastModified: new Date(),
    },
  ]
}