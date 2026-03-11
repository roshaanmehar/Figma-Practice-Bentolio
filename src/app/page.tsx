import { Header } from "@/components/Header";
import { SloganIntro } from "@/components/SloganIntro";
import { Portrait } from "@/components/Portrait";
import { About } from "@/components/About";
import { Work } from "@/components/Work";
import { Contact } from "@/components/Contact";
import { Socials } from "@/components/Socials";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <div className="mx-auto max-w-[1440px] px-4 py-6 md:px-6">
        <Header />

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-[726px_auto] md:gap-4">
          {/* Row 1: Hero, Portrait, Work — same height as Work card (726px) */}
          <div className="md:col-span-5 md:h-full md:min-h-0">
            <SloganIntro />
          </div>
          <div className="md:col-span-4 md:h-full md:min-h-0 flex">
            <Portrait />
          </div>
          <div className="md:col-span-3 md:h-full md:min-h-0">
            <Work />
          </div>

          {/* Row 2: About, Contact, Socials — tighter spacing to match design */}
          <div className="md:col-span-5">
            <About />
          </div>
          <div className="md:col-span-4">
            <Contact />
          </div>
          <div className="md:col-span-3">
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
}
