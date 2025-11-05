import React from "react";
import { aboutItems } from "../../constant/data";

const Skils = () => {
  return (
    <div>
      {/* Title */}
      <div className="">
        <h3>Skills</h3>
        <p>
          Here are the frameworks,libaries,services and runtimes i have
          experience with.This is not a complete list i'm constantly going new
          skills.and hence it can be a little bit outdated.
        </p>
      </div>
      {/* Wrapper */}
      <div className="flex gap-3.5 flex-wrap mt-8">
        {aboutItems.map(item => (
            <div className="flex items-center gap-2" key={item.id}>
                {/* Icon */}
                <span className="size-6 flex items-center justify-center" >
                    <img src={item.icon} alt={item.label} width={24} height={24} />
                </span>
                <p>{item.label}</p>
            </div>
            
        ))}
      </div>
    </div>
  );
};

export default Skils;
