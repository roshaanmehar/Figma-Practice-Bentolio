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

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6">
          {/* Row 1: Hero, Portrait, Work */}
          <div className="md:col-span-5">
            <SloganIntro />
          </div>
          <div className="md:col-span-4 flex items-start justify-center">
            <Portrait />
          </div>
          <div className="md:col-span-3 min-h-[400px] md:min-h-[726px]">
            <Work />
          </div>

          {/* Row 2: About, Contact, Socials */}
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
