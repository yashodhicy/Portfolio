'use client'

import { useState } from "react";
import Link from "next/link";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBar() {
    const [isNavVisible , setIsNavVisible] = useState(false);

  const togglenav = () => {
    setIsNavVisible(!isNavVisible);
    
  }

  return (
     <>
          <nav className="flex m-2 rounded-md fixed top-0 z-10 md:invisible md:h-0">
            <buttoon className='text-white m-1' onClick= {() => togglenav()}><FontAwesomeIcon icon={faBars} size="x" /></buttoon>
          </nav>
          <nav className={`flex fixed z-10 top-0 w-full items-center mx-2 text-white ${isNavVisible ? 'visible' : 'invisible'}   md:justify-around md:relative md:h-12 md:mb-5 md:bg-slate-900 md:rounded-full md:visible md:flex-row md:w-auto`}>
            <ul className=" text-lg mt-10 flex flex-col w-40 p-2 gap-4 bg-opacity-90 rounded-r-full bg-slate-900  md:w-auto md:flex-row  md:gap-20 md:rounded-full md:mt-0">
              <li className="hover:bg-white rounded-lg px-2 hover:text-sky-900 hover:scale-110">
                <Link href="/" onClick={()=>togglenav()}>Home</Link>
              </li>
              <li className="hover:bg-white rounded-lg px-2 hover:text-sky-900 hover:scale-110">
                <Link href="/aboutme" onClick={()=>togglenav()}>About me</Link>
              </li >
              <li className="hover:bg-white rounded-lg px-2 hover:text-sky-900 hover:scale-110">
                <Link href="/projects" onClick={()=>togglenav()}>My work</Link>
              </li>
              <li className="hover:bg-white rounded-lg px-2 hover:text-sky-900 hover:scale-110">
                <Link href="/contact" onClick={()=>togglenav()}>Contact</Link>
              </li>
            </ul>
          </nav>
    </> );
}
