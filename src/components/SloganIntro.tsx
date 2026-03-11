import Image from "next/image";
import { ASSETS } from "@/lib/constants";

export function SloganIntro() {
  return (
    <section className="bg-[var(--primary)] rounded-[var(--rounded)] overflow-hidden relative p-6 flex flex-col justify-center min-h-[420px] md:min-h-[480px] md:h-full md:min-h-0">
      <div className="absolute right-10 top-8 w-[119px] h-[119px]">
        <Image
          src={ASSETS.flowerIcon}
          alt=""
          width={119}
          height={119}
          unoptimized
        />
      </div>
      <h1 className="text-[56px] font-bold leading-[1.1] text-[var(--text)] max-w-[475px]">
        Artist Redefining <em className="font-light italic">Architecture</em>{" "}
        with AI-Driven Design
      </h1>
    </section>
  );
}
