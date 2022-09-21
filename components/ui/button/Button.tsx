import React from "react";
import Link from "next/link";

interface props {
  children: React.ReactNode;
  className?: string;
  href: string;
}

const Button = ({ children, className, href }: props) => {
  return (
    <Link href={href}>
      <button
        className={
          "bg-red leading-tight text-md font-bold py-4 px-8 text-white rounded-md " +
          className
        }
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
