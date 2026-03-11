import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/lib/constants";

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-[var(--secondary)] rounded-[var(--rounded)] overflow-hidden relative p-6 flex flex-col justify-between min-h-[320px] md:min-h-[351px]"
    >
      <div className="flex items-start justify-between">
        <p className="font-light text-[15px] text-[var(--text)] leading-snug">
          Have some
          <br />
          questions?
        </p>
        <Link href="/contact" className="w-[38px] h-[38px] shrink-0">
          <Image
            src={ASSETS.arrow}
            alt=""
            width={38}
            height={38}
            unoptimized
          />
        </Link>
      </div>
      <Link
        href="/contact"
        className="font-medium text-[55px] leading-tight text-[var(--text)] hover:opacity-90 transition-opacity"
      >
        Contact me
      </Link>
    </section>
  );
}
