import React from "react";
import { BsGithub } from "react-icons/bs";

export const Header = () => {
  return (
    <section id="">
      <div
        className="h-auto hero"
        style={{ backgroundImage: `url("https://i.redd.it/o8ziy60pi7a71.jpg")` }}
      >
        <div className="p-24 hero-overlay bg-opacity-60"></div>
        <div className="p-24 text-center hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold font-tnr">zoddDev</h1>
            <p className="mb-5 font-serif">
              'We can only see a short distance ahead, but we can see plenty there that needs to be
              done' - Alan M. Turing
            </p>
            <button
              className="btn btn-outline hover:btn-secondary"
              onClick={() => {
                window.location = "https://github.com/zoddDev";
              }}
            >
              <span className="flex gap-3 text-white">
                <BsGithub className="flex my-auto text-lg" />{" "}
                <span className="flex my-auto capitalize">GitHub profile</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
