import React, { ReactNode } from "react";

const Button = (props: {
  className?: string;
  type?: "submit" | "reset" | "button" | undefined;
  action?: any;
  children: ReactNode;
}) => {
  const { className, type, action, children } = props;
  return (
    <button
      className={`px-6 py-3.5 rounded-[100px] shadow justify-center items-center gap-1 inline-flex text-base font-semibold font-inter leading-none ${className}`}
      onClick={action}
    >
      {children}
    </button>
  );
};

export default Button;
