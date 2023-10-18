import React from 'react';
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
        }
    ]
    return (
    <>
        <h1>Projects</h1>
        <div className='flex justify-center h-96 w-full'>
            <div className="grid items-center grid-cols-3 gap-4 mt-6 mx-6 snap-x snap-mandatory  bg-slate-200 h-80 w-full">
            {projects.map((p,index) => (
            <div key={index} className="flex mx-2 bg-red-700 h-72 w-80 text-white">
              <h2>{p.name}</h2>
            </div>
            ))}
            </div>
        </div>
        
    </>
    )
        
    
}

export default Projects