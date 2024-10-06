import React, { MouseEvent, ReactNode } from 'react'

interface ButtonProps {
    variant?: 'basic' | 'dark';
    className?: string;
    disabled?: boolean;
    onClick?: (event: MouseEvent) => void;
    children?: ReactNode;
}

export default function Button({children, variant, className, disabled, onClick} : ButtonProps) {
  const ACTIVE_STYLE ={
    basic: 'text-[#000022] bg-[#0094C6] border border-[#000022] p-1 hover:bg-[#000022] hover:text-[#0094C6]',
    dark: 'border border-[#0094C6] p-1 hover:bg-[#0094C6] hover:text-[#000022] hover:border-[#0094C6]'
  }

  const DISABLE_STYLE = {
    basic:"",
    dark:""
  }

  const buttonStyle = disabled ? DISABLE_STYLE[variant || 'basic'] : ACTIVE_STYLE[variant || 'basic'];

  return <button
  className={`content-center rounded-full p-2 transition-all duration-300 ${className} ${buttonStyle}`}
  disabled={disabled}
  onClick={onClick}>
    {children}
  </button>

}
