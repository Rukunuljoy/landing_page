import React, { HTMLAttributes } from "react";
import { cva } from "class-variance-authority";

// Define the classes with variants
const classes = cva("border h-12 rounded-full px-6 font-medium", {
  variants: {
    variant: {
      primary: "bg-lime-400 text-neutral-950 border-lime-400 hover:bg-lime-500",
      secondary: "border-white text-white bg-transparent",
    },
    size: {
      sm:"h-10"
    }
  },
});

export default function Button(props: {
  variant: "primary" | "secondary";
  size?:"sm"
} & HTMLAttributes<HTMLButtonElement>) {

    const {variant,size, className, ...otherProps} = props;
  return (
    <button
      className={classes({
        variant,
        className,
        size // Merge the className prop
      })}
      {...otherProps} // Spread other button props like onClick, disabled, etc.
    />
  );
}
