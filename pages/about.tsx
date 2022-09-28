import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { SKILLS } from "../data/skills";

const AboutPage: NextPage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="w-full">
        <h1 className="text-3xl font-bold mb-8">About Me</h1>
        <div className="relative w-full max-w-md aspect-square rounded-full overflow-hidden mx-auto my-4">
          <Image
            src="/images/user1.jpeg"
            alt="Asif Anower"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <p className="text-xl">
          I am Asif Anower, 23 years old and from Bangladesh. For a considerable time, I have been interested in web development.
          I enjoy discovering new stuff.I aim to learn more because I currently have a very restricted knowledge base.
          My own passion in learning web development and participating in it is web app development. 
        </p>
      </div>
      <div className="w-full">
        <h1 className="text-3xl font-bold mb-8">Skills</h1>
        <div className="flex flex-wrap">
          {SKILLS.sort((a, b) => (a.name.length > b.name.length ? 1 : -1)).map(
            (skill) => (
              <span
                style={{ opacity: `${skill.grade}` }}
                className={`border-2 text-sm md:text-md md:my-3 p-1 m-1 text-lightPrimary dark:text-darkPrimary border-lightPrimary dark:border-darkPrimary`}
                key={skill.name}
              >
                {skill.name}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
