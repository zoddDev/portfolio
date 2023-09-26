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
              I'm José Sierra, a passionate Software Engineer from Málaga, Spain.
              . Currently I'm{" "}
              {Math.abs(
                new Date(Date.now() - new Date(2000, 12, 16).getTime()).getUTCFullYear() - 1970
              )}{" "}
              years old.
              <br />
              <br />
              I'm working remotely for <a href="https://www.linkedin.com/company/indra" className="font-bold underline text-info">Indra company</a>, on the backend side. 
              I work with technologies such as Java, Spring Boot, Oracle SQL, etc. And other tools like Jira, Jenkins, Kibana, etc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
