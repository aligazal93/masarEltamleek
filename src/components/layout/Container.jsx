export default function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto px-2 md:px-6 lg:px-8 max-w-[1360px] ${className}`}>
      {children}
    </div>
  );
}