// Consistent section header used across every page.
// Renders an optional eyebrow kicker, a title, an accent rule, and an
// optional subtitle. `align` controls left vs. centered layouts.

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  accent = "blue",
  className = "",
}) {
  const centered = align === "center";
  const ruleColor = accent === "red" ? "bg-kashRed" : "bg-kashGold-500";

  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-kashBlue-600 mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-kashBlue-950">
        {title}
      </h2>
      <div className={`h-1 w-12 rounded-full ${ruleColor} mt-4 ${centered ? "mx-auto" : ""}`} />
      {subtitle && (
        <p className={`mt-5 text-lg text-gray-500 leading-relaxed ${centered ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
