export function BrandMark() {
  return (
    <span className="flex items-center gap-2.5 text-paper">
      <img
        src="/brand/mark-white.png"
        alt=""
        className="h-11 w-auto object-contain object-left outline-none md:h-12"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.85rem] tracking-[0.08em] md:text-[2.1rem]">
          HOOLI
        </span>
        <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.34em] text-paper/75">
          Real Estate
        </span>
      </span>
    </span>
  );
}
