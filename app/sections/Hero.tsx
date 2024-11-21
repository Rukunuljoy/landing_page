import React from "react";
import Button from "../components/Button";
import designExampleImage1 from "@/app/assets/images/design-example-1.png";
import designExampleImage2 from "@/app/assets/images/design-example-1.png";
import Image from "next/image";
import Pointer from "../components/Pointer";

const Hero = () => {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container mx-auto relative">
        <div className="absolute -left-32 top-16 hidden lg:block">
          <Image src={designExampleImage1} alt="design image" />
        </div>
        <div className="absolute -right-48 -top-16 hidden lg:block">
          <Image src={designExampleImage2} alt="design image" />
        </div>
        <div className="absolute left-56 top-96 hidden lg:block">
          <Pointer name="Andrea" />
        </div>
        <div className="absolute right-80 -top-4 hidden lg:block">
          <Pointer name="Joy" color="red" />
        </div>
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-900 font-semibold">
            ✨ $7.5M Design is more than just aesthetics
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-medium text-center mt-6 max-w-4xl mx-auto">
          ultimately makes life easier and more beautiful.
        </h1>
        <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
          Good design not only&apos; captivates the eye but also enhances
          functionality, making the complex simple and the mundane extraordinary
          the mundane extraordinary.
        </p>
        <form
          action=""
          className="flex border justify-between border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto"
        >
          <input
            type="text"
            placeholder="Enter your email"
            className="bg-transparent px-4 md:flex-1 w-full"
          />
          <Button
            variant="primary"
            typeof="button"
            size="sm"
            className="whitespace-nowrap"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
