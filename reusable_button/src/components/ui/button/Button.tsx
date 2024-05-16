import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../../utils/cn";

type ButtonProps = React.HtmlHTMLAttributes<HTMLButtonElement> & {
  variant: "primary" | "secondary";
};

export default function Button({className, variant, ...props}: ButtonProps) {
  return (
    <>
      <button {...props} className={cn(buttonVariants({variant}), className)}/>

      {/* <button {...props} className={buttonVariants({variant})}/> */}
    </>
  );
}

const buttonVariants = cva(
  "py-2 px-4 rounded-md font-semibold hover:opacity-50 ",
  {
    variants: {
        variant: {
            primary: 'bg-gradient-to-r from-primary-dark to-primary-light text-black',
            secondary: 'bg-gradient-to-r from-secondary-dark to-secondary-light text-white',
        }
    },
    defaultVariants: {
      variant: "primary"
    }
  }
);

// const var = cva();
