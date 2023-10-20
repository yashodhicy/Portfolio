'use client'

import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
    const [isNavVisible , setIsNavVisible] = useState(false);

  const togglenav = () => {
    setIsNavVisible(!isNavVisible);
    
  }

  return (
     <>
          <nav className="flex w-full mx-2  md:invisible md:h-0">
            <buttoon className='text-white' onClick= {() => togglenav()}>menu</buttoon>
          </nav>
          <nav className={`flex absolute w-full items-center mx-2 text-white ${isNavVisible ? 'visible' : 'invisible'}   md:justify-around md:relative md:h-12 md:mb-5 md:bg-slate-900 md:rounded-full md:visible md:flex-row md:w-auto`}>
            <ul className=" text-lg flex flex-col w-32 p-2 gap-4 bg-opacity-90 rounded-r-full bg-slate-900 md:w-auto md:flex-row  md:justify-around md:rounded-full ">
              <li>
                <Link href="/" onClick={()=>togglenav()}>Home</Link>
              </li>
              <li>
                <Link href="/aboutme" onClick={()=>togglenav()}>About me</Link>
              </li>
              <li>
                <Link href="/projects" onClick={()=>togglenav()}>My work</Link>
              </li>
              <li>
                <Link href="/contact" onClick={()=>togglenav()}>Contact</Link>
              </li>
            </ul>
          </nav>
    </> );
}
