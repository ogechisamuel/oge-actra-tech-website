'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { products } from '@/data/products';
import { Reveal } from './motion';

export function Ecosystem() {
  const [active, setActive] = useState('actra-ai');
  const current = products.find(p => p.slug === active) ?? products[0];

  return <section className="section-pad pt-6">
    <div className="mx-auto max-w-7xl">
      <Reveal>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div><p className="eyebrow">Technology portfolio</p><h2 className="section-title mt-3">One technology company.<br/><span className="gradient-text">Multiple digital frontiers.</span></h2></div>
          <p className="section-copy mt-0 max-w-xl lg:pb-1">Four distinct products, connected by one engineering foundation. Explore the portfolio and see how each product occupies its own digital frontier.</p>
        </div>
      </Reveal>
      <Reveal delay={.08} className="mt-14">
        <div className="ecosystem-shell">
          <div className="ecosystem-topline"><span>OGE-ACTRA TECH / PRODUCT ECOSYSTEM</span><span className="hidden sm:inline">INTERCONNECTED BY DESIGN</span></div>
          <div className="ecosystem-lines" aria-hidden="true"><i/><i/><i/><i/></div>
          <div className="ecosystem-core"><span className="core-orbit"/><div className="core-dot"><span>O-A</span></div><p>OGE-ACTRA<br/><span>TECH</span></p></div>
          {products.map((p, i) => <button key={p.slug} onMouseEnter={()=>setActive(p.slug)} onFocus={()=>setActive(p.slug)} onClick={()=>setActive(p.slug)} className={`eco-node node-${i} ${active===p.slug?'active':''}`} aria-label={`Show ${p.name}`}><span className="eco-node-dot"/><span>{p.name}</span><small>{p.eyebrow}</small></button>)}
          <div className="eco-detail">
            <div className="eco-detail-image"><Image src={current.image} alt={`${current.name} product visual`} fill sizes="(max-width: 767px) 100vw, 280px" className="object-cover"/><div className="eco-detail-image-shade"/><span>{current.category}</span></div>
            <div className="eco-detail-copy"><div className="flex items-center justify-between gap-3"><p className="text-xs font-bold uppercase tracking-[.22em] text-cyan">{current.status}</p><span className="eco-detail-index">0{products.findIndex(p => p.slug === current.slug) + 1} / 04</span></div><h3>{current.name}</h3><p>{current.description}</p><Link href={`/products/${current.slug}`} className="inline-flex items-center gap-2 font-bold text-platinum hover:text-cyan">Explore product <ArrowUpRight size={17}/></Link></div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>;
}
