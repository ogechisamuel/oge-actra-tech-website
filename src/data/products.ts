import { BrainCircuit, GraduationCap, ShoppingBag, Trophy, type LucideIcon } from 'lucide-react';

export type Product = {
  slug: string;
  name: string;
  category: string;
  status: string;
  description: string;
  long: string;
  accent: 'actra' | 'school' | 'shop' | 'bet';
  accentClass: string;
  icon: LucideIcon;
  features: string[];
  outcomes: string[];
  eyebrow: string;
  image: string;
};

export const products: Product[] = [
  {
    slug: 'actra-ai', name: 'ACTRA AI', eyebrow: 'Flagship product', image: '/products/actra-ai.webp', category: 'AI • FILMMAKING • CREATOR ECONOMY', status: 'Building / Flagship',
    accent: 'actra', accentClass: 'from-purple to-cyan', icon: BrainCircuit,
    description: 'An AI-powered filmmaking and digital character platform enabling creators to develop characters, produce cinematic stories and build new digital entertainment experiences.',
    long: 'ACTRA AI is a flagship OGE-ACTRA TECH product exploring a new creative production layer for digital characters, cinematic storytelling, virtual production workflows, character licensing and creator monetization.',
    features: ['AI Filmmaking','Digital Characters','Character Licensing','Creator Economy','Virtual Production','Digital Fashion & Makeup','Monetization'],
    outcomes: ['Create digital characters','Build stories and generate scenes','Use digital performances','Customize fashion and theatrical makeup','License character likeness','Monetize digital characters','Produce cinematic content'],
  },
  {
    slug: 'schoolhub', name: 'SchoolHub', eyebrow: 'Education platform', image: '/products/schoolhub.webp', category: 'EDTECH • EDUCATION', status: 'Active',
    accent: 'school', accentClass: 'from-blue to-cyan', icon: GraduationCap,
    description: 'A digital education ecosystem connecting students, tutors and educational resources through live learning, recorded lessons, assessments and digital classrooms.',
    long: 'SchoolHub brings learning services, tutors, course content, assessments and classroom tooling into one connected education platform designed for students and schools.',
    features: ['Live Classes','Tutors','Digital Courses','Exams & Assessments','Student Learning','Educational Marketplace'],
    outcomes: ['Connect students with tutors','Support live and recorded learning','Organize digital classrooms','Deliver assessments','Create an education marketplace'],
  },
  {
    slug: 'washop', name: 'WaShop', eyebrow: 'Commerce platform', image: '/products/washop.webp', category: 'COMMERCE • SOCIAL COMMERCE', status: 'Active / Launching',
    accent: 'shop', accentClass: 'from-cyan to-purple', icon: ShoppingBag,
    description: 'A social commerce platform that helps businesses create digital storefronts and sell directly through conversations and social channels.',
    long: 'WaShop helps businesses turn conversational commerce into structured selling experiences with catalogues, storefronts, customer engagement and business tools.',
    features: ['Digital Storefronts','WhatsApp Commerce','Product Catalogues','Customer Conversations','Social Selling','Business Tools'],
    outcomes: ['Launch digital storefronts','Manage product catalogues','Sell through conversations','Support social commerce workflows','Equip small businesses with practical tools'],
  },
  {
    slug: 'p2bet', name: 'P2BET', eyebrow: 'Social entertainment', image: '/products/p2bet.webp', category: 'SOCIAL ENTERTAINMENT', status: 'Active / Developing',
    accent: 'bet', accentClass: 'from-purple to-blue', icon: Trophy,
    description: 'A social peer-to-peer entertainment platform built around interactive competition, community participation and digital gaming experiences.',
    long: 'P2BET is positioned as a professional social entertainment product within the OGE-ACTRA TECH portfolio, focused on community participation, interactive competition and digital entertainment.',
    features: ['Peer-to-Peer','Social Competition','Racing Experiences','Community','Digital Entertainment'],
    outcomes: ['Enable peer-to-peer interaction','Create social competition loops','Design racing-style experiences','Build community participation','Support responsible digital entertainment'],
  },
];

export const productBySlug = (slug: string) => products.find((product) => product.slug === slug);
