import React from "react";
import { useParams } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { FaInfoCircle, FaWrench } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
// import { HashLink } from "react-router-hash-link";

export const Navbar = (props) => {
  const params = useParams();

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col drawer-content">
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 font-mono text-secondary">
            <a
              href="/"
              className="p-3 transition duration-200 ease-in-out rounded-md delay-0 hover:-translate-y-0 hover:scale-110"
            >
              zoddDev<span className="text-info">$</span>
            </a>
          </div>
          <div className="flex-none hidden font-mono lg:block">
            <ul className="menu menu-horizontal">
              <li className="rounded">
                <HashLink to="/#about">
                  About <FaInfoCircle className="text-xl" />
                </HashLink>
              </li>
              <li className="rounded">
                <HashLink to="/#technologies">
                  Technologies
                  <FaWrench className="text-lg" />
                </HashLink>
              </li>
              <li className="rounded">
                <HashLink to="/#projects">
                  Projects <BsGithub className="text-xl" />
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
        {/* CONTENT */}
        {props.children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="p-4 menu w-80 bg-base-100">
          <li className="rounded">
            <HashLink to="/#about">
              About <FaInfoCircle className="text-xl" />
            </HashLink>
          </li>
          <li className="rounded">
            <HashLink to="/#technologies">
              Technologies
              <FaWrench className="text-lg" />
            </HashLink>
          </li>
          <li className="rounded">
            <HashLink to="/#projects">
              Projects <BsGithub className="text-xl" />
            </HashLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
