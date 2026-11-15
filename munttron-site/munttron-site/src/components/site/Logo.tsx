export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <img
      src="/munttron-emblem.png"
      alt=""
      aria-hidden="true"
      className={`${className} object-contain`}
    />
  );
}

export function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark />
      <span className="text-lg font-semibold tracking-[0.18em] uppercase">Munttron</span>
    </span>
  );
}
