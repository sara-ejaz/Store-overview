// src/components/ui/Badge.jsx
export default function Badge({
  children,
  variant = 'default',     // default | success | warning | danger | info | neutral
  size = 'default',        // sm | default
  rounded = 'full',        // full | lg | md (rounded-3xl, rounded-2xl, rounded-xl)
  className = '',
  dot = false,             // show colored dot (used for status like Completed/Processing)
  ...props
}) {
  // Base styles
  const baseStyles = `
    inline-flex items-center justify-center gap-1.5
    font-semibold tracking-tight
    transition-colors duration-150
  `;

  // Size variants
  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5',
    default: 'text-xs px-3.5 py-1',
  }[size] || 'text-xs px-3.5 py-1';

  // Rounded variants
  const roundedStyles = {
    full: 'rounded-full',
    lg: 'rounded-3xl',
    md: 'rounded-2xl',
    sm: 'rounded-xl',
  }[rounded] || 'rounded-full';

  // Color variants
  const variantStyles = {
    default: 'bg-zinc-100 text-zinc-700',
    success: 'bg-emerald-50 text-emerald-700',
    warning: 'bg-amber-50 text-amber-700',
    danger: 'bg-red-50 text-red-700',
    info: 'bg-blue-50 text-blue-700',
    neutral: 'bg-zinc-100 text-zinc-600 border border-zinc-200',
  }[variant] || 'bg-zinc-100 text-zinc-700';

  return (
    <span
      className={`
        ${baseStyles}
        ${sizeStyles}
        ${roundedStyles}
        ${variantStyles}
        ${className}
      `}
      {...props}
    >
      {dot && (
        <span
          className={`
            flex-shrink-0 w-2 h-2 rounded-full
            ${
              variant === 'success' ? 'bg-emerald-500' :
              variant === 'warning' ? 'bg-amber-500' :
              variant === 'danger' ? 'bg-red-500' :
              variant === 'info' ? 'bg-blue-500' :
              'bg-zinc-400'
            }
          `}
        />
      )}

      {children}
    </span>
  );
}