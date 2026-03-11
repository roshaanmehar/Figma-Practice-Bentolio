import Link from "next/link";

export function Header() {
  return (
    <header className="bg-[var(--primary)] rounded-[var(--rounded)] h-[101px] flex items-center justify-between px-6 w-full">
      <p className="text-[25px] uppercase tracking-tight">
        <span className="font-light italic">Julia</span>{" "}
        <span className="font-medium">Huang</span>
      </p>
      <nav className="flex items-center justify-between gap-12 font-light text-base uppercase tracking-wide">
        <Link href="#projects" className="hover:opacity-80 transition-opacity">
          Projects
        </Link>
        <Link href="#about" className="hover:opacity-80 transition-opacity">
          About
        </Link>
        <Link href="#contact" className="hover:opacity-80 transition-opacity">
          Contact
        </Link>
      </nav>
    </header>
  );
}
