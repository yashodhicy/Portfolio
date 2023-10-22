
import Aboutme from './aboutme/page'
import Projects from './projects/page'
import AboutmeLayout from './aboutme/layout'
import ProjectsLayout from './projects/layout'
import Link from 'next/link'



export default function Home() {
 
  return (
    <main className='flex justify-center homecontainer rounded-2xl ' >
      <div className='flex flex-col gap-8 mb-5 md:flex-row w-full md:flex '>
        <img className= 'rounded-r-full rounded-b-full max-h-96 max-w-md md:w-1/30'  src='/profile.jpg'/>
        <div className='flex shrink flex-col space-y-8 mt-5'>
        <h1 className='text-5xl font-bold'> Yashodhi Chathurangi</h1>
        <h2 className='text-3xl '>Full-stack Software Developer</h2>
        <span className='flex justify-around gap-8'>
          <button className='animate-bounce border-2 border-neutral p-2 rounded-full hover:bg-white hover:text-sky-950 ring-2 ring-blue-500 hover:animate-none hover:scale-150'> 
            <Link href="/projects">
              See my work
            </Link> 
          </button>
          <button className='animate-bounce border-2 border-neutral p-2 rounded-full ring-2 hover:bg-white hover:animate-none hover:scale-150 hover:text-sky-950  ring-blue-500'>
            <Link href="/contact">
              Contact me
            </Link>
          </button>
        </span>
        </div>
      </div>   
    </main>
  )
}
