import { cn } from "@/lib/cn";

export function SectionHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-2xl md:text-3xl font-serif font-bold text-accent mb-8",
        className
      )}
    >
      {children}
    </h2>
  );
}
