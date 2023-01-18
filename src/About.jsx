import React from "react";

export const About = () => {
  return (
    <section id="about">
      <div className="h-auto bg-base-300 hero">
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-md p-5 my-10">
            <h1 className="mb-10 font-mono text-5xl font-bold">About me</h1>
            <img
              className="mask mask-circle h-48 w-48 mx-auto my-5"
              src="https://avatars.githubusercontent.com/u/47508538?v=4"
              alt="Profile picture"
            />
            <p className="my-5 text-justify">
              I'm José Sierra, a passionate Software Engineering student at the{" "}
              <a href="https://www.uma.es" className="font-bold underline text-info">
                University of Málaga, Spain (UMA)
              </a>
              . Currently I'm{" "}
              {Math.abs(
                new Date(Date.now() - new Date(2000, 12, 16).getTime()).getUTCFullYear() - 1970
              )}{" "}
              years old.
              <br />
              <br />
              I'm currently working on a project called{" "}
              <strong className="text-info">OrganiChat</strong>, which is going to be my final
              project. I'll release the code on GitHub once I finish it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
