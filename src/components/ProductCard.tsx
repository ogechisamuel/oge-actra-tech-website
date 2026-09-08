import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Product } from '@/data/products';
import { Reveal } from './motion';

export function ProductCard({ product, index = 0, featured = false }: { product: Product; index?: number; featured?: boolean }) {
  return (
    <Reveal delay={index * 0.06} className={featured ? 'lg:col-span-2' : ''}>
      <Link href={`/products/${product.slug}`} className={`group product-card product-${product.accent} ${featured ? 'product-featured' : ''}`}>
        <div className={`product-image-wrap ${featured ? 'lg:min-h-[300px]' : ''}`}>
          <Image src={product.image} alt={`${product.name} product visual`} fill sizes={featured ? '(max-width: 1024px) 100vw, 50vw' : '(max-width: 1024px) 100vw, 33vw'} className="product-image" />
          <div className="product-image-shade" />
          <div className="absolute left-5 top-5 flex items-center gap-2"><span className="status-pill">{product.status}</span></div>
          <span className="product-image-label">OGE-ACTRA TECH / PRODUCT</span>
        </div>
        <div className="product-card-body">
          <p className="eyebrow">{product.category}</p>
          <h3 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">{product.name}</h3>
          <p className={`mt-4 text-silver ${featured ? 'max-w-3xl text-lg leading-8' : 'leading-7'}`}>{product.description}</p>
          <div className="mt-7 flex flex-wrap gap-2">{product.features.slice(0, featured ? 7 : 5).map(f => <span key={f} className="feature-chip">{f}</span>)}</div>
          <span className="mt-8 inline-flex items-center gap-2 font-bold text-platinum transition group-hover:text-cyan">Explore {product.name} <ArrowUpRight size={17}/></span>
        </div>
      </Link>
    </Reveal>
  );
}
