import Image from "next/image";
import Link from "next/link";

export function Logo({ width = 150, height = 80 }: { width?: number; height?: number }) {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo.svg"
        alt="logo"
        placeholder="blur"
        blurDataURL="/logo.svg"
        width={width}
        height={height}
      />
    </Link>
  );
}
