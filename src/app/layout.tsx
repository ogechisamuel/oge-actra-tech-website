import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { site } from '@/lib/site';
const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
export const metadata: Metadata = { metadataBase: new URL(site.url), title: { default: 'OGE-ACTRA TECH | AI, Software Engineering & Digital Platforms', template: '%s | OGE-ACTRA TECH' }, description: site.description, openGraph: { title: 'OGE-ACTRA TECH | AI, Software Engineering & Digital Platforms', description: site.description, type: 'website', siteName: site.name }, twitter: { card: 'summary_large_image', title: site.name, description: site.description }, robots: { index: true, follow: true } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${geist.variable} tech-bg`}><Nav/><main className="pt-[76px]">{children}</main><Footer/></body></html> }
