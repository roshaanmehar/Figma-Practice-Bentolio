import Link from "next/link";

const LINKS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export function Socials() {
  return (
    <section className="bg-[var(--primary)] rounded-[var(--rounded)] overflow-hidden flex items-center justify-center min-h-[101px]">
      <div className="flex items-center justify-between w-full max-w-[334px] px-6 font-light text-[15px] uppercase tracking-wide">
        {LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text)] hover:opacity-80 transition-opacity"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
