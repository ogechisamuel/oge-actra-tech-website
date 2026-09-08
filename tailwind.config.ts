import type { Config } from 'tailwindcss';
const config: Config = { content: ['./src/**/*.{ts,tsx}'], theme: { extend: { fontFamily: { sans: ['var(--font-geist-sans)','Inter','system-ui','sans-serif'] }, colors: { navy:'#050816',space:'#071126',panel:'#0A1024',blue:'#00A8FF',cyan:'#00D9FF',purple:'#7B2CFF',platinum:'#DDE4EA',silver:'#AEB8C2' }, boxShadow: { glow:'0 0 40px rgba(0,168,255,.22)' } } }, plugins: [] };
export default config;
