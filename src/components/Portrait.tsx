import Image from "next/image";
import { ASSETS } from "@/lib/constants";

export function Portrait() {
  return (
    <section className="rounded-[var(--rounded)] overflow-hidden relative w-full aspect-[330/476] max-h-[476px] bg-[var(--primary)]">
      <Image
        src={ASSETS.portrait}
        alt="Julia Huang"
        fill
        className="object-cover object-top"
        sizes="(max-width: 768px) 100vw, 330px"
        unoptimized
      />
    </section>
  );
}
