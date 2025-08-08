export function Button({ children, onClick, className }: any) {
  return (
    <button onClick={onClick} className={`p-2 border rounded ${className}`}>
      {children}
    </button>
  );
}
