import React from "react";
import { BsGithub } from "react-icons/bs";
import { SiArchlinux } from "react-icons/si";

export const Projects = () => {
  return (
    <section id="projects">
      <div className="h-auto bg-base-300 hero">
        {/* <div className="p-24 hero-overlay bg-opacity-60"></div> */}
        <div className="w-full text-center">
          <div className="w-full p-5 my-10">
            <h1 className="mb-10 font-mono text-5xl font-bold text-neutral-content">Projects</h1>
            <div className="w-full overflow-x-auto">
              <div className="grid w-full grid-cols-1 gap-2 my-10 lg:grid-cols-4">
                <div className="w-full h-full col-span-1">
                  <div className="table w-full">
                    <div className="p-4 text-xs font-bold uppercase rounded-t-lg bg-nosferatu-darker">
                      Dotfiles
                    </div>
                    <div className="flex p-4 col bg-darker">
                      <div className="items-center space-x-3">
                        <div className="items-center">
                          <div className="w-full rounded-lg col bg-base-300">
                            <img
                              src="https://github.com/zoddDev/dotfiles/raw/master/readme-resources/dotfiles_.png"
                              alt="Dotfiles"
                            />
                          </div>
                          <div className="w-full mx-auto mt-5">
                            <div className="text-sm text-justify text-gray-400">
                              This project contains my{" "}
                              <strong>personal compilation of configurations</strong> and themes for
                              an <strong className="text-yellow">advanced and fast</strong>{" "}
                              GNU/Linux experience. I made a total of{" "}
                              <a
                                href="https://github.com/zoddDev/dotfiles/tree/master/rices"
                                className="font-bold underline text-secondary"
                              >
                                11 different themes
                              </a>{" "}
                              using the most popular programming palettes.
                              <br />
                              <br />
                              It's mainly focused on{" "}
                              <strong className="text-info">Arch Linux</strong> I developed install
                              scripts for all the necessary packages and configurations. This
                              includes theming, shortcuts and other software configuration.
                              <br />
                              <br />I also developed a script to swap between my themes on the fly;
                              by simply clicking and selecting the desired theme on the system bar.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 p-4 place-items-center col bg-darker">
                      <div className="flex space-x-1 space-y-1">
                        <div className="avatar">
                          <div className="w-8 h-8 mask mask-squircle">
                            <img
                              src="https://camo.githubusercontent.com/ec53c971341583c0d50346351a7b04827968bb14d38073afa7f54a843ad18f32/68747470733a2f2f6c69676e75782e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031382f30362f62617368322e706e67"
                              alt="Bash"
                            />
                          </div>
                        </div>
                        <span className="font-mono text-sm font-bold">Bash</span>
                      </div>
                    </div>
                    <div className="flex justify-center p-4 rounded-b-lg col bg-darker">
                      <div className="flex space-x-3">
                        <button
                          className="btn btn-outline hover:btn-secondary"
                          onClick={() => {
                            window.location = "https://github.com/zoddDev/dotfiles";
                          }}
                        >
                          <span className="flex gap-3 text-white">
                            <BsGithub className="flex my-auto text-lg" />{" "}
                            <span className="flex my-auto capitalize">Visit project</span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-full col-span-1">
                  <div className="table w-full h-full">
                    <div className="p-4 text-xs font-bold uppercase rounded-t-lg bg-nosferatu-darker">
                      Aprende Ayudando
                    </div>
                    <div className="flex h-full p-4 col bg-darker">
                      <div className="items-center space-x-3">
                        <div className="items-center">
                          <div className="w-full bg-gray-200 rounded-lg col">
                            <img
                              src="https://raw.githubusercontent.com/memoriasIT/AprendeAyudando/main/AprendeAyudando/AprendeAyudando/static/general/images/logoTransparent.png"
                              alt="Aprende Ayudando"
                              className="h-40 mx-auto"
                            />
                          </div>
                          <div className="w-full mx-auto mt-5">
                            <div className="text-sm text-justify text-gray-400">
                              Aprende Ayudando is a software that will allow you to{" "}
                              <strong className="text-info">
                                easily organize courses and solidarity events
                              </strong>{" "}
                              established by the system administration (eg teachers, NGOs, other
                              public/private entities, etc). Likewise, all those who wish to take
                              part in social service courses may participate in these.
                              <br />
                              <br />
                              This is a software I developed with a team, our product provides a
                              free and close solution to these issues.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 p-4 col bg-darker">
                      <div className="flex space-x-1 space-y-1">
                        <div className="avatar">
                          <div className="w-8 h-8">
                            <img src="https://i.imgur.com/uMUQKxM.png" alt="Django" />
                          </div>
                        </div>
                        <span className="font-mono text-sm font-bold">Django</span>
                      </div>
                      <div className="flex space-x-1 space-y-1">
                        <div className="avatar">
                          <div className="w-8 h-8 ">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sqlite-square-icon.svg/2048px-Sqlite-square-icon.svg.png"
                              alt="SQLite"
                            />
                          </div>
                        </div>
                        <span className="font-mono text-sm font-bold">SQLite</span>
                      </div>
                    </div>
                    <div className="flex justify-center p-4 rounded-b-lg col bg-darker">
                      <div className="flex space-x-3">
                        <button
                          className="btn btn-outline hover:btn-secondary"
                          onClick={() => {
                            window.location = "https://github.com/memoriasIT/AprendeAyudando";
                          }}
                        >
                          <span className="flex gap-3 text-white">
                            <BsGithub className="flex my-auto text-lg" />{" "}
                            <span className="flex my-auto capitalize">Visit project</span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full col-span-1">
                  <div className="table w-full">
                    <div className="p-4 text-xs font-bold uppercase rounded-t-lg bg-nosferatu-darker">
                      EventBook
                    </div>
                    <div className="flex p-4 col bg-darker">
                      <div className="items-center space-x-3">
                        <div className="items-center">
                          <div className="w-full p-5 rounded-lg col bg-base-300">
                            <img
                              src="https://raw.githubusercontent.com/majochaves/Eventbook/spring/src/main/resources/static/images/EventbookLogoOscuro.svg"
                              alt="EventBook"
                            />
                          </div>
                          <div className="w-full mx-auto mt-5">
                            <div className="text-sm text-justify text-gray-400">
                              Eventbook is a tool to make{" "}
                              <strong className="text-red">
                                managing your next event as easy as possible
                              </strong>
                              .
                              <br />
                              <br />
                              This is another software I developed with a team. On our platform, it
                              is possible to carry out user management with login access control,
                              technical support and administration system, reservation management,
                              and statistical analysis of all system users.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 p-4 col bg-darker">
                      <div className="flex space-x-1 space-y-1">
                        <div className="avatar">
                          <div className="w-8 h-8">
                            <img
                              src="https://miro.medium.com/max/500/1*AbiX4LwtSNozoyfypcKvEg.png"
                              alt="Spring Boot"
                            />
                          </div>
                        </div>
                        <span className="font-mono text-xs font-bold">Spring Boot</span>
                      </div>
                      <div className="flex space-x-1 space-y-1">
                        <div className="avatar">
                          <div className="w-8 h-8 ">
                            <img
                              src="https://db.apache.org/derby/logo/final_logo.png"
                              alt="Aparche Derby"
                            />
                          </div>
                        </div>
                        <span className="font-mono text-sm font-bold">Apache Derby</span>
                      </div>
                    </div>
                    <div className="flex justify-center p-4 rounded-b-lg col bg-darker">
                      <div className="flex space-x-3">
                        <button
                          className="btn btn-outline hover:btn-secondary"
                          onClick={() => {
                            window.location = "https://github.com/majochaves/Eventbook";
                          }}
                        >
                          <span className="flex gap-3 text-white">
                            <BsGithub className="flex my-auto text-lg" />{" "}
                            <span className="flex my-auto capitalize">Visit project</span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full col-span-1">
                  <div className="table w-full">
                    <div className="p-4 text-xs font-bold uppercase rounded-t-lg bg-nosferatu-darker">
                      UmaTravel
                    </div>
                    <div className="flex p-4 col bg-darker">
                      <div className="items-center space-x-3">
                        <div className="items-center">
                          <div className="w-full p-5 text-center rounded-lg col bg-base-300">
                            <strong className="text-2xl text-green">UmaTravel</strong>
                          </div>
                          <div className="w-full mx-auto mt-5">
                            <div className="text-sm text-justify text-gray-400">
                              UmaTravel is an alternative tool to{" "}
                              <a
                                href="https://www.blablacar.es/"
                                className="font-bold underline text-info"
                              >
                                Blablacar
                              </a>
                              , dedicated to UMA students, youl'll be able to{" "}
                              <strong className="text-primary">
                                share your trips with other students or find a ride to your
                                university center
                              </strong>
                              .
                              <br /> <br />
                              This is a university project I developed with a team. On our platform,
                              it is possible to post your own trips and{" "}
                              <strong className="text-yellow">
                                receive real payments from other users
                              </strong>
                              , as well as pay for other users' trips.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 p-4 col bg-darker">
                      <div className="flex space-x-1 space-y-1">
                        <div className="avatar">
                          <div className="w-8 h-8">
                            <img
                              src="https://miro.medium.com/max/500/1*AbiX4LwtSNozoyfypcKvEg.png"
                              alt="Spring Boot"
                            />
                          </div>
                        </div>
                        <span className="font-mono text-xs font-bold">Spring Boot</span>
                      </div>
                      <div className="flex space-x-1 space-y-1">
                        <div className="avatar">
                          <div className="w-8 h-8 ">
                            <img
                              src="https://camo.githubusercontent.com/e7386392627be686eea413e55b9e171ff463fbb53df9592fd27ce6d0843cedbf/68747470733a2f2f7777772e7376677265706f2e636f6d2f73686f772f3333313438382f6d6f6e676f64622e737667"
                              alt="MongoDB"
                            />
                          </div>
                        </div>
                        <span className="font-mono text-sm font-bold">MongoDB</span>
                      </div>
                      <div className="flex space-x-1 space-y-1">
                        <div className="avatar">
                          <div className="w-8 h-8 ">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
                              alt="Vue.js"
                            />
                          </div>
                        </div>
                        <span className="font-mono text-sm font-bold">Vue.js</span>
                      </div>
                      <div className="flex space-x-1 space-y-1">
                        <div className="avatar">
                          <div className="w-8 h-8 ">
                            <img src="https://www.scantranx.com/images/stripe.png" alt="Stripe" />
                          </div>
                        </div>
                        <span className="font-mono text-sm font-bold">Stripe</span>
                      </div>
                    </div>
                    <div className="flex justify-center p-4 rounded-b-lg col bg-darker">
                      <div className="flex space-x-3">
                        <button
                          className="btn btn-outline hover:btn-secondary"
                          onClick={() => {
                            window.location = "https://github.com/merlindaniel/TransportesUma";
                          }}
                        >
                          <span className="flex gap-3 text-white">
                            <BsGithub className="flex my-auto text-lg" />{" "}
                            <span className="flex my-auto capitalize">Visit project</span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
