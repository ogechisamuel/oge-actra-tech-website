'use client';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { products } from '@/data/products';
import { LogoLink } from './Logo';

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[#050816]/80 backdrop-blur-2xl">
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5">
        <LogoLink />
        <div className="hidden items-center gap-7 lg:flex">
          <Link className="nav-link" href="/">Home</Link>
          <div className="group relative">
            <Link className="nav-link inline-flex items-center gap-1" href="/products">Products <ChevronDown size={14}/></Link>
            <div className="pointer-events-none invisible absolute left-0 top-9 w-72 translate-y-2 rounded-2xl border border-white/10 bg-[#071126]/95 p-2 opacity-0 shadow-2xl backdrop-blur-xl transition-all group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {products.map((p) => <Link key={p.slug} href={`/products/${p.slug}`} className="group/item block rounded-xl px-4 py-3 hover:bg-white/[0.06]"><span className="block font-semibold text-platinum">{p.name}</span><span className="mt-1 block text-xs text-silver">{p.category}</span></Link>)}
            </div>
          </div>
          {['Technology','Company','Careers','Contact'].map((item) => <Link key={item} className="nav-link" href={`/${item.toLowerCase()}`}>{item}</Link>)}
          <Link href="/products" className="btn-primary px-5 py-2.5 text-sm">Explore Products <span>→</span></Link>
        </div>
        <button className="focus-ring rounded-xl p-2 lg:hidden" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      </nav>
      {open && <div className="border-t border-white/10 bg-[#050816]/98 px-5 py-5 lg:hidden"><div className="mx-auto grid max-w-7xl gap-1"><Link onClick={()=>setOpen(false)} className="mobile-link" href="/">Home</Link><Link onClick={()=>setOpen(false)} className="mobile-link" href="/products">Products</Link><div className="grid gap-1 border-l border-cyan/20 pl-4">{products.map(p=><Link onClick={()=>setOpen(false)} key={p.slug} href={`/products/${p.slug}`} className="py-2 text-sm text-silver">{p.name}</Link>)}</div>{['Technology','Company','Careers','Contact'].map(item=><Link onClick={()=>setOpen(false)} key={item} className="mobile-link" href={`/${item.toLowerCase()}`}>{item}</Link>)}<Link onClick={()=>setOpen(false)} href="/products" className="btn-primary mt-3 text-center">Explore Products →</Link></div></div>}
    </header>
  );
}
