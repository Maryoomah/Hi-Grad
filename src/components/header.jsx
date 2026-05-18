export default function Header({ id, children, className = "", ...props }) {
  return (
    <h1
      id={id}
      className={`text-3xl sm:text-4xl font-bold tracking-tight
   ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
}
