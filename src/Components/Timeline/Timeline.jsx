import React from "react";
import { timelineItems } from "../../constant/data";

const Timeline = () => {
  return (
    <div className="mt-11 space-y-8" >
      {/* Title */}
      <div>
        <h3>Work History</h3>
        <p>
          Below you will find a summary of my past employment experience
          additionally.if you require. you can <a href="https://youssefmarey.github.io/youssef-mohamed-marey-cv/" target="_blank" className="border-b hover:border-emerald-600 hover:text-emerald-600 transition" >Download my resume</a>
        </p>
      </div>
      {/* Wrapper */}
      <div className="space-y-10 border-l border-zinc-200 dark:border-zinc-800">
        {timelineItems.map(item => (
            <div className="space-y-4 pl-7 relative" key={item.id}>
                <div className="absolute -left-2.5 top-1.5 bg-emerald-700/40 size-5 rounded-full flex items-center justify-center animate-pulse"><span className="size-2.5 bg-emerald-600 rounded-full block" /></div>
                <h3>{item.title}</h3>
                <div className="flex flex-wrap items-center gap-4 divide-x divide-zinc-700" >
                    {item.list.map((lable , index) => (
                        <p key={index} className="pr-3.5" >{lable}</p>
                    ))}
                </div>
                <p>{item.time}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
