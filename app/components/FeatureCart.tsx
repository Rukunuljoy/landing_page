import React from "react";
import { twMerge } from "tailwind-merge";

const FeatureCart = (props: {
    title:string,
    description:string,
    children?: React.ReactNode;
    className?: string
}) => {
    const { title, description, children, className } = props;
  return (
    <div className={twMerge("bg-neutral-900 p-6 border border-white/10 rounded-3xl ", className)}>
      <div className="aspect-video">{children}</div>
      <div>
        <h3 className="text-3xl font-medium mt-6">{title}</h3>
        <p className="text-white/50 mt-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCart;
