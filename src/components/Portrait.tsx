import Image from "next/image";
import { ASSETS } from "@/lib/constants";

export function Portrait() {
  return (
    <section className="rounded-[var(--rounded)] overflow-hidden relative w-full min-h-[320px] aspect-[330/476] md:aspect-auto md:max-h-none md:h-full md:min-h-0 bg-[var(--primary)]">
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
