interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

export default function Card({
  children,
  className = '',
  hover = false,
  padding = 'lg'
}: CardProps) {

  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }

  return (
    <div
      className={`
        rounded-2xl border border-gray-200 bg-white
        ${paddings[padding]}
        ${hover ? 'transition-all duration-200 hover:shadow-lg hover:border-gray-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}
