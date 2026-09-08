import type { MetadataRoute } from 'next';
import { products } from '@/data/products';
export default function sitemap(): MetadataRoute.Sitemap { const base=process.env.NEXT_PUBLIC_SITE_URL || 'https://oge-actra-tech.example'; const pages=['','products','technology','company','careers','contact'].map(path=>({url:`${base}/${path}`,changeFrequency:'monthly' as const,priority:path===''?1:.7})); return [...pages,...products.map(p=>({url:`${base}/products/${p.slug}`,changeFrequency:'monthly' as const,priority:.65}))]; }
