"use client";
import { useEffect, useState } from "react";
import "./about.css";
import Link from "next/link";
import { Accordion, AccordionItem, Chip } from "@nextui-org/react";

const Aboutme = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const aboutme = [
    {
      position: "Full-Stack Developer",
      skills: [
        " Proficient in bridging diverse cultures and fostering innovation.",
        " A seasoned Full-Stack Developer with a global perspective.",
      ],
    },
    {
      position: "Quality Assurance Expertise",
      skills: [
        " Over two years of Quality Assurance Engineering experience.",
        " Mastery in client handling, project management, and leadership.",
      ],
    },
    {
      position: "Project Portfolio",
      skills: [
        " Extensive experience with 40+ projects.",
        " Showcasing analytical prowess, technical acumen, and problem-solving skills."
      ],
    },
    {
      position: "Unwavering Commitment to Excellence",
      skills: [" A journey marked by an unwavering commitment to excellence."],
    },
    {
      position: "Future-Ready",
      skills: [
        " Excited to lead the way in the ever-evolving realm of technology.",
        " Ready to embark on a remarkable journey together!"
      ],
    },
  ];

  const skills = {
    "Front-end": [
      "JavaScript",
      "Next",
      "React",
      "Redux",
      "Tailwindcss",
      "HTML5",
      "CSS3",
    ],
    "Back-end": ["Ruby", "Ruby on Rails", "MySQL", "PostgreSQL", "Python"],
    "Tools & Method": [
      "Git",
      "GitHub",
      "Postman",
      "Selenium",
      "JMeter",
      "Render",
    ],
    "Professional skills": [
      "Critical thinking",
      "Pair-Programming",
      "Teamwork",
      "Mentoring",
      "Leadership",
    ],
  };

  const totalCards = aboutme.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      // Increment the currentCard, but loop back to the first card when it exceeds the total number of cards.
      setCurrentCard((currentCard + 1) % totalCards);
    }, 5000);

    return () => {
      clearTimeout(timer); // Clear the timer when the component unmounts or when the dependency changes.
    };
  }, [currentCard, totalCards]);

  return (
      <section className="grid grid-flow-row  md:grid-flow-col">
        <div className=" top-1 mx-2">
          <div className="box-border w-full">
          {aboutme.map((item, index) => (
            <div
              key={index}
              className={` box-content m-2 shadow-md justify-start shadow-cyan-600 transform transition-opacity ease-in ${
                index === currentCard
                  ? "scale-96 p-2 mb-5 opacity-100"
                  : "h-0 w-0 scale-0 opacity-0 bg-slate-900"
              }`}
            >
              <h1 className="flex text-2xl font-bold mx-auto p-2 mt-2 ring-2 rounded-md border-2 h-fit w-fit ">
                {item.position}
              </h1>
              <ul className="flex flex-col text-2xl mx-auto p-2 my-3 h-fit w-fit text-justify justify-start">
                {item.skills.map((s, index) => (
                  <li className="text-xl py-4" key={index}>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          </div>
          <div className="flex box-content relative mb-5">
          <Link
        href={
          "https://docs.google.com/document/d/1sQStA93hGQxk1MVb9OBb1kfZG1hKTZ98TRDeBOvZ-y0/edit?usp=sharing" 
        }
        target="_blank"
        className="text-2xl p-3 ring-2 rounded-md w-fit m-auto hover:bg-sky-900 hover:ring-0 hover:border-2 hover:scale-90"
      >
        My resume
      </Link>
      </div>
        </div>
        <div className="m-2">
          {Object.keys(skills).map((key , index) => (
            <>
              <Accordion variant="bordered">
                <AccordionItem
                  key={index}
                  aria-label={key}
                  title={key}
                  className=" my-2 border-2 border-white rounded-lg pl-2 ring-2"
                  
                > <span className="grid grid-cols-3 gap-2">
                  {skills[key].map((value, index) => (
                      <Chip
                      key={index}
                      variant="shadow"
                      classNames={{
                        base: "bg-gradient-to-br from-indigo-900 to-teal-700 border-small border-white/50 shadow-none wrap-border",
                        content: "drop-shadow shadow-black text-white",
                      }}
                    >{value}
                    </Chip>
                  ))}
                  </span>
                </AccordionItem>
              </Accordion>
            </>
          ))}
        </div>
      </section>
  );
};
export default Aboutme;
