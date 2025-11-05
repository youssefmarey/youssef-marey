import React from "react";
import Skils from "../Skils/Skils";
import Timeline from "../Timeline/Timeline";

const About = () => {
  return (
    <section className="pt-20 md:mt-28" id="about">
      <div className="container">
        {/* Title */}
        <div>
          <h2 className="section-title mb-3.5">About Me</h2>
          <p>
            I'm a highly skilled full-stack engineer with of experience in
            building web applications. On this page,you can learn more about my
            knowledge stack and my previous work experience.
          </p>
        </div>
        {/* wrapper */}
        <div className="border mt-8 px-8 py-4 border-zinc-200 dark:border-zinc-900 rounded-lg">
            <Skils />
            <Timeline />
        </div>
      </div>
    </section>
  );
};

export default About;
