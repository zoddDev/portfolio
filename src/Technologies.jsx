import React from "react";

export const Technologies = () => {
  return (
    <section id="technologies">
      <div
        className="h-auto bg-base-300 hero"
        style={{
          backgroundImage: `url("https://external-preview.redd.it/3X51E9WzpORp4fh6N9qGSsAZt2r0xWHxL5qEBvtqDP8.jpg?auto=webp&s=f759df94eaec9ed65c1b02f5f6cf8008912c24cb")`,
        }}
      >
        <div className="p-24 hero-overlay bg-opacity-60"></div>
        <div className="w-full text-center">
          <div className="w-full p-5 my-10">
            <h1 className="mb-10 font-mono text-5xl font-bold">Technologies</h1>
            <div className="w-full overflow-x-auto">
              <div className="grid w-full grid-cols-1 gap-2 my-10 md:grid-cols-4">
                <div className="w-full">
                  <div className="table w-full">
                    <div className="p-4 text-xs font-bold uppercase rounded-t-lg bg-nosferatu-darker">
                      Languages
                    </div>
                    <div className="flex p-4 col bg-darker">
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="w-12 h-12 mask mask-squircle">
                            <img
                              src="https://www.manualweb.net/img/logos/java.png"
                              alt="Java"
                              className="bg-white"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">Java</div>
                          <div className="text-sm text-gray-400">Programming language</div>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex p-4 col bg-darker">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="w-12 h-12 mask mask-squircle">
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                                alt="JavaScript"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">JavaScript</div>
                            <div className="text-sm text-gray-400">Programming language</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex p-4 col bg-darker">
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="w-12 h-12 mask mask-squircle">
                            <img src="https://docs.python.org/3/_static/py.svg" alt="Python" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">Python</div>
                          <div className="text-sm text-gray-400">Programming language</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex p-4 col bg-darker">
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="w-12 h-12 mask mask-squircle">
                            <img
                              src="https://camo.githubusercontent.com/ec53c971341583c0d50346351a7b04827968bb14d38073afa7f54a843ad18f32/68747470733a2f2f6c69676e75782e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031382f30362f62617368322e706e67"
                              alt="Bash"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">Bash</div>
                          <div className="text-sm text-gray-400">Scripting language</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex p-4 rounded-b-lg col bg-darker">
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="w-12 h-12 mask mask-squircle">
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png"
                              alt="HTML5"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">HTML5</div>
                          <div className="text-sm text-gray-400">Markup language</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex p-4 rounded-b-lg col bg-darker">
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="w-12 h-12 mask mask-squircle">
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
                              alt="CSS3"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">CSS3</div>
                          <div className="text-sm text-gray-400">Stylesheet language</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="table w-full">
                    <div className="p-4 text-xs font-bold uppercase rounded-t-lg bg-nosferatu-darker">
                      Backend
                    </div>
                    <div className="flex p-4 col bg-darker">
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="w-12 h-12 mask mask-squircle">
                            <img src="https://miro.medium.com/v2/resize:fit:1400/1*CIHazLUXhBCxiho2mE2glQ.png" alt="Spring Boot" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">Spring Boot</div>
                          <div className="text-sm text-gray-400">Backend framework</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex p-4 col bg-darker">
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="w-12 h-12 mask mask-squircle">
                            <img src="https://midu.dev/images/tags/node.png" alt="Node.js" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">Node.js</div>
                          <div className="text-sm text-gray-400">Server environment</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex p-4 col bg-darker">
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="w-12 h-12 mask mask-squircle">
                            <img src="https://i.imgur.com/axM6eRi.png" alt="Express.js" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">Express.js</div>
                          <div className="text-sm text-gray-400">Backend framework</div>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex p-4 col bg-darker">
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="w-12 h-12 mask mask-squircle">
                            <img
                              src="https://cdn.worldvectorlogo.com/logos/fastapi-1.svg"
                              alt="FastAPI"
                              className=""
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">FastAPI</div>
                          <div className="text-sm text-gray-400">Backend framework</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex p-4 col bg-darker">
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="w-12 h-12 mask mask-squircle">
                            <img
                              src="https://camo.githubusercontent.com/e7386392627be686eea413e55b9e171ff463fbb53df9592fd27ce6d0843cedbf/68747470733a2f2f7777772e7376677265706f2e636f6d2f73686f772f3333313438382f6d6f6e676f64622e737667"
                              alt="MongoDB"
                              className=""
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">MongoDB</div>
                          <div className="text-sm text-gray-400">Database system</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex p-4 rounded-b-lg col bg-darker">
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="w-12 h-12 mask mask-squircle">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/640px-Postgresql_elephant.svg.png"
                              alt="PostgreSQL"
                              className="p-1"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">PostgreSQL</div>
                          <div className="text-sm text-gray-400">Database system</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex p-4 col bg-darker">
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="w-12 h-12 mask mask-squircle">
                            <img
                              src="https://www.webopedia.com/wp-content/uploads/1997/02/Webo.OracleProfile.png"
                              alt="Oracle"
                              className=""
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">Oracle SQL</div>
                          <div className="text-sm text-gray-400">Database system</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="table w-full">
                    <div className="p-4 text-xs font-bold uppercase rounded-t-lg bg-nosferatu-darker">
                      Frontend
                    </div>
                    <div className="flex p-4 col bg-darker">
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="w-12 h-12 mask mask-squircle">
                            <img src="https://i.imgur.com/Vm4fGbx.png" alt="React" className="" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">React</div>
                          <div className="text-sm text-gray-400">Frontend framework</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex p-4 col bg-darker">
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="w-12 h-12 mask mask-squircle">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png"
                              alt="TailwindCSS"
                              className=""
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">TailwindCSS</div>
                          <div className="text-sm text-gray-400">CSS framework</div>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex p-4 rounded-b-lg col bg-darker">
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="w-12 h-12">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png"
                              alt="Bootstrap"
                              className="px-1 py-2"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">Bootstrap</div>
                          <div className="text-sm text-gray-400">CSS framework</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="table w-full">
                    <div className="p-4 text-xs font-bold uppercase rounded-t-lg bg-nosferatu-darker">
                      Operating Systems
                    </div>
                    <div className="flex p-4 col bg-darker">
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="w-12 h-12 mask mask-square">
                            <img
                              src="https://camo.githubusercontent.com/34c7c20e2ade0b69663311491266f8548f1d85ab713fa9d7bbef35098226b52d/68747470733a2f2f69312e77702e636f6d2f61726368697465636e6f6c6f6769612e65732f77702d636f6e74656e742f75706c6f6164732f323031392f31302f6d6963726f736f66742d77696e646f77732d6c6f676f2e706e673f73736c3d31"
                              alt="Windows"
                              className="p-1"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">Windows</div>
                          <div className="text-sm text-gray-400">Operating system</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex p-4 col bg-darker">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="w-12 h-12 mask mask-square">
                              <img
                                src="https://wiki.installgentoo.com/images/f/f9/Arch-linux-logo.png"
                                alt="Arch Linux"
                                className="p-1"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">Arch Linux</div>
                            <div className="text-sm text-gray-400">GNU/Linux distribution</div>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex p-4 rounded-b-lg col bg-darker">
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="w-12 h-12 mask mask-square">
                            <img
                              src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_140,h_140/https://assets.ubuntu.com/v1/c4f35e06-products-hero-ubuntu.svg"
                              alt="Ubuntu"
                              className="p-1"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">Ubuntu</div>
                          <div className="text-sm text-gray-400">GNU/Linux distribution</div>
                        </div>
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
