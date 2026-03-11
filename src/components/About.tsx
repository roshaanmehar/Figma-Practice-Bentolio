import Image from "next/image";
import { ASSETS } from "@/lib/constants";

export function About() {
  return (
    <section
      id="about"
      className="bg-[var(--primary)] rounded-[var(--rounded)] overflow-hidden relative p-6 flex flex-col min-h-[320px] md:min-h-[351px]"
    >
      <div className="absolute left-6 top-8 w-[38px] h-[38px]">
        <Image
          src={ASSETS.circleIcon}
          alt=""
          width={38}
          height={38}
          unoptimized
        />
      </div>
      <p className="font-light text-xl leading-[1.55] text-[var(--text)] mt-20 max-w-[296px]">
        Julia Huang is an innovative AI artist, renowned for blending
        cutting-edge technology with creative expression. Based in LA, she
        crafts unique digital art experiences accessible globally.
      </p>
    </section>
  );
}
