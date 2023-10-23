"use client";
import { useEffect, useState } from "react";
import "./about.css";


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
        " Showcasing analytical prowess, technical acumen, and problem-solving skills.",
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
        " Ready to embark on a remarkable journey together!",
      ],
    },
  ];

  const totalCards = aboutme.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      // Increment the currentCard, but loop back to the first card when it exceeds the total number of cards.
      setCurrentCard((currentCard + 1) % totalCards);
    }, 4000);

    return () => {
      clearTimeout(timer); // Clear the timer when the component unmounts or when the dependency changes.
    };
  }, [currentCard, totalCards]);

  return (
    <div className=" m-4">
      {aboutme.map((item, index) => (
        <div
          key={index}
          className={`w-full shadow-md justify-around shadow-cyan-600 transform transition-opacity ease-in ${
            index === currentCard ? "scale-96 p-2 h-96 a opacity-100" : "h-0 w-0 scale-0 opacity-0 bg-slate-900"
          }`}
        >
          <h1 className="flex text-2xl font-bold mx-auto p-2 my-3  ring-2 rounded-md border-2 h-fit w-fit ">
            {item.position}
          </h1>
          <ul className="flex  flex-col text-2xl mx-auto p-2 my-3 h-fit w-fit text-justify justify-start">
            {item.skills.map((s, index) => (
              <li className="text-xl py-4" key={index}>{s}</li>
            ))}
          </ul>
        </div>
      ))}

    </div>
  );
};
export default Aboutme;
