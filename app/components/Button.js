// Shared button styles for visual consistency across the site.
// Use `as="a"` (default) for links; pass href/target as needed.

const variants = {
  primary:
    "bg-kashBlue-600 text-white shadow-sm hover:bg-kashBlue-700 hover:-translate-y-0.5",
  light:
    "bg-white text-kashBlue-700 shadow-sm hover:bg-kashBlue-50 hover:-translate-y-0.5",
  outline:
    "border border-kashBlue-200 text-kashBlue-700 hover:border-kashBlue-400 hover:bg-kashBlue-50 hover:-translate-y-0.5",
  ghostOnDark:
    "border border-white/25 text-white hover:bg-white/10 hover:-translate-y-0.5",
  gold:
    "bg-kashGold-500 text-white shadow-sm hover:bg-kashGold-600 hover:-translate-y-0.5",
};

const sizes = {
  sm: "px-5 py-2 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
