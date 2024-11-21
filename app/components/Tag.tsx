import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Tag = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, children, ...otherPros } = props;
  return (
    <div
      className={twMerge(
        "inline-flex border border-lime-400 gap-2  rounded-full text-lime-400 px-3 py-1 uppercase items-center",
        className
      )}
      {...otherPros}
    >
      <span>&#10038;</span>
      <span className="text-sm">{children} </span>
    </div>
  );
};

export default Tag;
