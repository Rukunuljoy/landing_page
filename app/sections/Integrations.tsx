import { describe } from "node:test";
import React from "react";
import Tag from "../components/Tag";
import figmaIcon from "@/app/assets/images/figma-logo.svg";
import notionIcon from "@/app/assets/images/notion-logo.svg";
import stackIcon from "@/app/assets/images/slack-logo.svg";
import relumeIcon from "@/app/assets/images/relume-logo.svg";
import framerIcon from "@/app/assets/images/framer-logo.svg";
import githubIcon from "@/app/assets/images/github-logo.svg";
import Image from "next/image";
import IntegrationColumn from "../components/IntegrationColumn";

const integrations = [
  {
    name: "Figma",
    icons: figmaIcon,
    description: "lorem lorem lorem ipsum dolor lorem lorem lorem ipsum ",
  },
  {
    name: "Notion",
    icons: notionIcon,
    description: "lorem lorem lorem ipsum dolor lorem lorem lorem ipsum ",
  },
  {
    name: "Slack",
    icons: stackIcon,
    description: "lorem lorem lorem ipsum dolor lorem lorem lorem ipsum ",
  },
  {
    name: "Relume",
    icons: relumeIcon,
    description: "lorem lorem lorem ipsum dolor lorem lorem lorem ipsum ",
  },
  {
    name: "Framer",
    icons: framerIcon,
    description: "lorem lorem lorem ipsum dolor lorem lorem lorem ipsum ",
  },
  {
    name: "Github",
    icons: githubIcon,
    description: "lorem lorem lorem ipsum dolor lorem lorem lorem ipsum ",
  },
];

export type IntegrationType = typeof integrations;

const Integrations = () => {
  return (
    <section className="py-24 overflow-hidden">
        <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 items-center lg:gap-16">
        <div>
        
          <Tag>Integrations</Tag>
          <h2 className="text-6xl font-medium mt-6">
            Plays well with <span className="text-lime-400">Others</span>
          </h2>
          <p className="text-white/50 mt-4 text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
            sapiente assumenda nostrum obcaecati quam eum.
          </p>

          </div>
          <div>
          <div
            className="h-[400px] lg:h-[800px] lg:mt-0 mt-8 grid md:grid-cols-2 gap-4 overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent 10%, black 90%, transparent)",
            }}
          >
            <IntegrationColumn integrations={integrations} />
            <IntegrationColumn
              integrations={integrations.slice().reverse()}
              className="hidden md:flex"
            />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
