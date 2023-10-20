import React from 'react';
import "./projects.css";
import { tsParticles } from "tsparticles-engine";
const Projects = () => {
    const projects = [
        { 
            image: './house.png',
            name: 'RentHub', 
            tech: ['ROR', 'React', 'Redux']
        },
        { 
            image: './house.png',
            name: 'RentHub', 
            tech: ['ROR', 'React', 'Redux']
        },
        { 
        image: './house.png',
        name: 'RentHub', 
        tech: ['ROR', 'React', 'Redux']
        },
        { 
            image: './house.png',
            name: 'RentHub', 
            tech: ['ROR', 'React', 'Redux']
        },
        { 
            image: './house.png',
            name: 'RentHub', 
            tech: ['ROR', 'React', 'Redux']
        }
    ]

    return (
    <>
        <h1 className=' text-2xl'>Projects</h1>   
        <div className='flex justify-center h-96 w-88 '>
            <div className="grid grid-flow-col gap-4 mt-6 mx-6 snap-x snap-mandatory h-88 w-full overflow-x-scroll scroll-smooth scrollbar-hide">
            {projects.map((p,index) => (
            <div key={index} className="ring-4 rounded-xl border-2 border-white flex mx-4 my-4 h-72 w-72  text-white hover:scale-110 snap-normal snap-center ">
              <h2 className=' text-lg text-center w-full'>{p.name}</h2>
            </div>
            ))}
            </div>
         </div>   
    </>
    )
        
    
}

export default Projects