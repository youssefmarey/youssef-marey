import React from "react";
import { socialLink } from "../../constant/data";

const Contact = () => {
  return (
    <section className="pt-28" id="contact" >
      <div className="container grid gap-11 md:grid-cols-[0.7fr_1fr] pb-12 md:pb-16 border-b border-zinc-200 dark:border-zinc-900">
        {/* Content */}
        <div>
          <h2 className="section-title">Get In Tech</h2>
          <p>
            Have a project in mind or just want to say hello? Feel free to reach
            out and let's create something amazing together.
          </p>

          {/* Social Linls */}
          <div className="flex items-center gap-2.5 mt-9" >
            {socialLink.map((link) => (
                <a href={link.link} target="_blank" key={link.id} className="hover:text-emerald-700 transition-colors" >
                    <link.icon />
                </a>
            ))}
          </div>
        </div>
        {/* Form */}
        <form action="" className="space-y-3.5" >
            {/* Wrapper */}
            <div className="grid gap-2.5 md:grid-cols-2" >
                {/* Input Field */}
                <div className="border border-zinc-200 bg-zinc-100/60 rounded-lg dark:border-zinc-800 dark:bg-zinc-900/60" >
                    <input type="text" placeholder="Name" className="py-2.5 indent-4 w-full placeholder-zinc-800 dark:placeholder-zinc-400" />
                </div>
                
                {/* Input Field */}
                <div className="border border-zinc-200 bg-zinc-100/60 rounded-lg dark:border-zinc-800 dark:bg-zinc-900/60" >
                    <input type="email" placeholder="Your Email" className="py-2.5 indent-4 w-full placeholder-zinc-800 dark:placeholder-zinc-400" />
                </div>

            </div>
            <textarea placeholder="Message" className="border border-zinc-200 bg-zinc-100/60 rounded-lg dark:border-zinc-800 dark:bg-zinc-900/60 w-full indent-4 h-32 py-2.5 resize-none placeholder-zinc-800 dark:placeholder-zinc-400" />

            {/* Btn */}
            <button className="bg-emerald-600 hover:bg-emerald-800 w-full transition-colors py-2 rounded-lg text-white">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
