import * as React from "react"

export const Button = React.forwardRef(
  ({ className = '', variant = 'default', size = 'md', ...props }, ref) => {
    const base =
      'shadcn-btn inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
    const variants = {
      default: 'bg-indigo-600 text-white hover:bg-indigo-700',
      outline: 'border border-gray-300 bg-white text-gray-900 hover:bg-gray-100',
      ghost: 'bg-transparent hover:bg-gray-100 text-gray-900',
    };
    const sizes = {
      md: 'h-10 px-4 py-2 text-base',
      sm: 'h-8 px-3 py-1 text-sm',
      icon: 'h-10 w-10 p-0',
    };
    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant] || ''} ${sizes[size] || ''} ${className}`}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
