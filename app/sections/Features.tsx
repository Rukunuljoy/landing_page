import React from "react";
import Tag from "../components/Tag";
import FeatureCart from "../components/FeatureCart";
import avatar1 from "@/app/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/app/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/app/assets/images/avatar-florence-shaw.jpg";
import Image from "next/image";
import Avatar from "../components/Avatar";
import Key from "../components/Key";

const features = [
  "Asset Library",
  "Code Preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Smart Guides",
  "Smart products"
];

const Features = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <Tag>Features</Tag>
        </div>
        <h2 className="text-6xl md:text-7xl font-medium text-center mt-6 max-w-2xl mx-auto">
          Where power meets <br />
          <span className="text-lime-400">simplicity</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
          <FeatureCart
            title="Real time collaboration"
            description=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                magni error accusantium dolorum unde reprehenderit."
                className="md:col-span-2 lg:col-span-1"
          >
            <div className="aspect-video flex items-center justify-center">
              <Avatar className="z-40">
                <Image src={avatar1} alt="" className="rounded-full" />
              </Avatar>
              <Avatar className="-ml-6 border-indigo-500 z-30">
                <Image src={avatar2} alt="" className="rounded-full" />
              </Avatar>
              <Avatar className="-ml-6 border-amber-500 z-20">
                <Image src={avatar3} alt="" className="rounded-full" />
              </Avatar>
              <Avatar className="-ml-6 border-transparent">
                <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <span
                      className="size-1.5 rounded-full bg-white inline-flex"
                      key={i}
                    ></span>
                  ))}
                </div>
              </Avatar>
            </div>
          </FeatureCart>
          <FeatureCart
            title="Interacting prototyping"
            description=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                magni error accusantium dolorum unde reprehenderit."
                className="md:col-span-2 lg:col-span-1"
          >
            <div className="aspect-video flex items-center justify-center">
              <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white/20 text-center">
                We've achieved{" "} <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  incredible
                </span>{" "} <br />
                growth this year
              </p>
            </div>
          </FeatureCart>
          <FeatureCart
            title="Keyboard quick actions"
            description=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                magni error accusantium dolorum unde reprehenderit."
                className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto"
          >
            <div className="aspect-video flex items-center justify-center gap-4">
                <Key className="w-28">Shift</Key>
                <Key>Alt</Key> 
                <Key>C</Key> 
            </div>
          </FeatureCart>
        </div>
        <div className="mt-8 flex flex-wrap gap-3 items-center justify-center">
          {features.map((feature) => (
            <div key={feature} className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 md:py-2 py-1.5 rounded-2xl gap-3 items-center">
              <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl">&#10038;</span>
              <span className="font-medium md:text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
