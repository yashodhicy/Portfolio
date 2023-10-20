"use client";
import React, { useState } from "react";
import "./projects.css";

const Projects = () => {
  const [model, setModel] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  const openPopup = (index) => {
    setModel(true);
    setSelectedProjectIndex(index);
    console.log("selectedProjectIndex:", selectedProjectIndex);
  };

  const closePopup = () => {
    setModel(false);
    setSelectedProjectIndex(null);
    console.log("selectedProjectIndex:", selectedProjectIndex);
  };

  const projects = [
    {
      image: "/house.png",
      name: "RentHub",
      description:
        "This is a full stack app that can use to rent a nice appartment and spend a wonderfull vacation there.We can add our nice properties for rent and have some extra money for our pocket.",
      tech: ["ROR", "React", "Redux", "JS", "HTML/CSS"],
      live: "https://final-capstone-n7jz.onrender.com/",
      github: "https://github.com/yashodhicy/Final-capstone-front-end",
    },
    {
      image: "/house.png",
      name: "RentHub",
      description:
        "This is a full stack app that can use to rent a nice appartment and spend a wonderfull",
      tech: ["ROR", "React", "Redux"],
      live: "https://final-capstone-n7jz.onrender.com/",
      github: "https://github.com/yashodhicy/Final-capstone-front-end",
    },
    {
      image: "/house.png",
      name: "RentHub",
      description:
        "This is a full stack app that can use to rent a nice appartment and spend a wonderfull",
      tech: ["ROR", "React", "Redux"],
      live: "https://final-capstone-n7jz.onrender.com/",
      github: "https://github.com/yashodhicy/Final-capstone-front-end",
    },
    {
      image: "/house.png",
      name: "RentHub",
      description:
        "This is a full stack app that can use to rent a nice appartment and spend a wonderfull",
      tech: ["ROR", "React", "Redux"],
      live: "https://final-capstone-n7jz.onrender.com/",
      github: "https://github.com/yashodhicy/Final-capstone-front-end",
    },
    {
      image: "/house.png",
      name: "RentHub",
      description:
        "This is a full stack app that can use to rent a nice appartment and spend a wonderfull",
      tech: ["ROR", "React", "Redux"],
      live: "https://final-capstone-n7jz.onrender.com/",
      github: "https://github.com/yashodhicy/Final-capstone-front-end",
    },
    {
      image: "/house.png",
      name: "RentHub",
      description:
        "This is a full stack app that can use to rent a nice appartment and spend a wonderfull",
      tech: ["ROR", "React", "Redux"],
      live: "https://final-capstone-n7jz.onrender.com/",
      github: "https://github.com/yashodhicy/Final-capstone-front-end",
    },
  ];

  return (
    <>
      <h1 className=" text-2xl">Projects</h1>
      <div className="flex justify-center w-88 md:h-96">
        <div className="grid grid-flow-row gap-4 mt-4 mx-8 snap-x snap-mandatory w-full overflow-y-scroll scroll-smooth scrollbar-hide sm:grid-flow-col">
          {projects.map((p, index) => (
            <div
              key={index}
              className="flex flex-col shrink ring-4 rounded-xl border-2 border-white mx-4 my-6 sm:h-72 sm:w-72  text-white hover:scale-110  snap-normal snap-center "
            >
              <h2 className=" text-lg text-center w-full">{p.name}</h2>
              <img
                className="flex shrink mx-3 h-1/2 rounded-lg"
                src={p.image}
              ></img>
              <article className="flex flex-nowrap justify-evenly gap-2 m-3 ">
                {p.tech.map((p) => (
                  <span>{p}</span>
                ))}
              </article>
              <button
                key={index}
                className=" mx-auto w-1/2 ring-2 rounded-lg border border-white px-2 hover:bg-white hover:text-sky-950 hover:font-bold"
                onClick={() => openPopup(index)}
              >
                {" "}
                See Project{" "}
              </button>
              <span className="flex flex-col gap-3 justify-between m-3 sm:flex-row sm:gap-0">
                {/* <Link href={p.github} className=' ring-2 rounded-lg border border-white px-2 hover:bg-white hover:text-sky-950 hover:font-bold'> Github code </Link>
              <Link href={p.live} className=' ring-2 rounded-lg border border-white px-2 hover:bg-white hover:text-sky-950 hover:font-bold'> Live Link </Link> */}
              </span>
            </div>
          ))}
        </div>
      </div>
      {model && selectedProjectIndex !== null && (
        <div className="popup">
          <div className="popup-content">
            <h1>Hello {selectedProjectIndex}</h1>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
