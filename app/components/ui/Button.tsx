import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, className = "", onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-xl font-bold transition-all shadow-md hover:shadow-lg hover:scale-[1.02] ${className}`}
    >
      {children}
    </button>
  );
}
