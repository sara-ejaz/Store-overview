// src/components/ui/Button.jsx
export default function Button({
  children,
  variant = 'primary',     // primary | secondary | outline | ghost | danger
  size = 'default',        // sm | default | lg
  className = '',
  disabled = false,
  iconLeft,                // e.g. <i className="fa-solid fa-download"></i>
  iconRight,
  fullWidth = false,
  ...props
}) {
  // Base styles shared across all variants
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-medium rounded-3xl transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200
    disabled:opacity-60 disabled:pointer-events-none
    active:scale-[0.98]
  `;

  // Size variants
  const sizeStyles = {
    sm: 'text-xs px-4 py-2',
    default: 'text-sm px-5 sm:px-6 py-3',
    lg: 'text-base px-7 py-4',
  }[size] || 'text-sm px-5 sm:px-6 py-3';

  // Variant styles
  const variantStyles = {
    primary: `
      bg-zinc-900 hover:bg-black 
      text-white shadow-sm
      hover:shadow-md
    `,
    secondary: `
      bg-blue-600 hover:bg-blue-700 
      text-white shadow-sm
      hover:shadow-md
    `,
    outline: `
      border border-zinc-300 hover:border-zinc-400
      bg-white text-zinc-800
      hover:bg-zinc-50
    `,
    ghost: `
      bg-transparent hover:bg-zinc-100 
      text-zinc-700 hover:text-zinc-900
    `,
    danger: `
      bg-red-600 hover:bg-red-700 
      text-white shadow-sm
      hover:shadow-md
    `,
  }[variant] || `
    bg-zinc-900 hover:bg-black 
    text-white shadow-sm
    hover:shadow-md
  `;

  return (
    <button
      className={`
        ${baseStyles}
        ${sizeStyles}
        ${variantStyles}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {iconLeft && <span className="flex-shrink-0">{iconLeft}</span>}
      {children}
      {iconRight && <span className="flex-shrink-0">{iconRight}</span>}
    </button>
  );
}