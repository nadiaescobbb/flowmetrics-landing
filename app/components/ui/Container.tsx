/**
 * Container Component
 * 
 * Purpose: Provides consistent max-width and horizontal padding across all sections
 * Why: Centralizes responsive layout logic - easier to maintain and ensures consistency
 * Performance: Zero runtime cost, purely styling
 */

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}