import { cn } from "@/lib/utils";

interface AnimatedBackgroundProps {
  className?: string;
}

export function AnimatedBackground({ className }: AnimatedBackgroundProps) {
  return (
    <div className={cn("absolute inset-0 -z-10 overflow-hidden pointer-events-none", className)}>
      <svg className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 opacity-[0.15] dark:opacity-[0.1] text-emerald-500 animate-background-move" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="grid-pattern"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(0)"
          >
            <circle cx="1" cy="1" r="1" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
      {/* Gradiente de fade para suavizar as bordas */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white/80 dark:to-zinc-950/80" />
    </div>
  );
}
