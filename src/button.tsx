import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, ...props }) => {
  const bg = variant === 'primary' ? 'var(--color-accent-bright)' : 'var(--color-midtone-bright)';
  return (
    <button style={{ background: bg, color: 'white' }} {...props}>
      {children}
    </button>
  );
};

export default Button;