import React from "react";
import { heroBtns, heroItems } from "../../constant/data";

const Hero = () => {
  return (
    <section className="mt-28" id="#" >
      <div className="container">
        <div className="grid gap-14 md:grid-cols-2 items-center">
          {/* content */}
          <div className="">
            <p className="text-lg md:text-xl font-light text-emerald-600" >Hi, I'm Youssef Marey</p>
            <h1 className="text-3xl my[10px_16px]" >Full Stack & Web Developer</h1>
            <p>
              Passionate full stack web developer with of experience building
              scalable web applications.
            </p>
          </div>
          {/* Image */}
          <div className="w-2xs h-72 rounded-full overflow-hidden mx-auto lg:mx-0">
            <img src="/images/hero-img.jpg" alt="hero image" width={280} height={280} className="w-full h-full object-cover" />
          </div>
        </div>
        {/* wrapper */}
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 items-center md:divide-x divide-zinc-200 mt-8 dark:divide-zinc-900">
            {heroItems.map(item => (
                <div className="flex items-start gap-2" key={item.id}>
                    <span className="size-10 flex items-center justify-center bg-zinc-100 rounded-xl border border-zinc-100 text-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:border-zinc-900">
                        <item.icon size={26} />
                    </span>
                    <div className="space-y-1" >
                        <h2 className="text-lg" >{item.subtitle}</h2>
                        <p>{item.text}</p>
                    </div>
                </div>
            ))}
        </div>
        {/* Hero btns */}
        <div className="flex flex-col gap-4 mt-8 sm:flex-row">
            {heroBtns.map(item => (
                <button className="btn border-zinc-200 dark:border-zinc-900 relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-emerald-700 before:-z-10 before:scale-y-0 hover:before:scale-y-100 before:transition-transform before:origin-top hover:text-zinc-100" key={item.id}>
                    <span>
                        <item.icon />
                    </span>
                    {item.label}
                </button>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
