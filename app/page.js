"use client";
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';




export default function Home() {
 
  return (
    <main className='flex justify-center homecontainer rounded-2xl ' >
      <div className='box-border flex flex-col gap-8 mb-5 md:flex-row w-full md:flex '>
        <img className= 'box-content rounded-r-full rounded-b-full md:max-h-96 max-w-md md:w-1/30 hover:ml-4 hover:scale-110'  src='/profile.jpg '/>
        <div className='flex shrink flex-col space-y-8 mt-5'>
        <h1 className='text-5xl font-bold'> 👩🏼‍💻 Yashodhi Chathurangi</h1>
        <h2 className='text-3xl '>Full-stack Software Developer 💻</h2>
        <span className='flex justify-around gap-8'>
          <button className='animate-bounce border-2 border-neutral p-2 rounded-full hover:bg-white hover:text-sky-950 ring-2 ring-blue-500 hover:animate-none hover:scale-150'> 
            <Link href="/projects">
            📂 See my work
            </Link> 
          </button>
          <button className='animate-bounce border-2 border-neutral p-2 rounded-full ring-2 hover:bg-white hover:animate-none hover:scale-150 hover:text-sky-950  ring-blue-500'>
            <Link href="/contact">
            ✉️ Contact me
            </Link>
          </button>
        </span>
        <span className='flex gap-5 pt-5 justify-center'>
        <Link target="_blank" href={"https://github.com/yashodhicy/ "} className='hover:animate-pulse hover:scale-110'>
           <FontAwesomeIcon icon={faGithub} size='2x'/>
          </Link>
          <Link target="_blank" href={"https://www.linkedin.com/in/yashodhichathurangi/"} className='hover:animate-pulse hover:scale-110'>
           <FontAwesomeIcon  icon={faLinkedin} size='2x'/>
          </Link>
          <Link target="_blank" href={"https://twitter.com/Yashichathucy"} className='hover:animate-pulse hover:scale-110'>
           <FontAwesomeIcon icon={faTwitter} size='2x'/>
          </Link>
          <Link target="_blank" href={"mailto:yashodhichathurangi94@gmail.com" } className='hover:animate-pulse hover:scale-110'>
           <FontAwesomeIcon icon={faEnvelope} size='2x' className='hover:animate-pulse hover:scale-110'/>
          </Link>
          </span>
        </div>
      </div>   
    </main>
  )
}
