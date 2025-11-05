import React from "react";
import { projectsItems } from "../../constant/data";
import { RiExternalLinkLine, RiGithubFill } from "@remixicon/react";

const Projects = () => {
  return (
    <section className="pt-20" id="projects">
      <div className="container">
        {/* Title */}
        <div>
          <h2 className="section-title">Projects</h2>
          <p className="max-w-lg">
            Explore a selection of my recent work, showcasing innovative
            solutions and creative implementations across various technologies.
          </p>
        </div>
        {/* Wrapper */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-14">
          {projectsItems.map((item) => (
            // card
            <div
              className="border border-zinc-200 rounded-md overflow-hidden bg-zinc-100/40 dark:border-zinc-800 dark:bg-zinc-900/40 hover:border-emerald-600/50 hover:shadow-lg hover:shadow-emerald-600/10 transition-all group"
              key={item.id}
            >
              {/* Image */}
              <div className="overflow-hidden relative">
                <img src={item.img} alt={item.title} className="w-full h-[250px] object-cover group-hover:scale-105" />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href={item.demo} target="_blank" className="size-12 flex justify-center items-center rounded-full text-white bg-emerald-600 hover:bg-emerald-700 transition-colors">
                    <RiExternalLinkLine />
                  </a>
                  <a href={item.link} target="_blank" className="size-12 flex justify-center items-center bg-white hover:bg-zinc-200 text-black rounded-full transition-colors" >
                    <RiGithubFill />
                  </a>
                </div>
              </div>
              {/* Content */}
              <div className="p-5 space-y-4" >
                <h3 className="text-xl group-hover:text-emerald-600 transition-colors"> {item.title} </h3>
                <p className="line-clamp-2 hover:line-clamp-none" >{item.text}</p>
                {/* tags */}
                <div className="flex gap-2 pt-2 flex-wrap" >
                  {item.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 text-sm font-medium bg-emerald-600/10 rounded-full border border-emerald-600/20 text-emerald-600" >{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
