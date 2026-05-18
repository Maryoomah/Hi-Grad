import { Link } from "react-router-dom";

export default function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
  href,
  to,
}) {
  const baseStyle =
    "px-6 py-3 text-sm sm:text-base rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center";

  const variants = {
    primary:
      "bg-higrad-green text-higrad-textDark hover:bg-higrad-greenDark",

    secondary:
      "border border-higrad-navy text-higrad-navy hover:bg-higrad-navy hover:text-white",
  
  secondaryDark:
    "border border-white text-white hover:bg-white hover:text-higrad-navy",

    };

  const className = `${baseStyle} ${variants[variant]}`;

 if (href) {
  const isExternal =
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

  return (
    <a
      href={href}
      className={className}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
    
  );
}