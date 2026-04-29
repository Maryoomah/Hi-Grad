export default function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
  href,
}) {
  const baseStyle =
    "px-6 py-3 text-lg rounded-lg cursor-pointer transition-all inline-block";

  const variants = {
    primary: "bg-lime-500 text-slate-800 font-bold",
    secondary: "bg-slate-500 text-yellow-500 font-bold",
  };

  const className = `${baseStyle} ${variants[variant]}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}