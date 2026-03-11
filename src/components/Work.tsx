import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/lib/constants";

const PROJECTS = [
  { name: "Musea", slug: "musea", image: ASSETS.museaImage },
  { name: "Elara", slug: "elara" },
  { name: "Verve", slug: "verve" },
  { name: "Zephyr", slug: "zephyr" },
];

export function Work() {
  return (
    <section
      id="projects"
      className="bg-[var(--primary)] rounded-[var(--rounded)] overflow-hidden p-6 flex flex-col gap-6"
    >
      {PROJECTS.map((project, i) => (
        <div key={project.slug}>
          {i > 0 && <hr className="border-[var(--text)]/20 mb-6 -mx-6" />}
          <Link href={`/#${project.slug}`} className="block group">
            <div className="flex items-start justify-between gap-2 mb-3">
              <span className="font-medium text-[25px] text-[var(--text)]">
                {project.name}
              </span>
              <span className="w-[26px] h-[26px] shrink-0">
                <Image
                  src={ASSETS.arrowIcon}
                  alt=""
                  width={26}
                  height={26}
                  unoptimized
                />
              </span>
            </div>
            {project.image && (
              <div className="relative w-full aspect-[399/269] rounded-2xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 399px"
                  unoptimized
                />
              </div>
            )}
          </Link>
        </div>
      ))}
    </section>
  );
}
