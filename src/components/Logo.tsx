import Image from 'next/image';
import Link from 'next/link';

export function Logo({ large = false }: { large?: boolean }) {
  return (
    <span className={`inline-flex items-center ${large ? 'scale-[1.08]' : ''}`} aria-label="OGE-ACTRA TECH">
      <Image
        src="/brand/oge-actra-tech-logo.webp"
        alt="OGE-ACTRA TECH"
        width={large ? 210 : 150}
        height={large ? 120 : 86}
        className="h-auto w-[142px] object-contain sm:w-[154px]"
        priority
      />
    </span>
  );
}

export function LogoLink() {
  return <Link href="/" className="focus-ring rounded-lg" aria-label="OGE-ACTRA TECH home"><Logo /></Link>;
}
