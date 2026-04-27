export default function Section({ children, className = "", ...props }) {
  return (
    <section className={`py-16 sm:py-20  ${className}`} {...props}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 ">{children}</div>
    </section>
  );
}
