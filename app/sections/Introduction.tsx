import React from "react";
import Tag from "../components/Tag";

const Introduction = () => {
  return (
    <section className="py-28 lg:py-40">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <Tag>Introducing Layers</Tag>
        </div>
        <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
          <span>Your creativity process deserves better.</span>
          <span className="text-white/15">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            velit est voluptatum, ad nam tempore nostrum molestiae voluptatibus
            aperiam aliquam accusamus nesciunt dolorem perspiciatis?
          </span>
          <span className="text-lime-400 block">
            That&apos;s why we build Layers.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
