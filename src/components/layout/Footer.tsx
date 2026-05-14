import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-surface py-8 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted uppercase tracking-widest">
        <span>&copy; {new Date().getFullYear()} {SITE.name}</span>
        <span>{SITE.domain}</span>
      </div>
    </footer>
  );
}
