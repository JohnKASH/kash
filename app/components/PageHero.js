// Consistent, refined hero used at the top of every page.
// A full-bleed photo is tinted with a navy gradient scrim (instead of a
// flat black overlay) so imagery feels cohesive with the brand palette.

export default function PageHero({
  image,
  eyebrow,
  title,
  subtitle,
  children,
  size = "standard", // "standard" | "tall"
  imagePosition = "center",
}) {
  const height =
    size === "tall"
      ? "h-[78vh] min-h-[520px] max-h-[680px]"
      : "h-[52vh] min-h-[360px] max-h-[480px]";

  return (
    <section className={`relative w-full ${height} overflow-hidden`}>
      <div
        className="absolute inset-0 bg-cover scale-105"
        style={{ backgroundImage: `url('${image}')`, backgroundPosition: imagePosition }}
      />
      {/* Navy scrim for legibility + brand cohesion */}
      <div className="absolute inset-0 bg-gradient-to-t from-kashBlue-950/90 via-kashBlue-950/55 to-kashBlue-950/35" />
      <div className="absolute inset-0 bg-kashBlue-950/15" />

      <div className="relative z-10 h-full">
        <div className="max-w-5xl mx-auto h-full flex flex-col justify-center px-6 sm:px-10">
          <div className="animate-rise max-w-3xl">
            {eyebrow && (
              <p className="text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase text-kashGold-300 mb-4">
                {eyebrow}
              </p>
            )}
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08]">
              {title}
            </h1>
            <div className="h-1 w-16 rounded-full bg-kashGold-500 mt-6" />
            {subtitle && (
              <p className="mt-6 text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl">
                {subtitle}
              </p>
            )}
            {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
          </div>
        </div>
      </div>
    </section>
  );
}
