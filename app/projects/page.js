"use client";
import React, { useEffect, useRef, useState } from "react";
import "./projects.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faArrowAltCircleLeft, faArrowLeft, faCaretLeft, faTimes } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const [model, setModel] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const projectsContainerRef = useRef(null);

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

  const scrollNext = () => {
    if (projectsContainerRef.current) {
      const container = projectsContainerRef.current;
      const projectWidth = container.children[0].offsetWidth;
      container.scrollLeft += projectWidth;
    }
  };

  const scrollPrevious = () => {
    if (projectsContainerRef.current) {
      const container = projectsContainerRef.current;
      const projectWidth = container.children[0].offsetWidth;
      container.scrollLeft -= projectWidth;
    }
  };

  const projects = [
    {
      image: "/house.png",
      name: "RentHub",
      description:
      "Discover the perfect full-stack app for your dream vacation! Rent luxurious apartments and create unforgettable getaways. List your beautiful properties for rent, turning them into extra income for your next adventure.",
      tech: ["ROR", "React", "Redux", "JS", "HTML" , "CSS"],
      live: "https://final-capstone-n7jz.onrender.com/",
      github: "https://github.com/yashodhicy/Final-capstone-front-end",
    },
    {
      image: "/budget.png",
      name: "Budgety",
      description:"Introducing Budget_app, your ultimate mobile finance companion! Seamlessly manage your budget, customize expense categories, and pave the way to a brighter financial future, all from your mobile device. Take control, track your spending, and gain peace of mind – because financial empowerment is now just a tap away!",
      tech: ["Ruby", "ROR", "PostgreSQL"],
      live: "https://yashbudgetapp.onrender.com/",
      github: "https://github.com/yashodhicy/Budget_app",
    },
    {
      image: "/shows.png",
      name: "Top Shows",
      description:
        "Where Entertainment Meets Your Voice! Explore TV series and movies, share your thoughts with comments, and connect with fellow viewers. Your entertainment experience, your way!",
      tech: ["JS" , "HTML" , "CSS"],
      live: "https://yashodhicy.github.io/JScapstone/dist/",
      github: "https://github.com/yashodhicy/JScapstone",
    },
    {
      image: "/rocket.png",
      name: "Space Travelers",
      description:
        "If you've ever dreamt of visiting the Moon or Mars, today's the day to turn those dreams into reality. Reserve your rocket now and let your cosmic adventure begin. Remember, it's never too late to reach for the stars and make your biggest dreams take flight.",
      tech: [ "React", "Redux","Bootstrap" , "HTML" , "CSS"],
      live: "https://spacetravelers-vp0l.onrender.com/",
      github: "https://github.com/yashodhicy/spaceTravelers",
    },
    {
      image: "/bookstore.png",
      name: "BookStore",
      description:
        "Add Favorites and Dive into Chapters! As an ongoing project, you can curate your book collection, read at your pace, and enjoy the ongoing adventure. Your favorites, your chapters, all in one app.",
      tech: ["ROR", "React", "Redux"],
      live: "https://bookstore-vrbz.onrender.com/",
      github: "https://github.com/yashodhicy/bookstore",
    }
  ];

  
  return (
    <div className="mb-5 md:h-96">
      <h1 className=" text-2xl">Projects</h1>
      <div className="flex justify-center w-88">
      <button
          className="hidden sm:block text-white py-2 px-4 rounded-lg mt-4 border-none "
          onClick={scrollPrevious}
        >
          <FontAwesomeIcon icon={faAngleLeft} size='x'/>
        </button>
        <div ref={projectsContainerRef}
        className="grid grid-flow-row gap-4 mt-4 mx-8 snap-x snap-mandatory w-full overflow-y-scroll scroll-smooth scrollbar-hide sm:grid-flow-col">
          {projects.map((p, index) => (
            <div
              key={index}
              className="flex flex-col shrink ring-4 rounded-xl border-2 border-white mx-4 my-6 py-2 sm:h-72 sm:w-72  text-white hover:scale-110  snap-normal snap-center  "
            >
              <h2 className=" text-lg text-center w-full">{p.name}</h2>
              <img
                className="flex shrink mx-3 h-1/2 rounded-lg"
                src={p.image}
              ></img>
              <article className="flex flex-nowrap justify-evenly gap-2 m-3 ">
                {p.tech.map((p, index) => (
                  <span key={index}>{p}</span>
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
        <button
          className="hidden sm:block text-white py-2 px-4 rounded-lg mt-4"
          onClick={scrollNext}
        >
          <FontAwesomeIcon icon={faAngleRight} size='x'/>
        </button>
        {selectedProjectIndex !== null && (
        <div class="fixed inset-0 flex items-center justify-center z-50 bg-slate-900 bg-opacity-90 ">
        <div className="flex absolute shadow-xl shadow-white rounded-lg flex-col top-16 border-2 border-y-cyan-50 bg-slate-900 m-6 min-h-4/6 ">
          <h1 className="text-md">{projects[selectedProjectIndex].name}</h1>
          <div className="grid grid-flow-row popup-content m-3 sm:grid-flow-col">
  
            <div className="box-border my-3 sm:px-3 sm:justify-right ">
            <img
                className="flex shrink h-full box-content rounded-lg"
                src={projects[selectedProjectIndex].image}
            ></img>
            </div>
            <div className="flex flex-col box-border ">
              <button className="box-content absolute text-right top-0 right-2" onClick={closePopup}><FontAwesomeIcon icon={faTimes} size="2x" /></button>
              <article className="box-content mt-3 px-3 border-2 rounded-lg ring-2 ">
                <p className="text-justify">{projects[selectedProjectIndex].description}</p>
              </article>
              <span className=" box-content flex justify-between mt-5 gap-3 sm:flex-row sm:gap-4 ">
                <Link target="_blank" href={projects[selectedProjectIndex].github} className=' ring-2 rounded-lg border border-white px-2 hover:bg-white hover:text-sky-950 hover:font-bold'> Github code </Link>
              <Link target="_blank" href={projects[selectedProjectIndex].live} className=' ring-2 rounded-lg border border-white px-2 hover:bg-white hover:text-sky-950 hover:font-bold'> Live Link </Link>
              </span>
            </div>

          </div>
        </div>
        </div>
      )}
      </div>
      
    </div>
  );
};

export default Projects;
