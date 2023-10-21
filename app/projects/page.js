"use client";
import React, { useEffect, useState } from "react";
import "./projects.css";
import { Caladea } from "next/font/google";
import Link from "next/link";


const Projects = () => {
  const [model, setModel] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  const openPopup = (index) => {
    setModel(true);
    setSelectedProjectIndex(index);
  };

  const closePopup = () => {
    setModel(false);
    setSelectedProjectIndex(null);

  };

  useEffect(() => {
    console.log("selectedProjectIndex:", selectedProjectIndex);
  }, [selectedProjectIndex]);

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
              className="flex flex-col shrink ring-4 rounded-xl border-2 border-white mx-4 my-6 py-2 sm:h-72 sm:w-72  text-white hover:scale-110  snap-normal snap-center "
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
              
            </div>
          ))}
        </div>
        {selectedProjectIndex !== null && (
        <div class="fixed inset-0 flex items-center justify-center z-50 bg-slate-900 bg-opacity-90 ">
        <div className="flex absolute shadow-xl shadow-white rounded-lg flex-col top-16 border-2 border-y-cyan-50 bg-slate-900 m-6 min-h-4/6 ">
          <h1 className="text-md">{projects[selectedProjectIndex].name}</h1>
          <div className="flex flex-col popup-content m-3 sm:flex-row">
  
            <div className="box-border my-3 sm:px-3 sm:justify-right ">
            <img
                className="flex shrink h-full box-content  rounded-lg"
                src={projects[selectedProjectIndex].image}
            ></img>
            </div>
            <div className="flex flex-col box-border ">
              <button className="box-content absolute text-right top-0 right-2" onClick={closePopup}>Close</button>
              <article className="box-content mt-3 px-3 border-2 rounded-lg ring-2 ">
                <p className="text-justify">{projects[selectedProjectIndex].description}</p>
              </article>
              <span className=" box-content flex justify-between mt-5 gap-3 sm:flex-row sm:gap-4 ">
                <Link href={projects[selectedProjectIndex].github} className=' ring-2 rounded-lg border border-white px-2 hover:bg-white hover:text-sky-950 hover:font-bold'> Github code </Link>
              <Link href={projects[selectedProjectIndex].live} className=' ring-2 rounded-lg border border-white px-2 hover:bg-white hover:text-sky-950 hover:font-bold'> Live Link </Link>
              </span>
            </div>

          </div>
        </div>
        </div>
      )}
      </div>
      
    </>
  );
};

export default Projects;
